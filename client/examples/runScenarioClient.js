/**
 * Scenario-based Game Client Example
 *
 * This example demonstrates how to use predefined scenarios to test
 * specific game outcomes like big wins, multipliers, and free spins.
 */

import { GameClient, GAME_SCENARIOS, USER_PROFILES, BET_CONFIGS, GameScenarioUtils } from "../index.js";

async function runScenarioClient() {
    console.log("🎰 Cascading Slot Game Client - Scenario Testing");
    console.log("=".repeat(60));

    displayAvailableScenarios();
    displayAvailableBetConfigs();
    
    const testScenarios = ["BIG_WIN", "MULTIPLIER_WIN", "FREE_SPIN", "NO_WIN"];
    const user = USER_PROFILES.HIGH_ROLLER;

    console.log(`\n👤 Testing with user: ${user.playerName}`);
    console.log("=".repeat(60));

    await testAllScenarios(testScenarios, user);
    console.log("\n🏁 Scenario testing completed!");
}

function displayAvailableScenarios() {
    console.log("\n📋 Available Scenarios:");
    const scenarios = GameScenarioUtils.listScenarios();
    scenarios.forEach((scenario, index) => {
        console.log(`${index + 1}. ${scenario.name} - ${scenario.description}`);
    });
}

function displayAvailableBetConfigs() {
    console.log("\n💰 Available Bet Configurations:");
    const betConfigs = GameScenarioUtils.listBetConfigs();
    betConfigs.forEach((config, index) => {
        const expectedBet = GameScenarioUtils.calculateBetAmount(config);
        console.log(
            `${index + 1}. ${config.name} (Level ${config.betLevel}, Coin ${config.coinValue}, Total: ${expectedBet}) - ${
                config.description
            }`
        );
    });
}

async function testAllScenarios(testScenarios, user) {
    for (const scenarioName of testScenarios) {
        await testSingleScenario(scenarioName, user);
        console.log("-".repeat(40));
    }
}

async function testSingleScenario(scenarioName, user) {
    console.log(`\n🎯 Testing Scenario: ${GAME_SCENARIOS[scenarioName].name}`);
    console.log(`📝 Description: ${GAME_SCENARIOS[scenarioName].description}`);

    const client = createGameClient(user);

    try {
        await setupScenarioBoard(client, scenarioName);
        const gameResult = await executeGameFlow(client);
        await handleGameResult(gameResult);
    } catch (error) {
        console.log("💥 Error:", error.message);
    } finally {
        client.cleanup();
    }
}

function createGameClient(user) {
    return new GameClient(user, {
        enableLogs: false, // Disable detailed logs for cleaner output
        gameServer: {
            socketUri: "http://localhost:5001/user/treasureisland",
            proxyRoute: "/socket.io",
            gameName: "TreasureIsland",
        },
    });
}

async function setupScenarioBoard(client, scenarioName) {
    const scenario = GAME_SCENARIOS[scenarioName];
    const boardResult = await client.setCustomBoard(scenario.board);

    if (boardResult.success) {
        console.log("✅ Custom board set successfully");
    } else {
        console.log("⚠️ Could not set custom board, using random board");
    }
}

async function executeGameFlow(client) {
    return client.executeFullGameFlow(BET_CONFIGS.MODERATE);
}

async function handleGameResult(gameResult) {
    if (gameResult.success) {
        const gameData = extractGameData(gameResult);
        displayGameResults(gameData);
    } else {
        console.log("❌ Game failed:", gameResult.error);
    }
}

function extractGameData(gameResult) {
    const betStep = gameResult.steps.find((step) => step.event === "bet");
    const endgameStep = gameResult.steps.find((step) => step.event === "endgame");

    return {
        betStep,
        endgameStep,
        betAmount: betStep.data.endBet,
        winAmount: endgameStep.data.win || 0,
        bigWin: endgameStep.data.bigWin,
        multiplier: endgameStep.data.multiplier || 0,
        freeSpins: endgameStep.data.freeSpins || 0
    };
}

function displayGameResults(gameData) {
    const { betStep, endgameStep, betAmount, winAmount, bigWin, multiplier, freeSpins } = gameData;
    
    console.log("🎮 Game Results:");
    console.log(`   💰 Bet Amount: ${betAmount}`);
    console.log(`   🏆 Win Amount: ${winAmount}`);
    console.log(`   ⭐ Big Win: ${bigWin ? "🎉 YES" : "No"}`);
    console.log(`   📈 Multiplier: ${multiplier}x`);
    console.log(`   🎁 Free Spins: ${freeSpins}`);
    console.log(`\n   📄 Detailed Bet Data: ${JSON.stringify(betStep.data, null, 4)}`);
    console.log(`\n   📄 Detailed End Game Data: ${JSON.stringify(endgameStep.data, null, 4)}`);

    displayProfitLoss(betAmount, winAmount);
}

function displayProfitLoss(betAmount, winAmount) {
    const profit = winAmount - betAmount;
    console.log(`   💵 Net Result: ${profit > 0 ? "+" : ""}${profit} (${profit > 0 ? "PROFIT" : "LOSS"})`);
}

// Run the example if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
    runScenarioClient().catch(console.error);
}

export default runScenarioClient;
