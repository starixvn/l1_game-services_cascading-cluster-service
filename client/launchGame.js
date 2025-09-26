#!/usr/bin/env node --import=extensionless/register

/**
 * Simple Game Launcher
 *
 * Quick way to play the cascading slot game from command line
 */

import { GameClient, BET_CONFIGS } from "./index.js";
import { randomUUID, randomBytes } from "crypto";

async function launchGame() {
    console.log("🎰 Cascading Slot Game - Starting Session");
    console.log("=".repeat(50));

    const player = createPlayer();
    const client = createGameClient(player);

    try {
        const result = await client.executeFullGameFlow(BET_CONFIGS.MODERATE);
        await handleGameResult(result, client);
    } catch (error) {
        handleGameError(error);
    } finally {
        cleanupGame(client);
    }
}

function createPlayer() {
    const player = {
        playerId: `player_${Date.now()}_${generateSecureId()}`,
        playerName: `Player${generateSecureId().slice(0, 6)}`,
        currency: "USD",
    };

    console.log(`👤 Player: ${player.playerName} (ID: ${player.playerId})`);
    console.log("🎮 Starting game session...\n");
    return player;
}

function generateSecureId() {
    try {
        return randomUUID();
    } catch (error) {
        return randomBytes(16).toString('hex');
    }
}

function createGameClient(player) {
    return new GameClient(player, {
        enableLogs: true,
        gameServer: {
            socketUri: "http://localhost:5001/user/treasureisland",
            proxyRoute: "/socket.io",
            gameName: "TreasureIsland",
        },
    });
}

async function handleGameResult(result, client) {
    if (result.success) {
        console.log("\n🎉 Game Session Completed!");
        console.log("=".repeat(50));
        displayGameResults(result);
        displayGameStatistics(client);
    } else {
        console.log("\n❌ Game Session Failed!");
        console.log(`Error: ${result.error}`);
    }
}

function displayGameResults(result) {
    const betStep = result.steps.find((step) => step.event === "bet");
    const endStep = result.steps.find((step) => step.event === "endgame");

    if (!betStep || !endStep) {
        return;
    }

    const gameData = extractGameData(betStep, endStep);
    displayGameData(gameData);
    displayWinCategory(gameData);
}

function extractGameData(betStep, endStep) {
    return {
        betAmount: betStep.data.endBet,
        winAmount: endStep.data.win || 0,
        profit: (endStep.data.win || 0) - betStep.data.endBet,
        multiplier: endStep.data.multiplier || 0,
        bigWin: endStep.data.bigWin,
        freeSpins: endStep.data.freeSpins || 0
    };
}

function displayGameData(gameData) {
    const { betAmount, winAmount, profit, multiplier, bigWin, freeSpins } = gameData;
    
    console.log(`💰 Bet Amount: ${betAmount}`);
    console.log(`🏆 Win Amount: ${winAmount}`);
    console.log(`📊 Net Result: ${profit > 0 ? "+" : ""}${profit} ${profit > 0 ? "(WIN! 🎉)" : "(LOSS)"}`);
    console.log(`📈 Multiplier: ${multiplier}x ${multiplier > 1 ? "🚀" : ""}`);
    console.log(`⭐ Big Win: ${bigWin ? "YES! 🎆" : "No"}`);
    console.log(`🎁 Free Spins Won: ${freeSpins}`);
}

function displayWinCategory(gameData) {
    const { profit, betAmount } = gameData;
    
    if (profit > betAmount * 10) {
        console.log("\n🚀 MASSIVE WIN! Incredible result!");
    } else if (profit > betAmount * 5) {
        console.log("\n🎆 BIG WIN! Excellent payout!");
    } else if (profit > betAmount) {
        console.log("\n✨ GREAT WIN! Nice multiplier!");
    } else if (profit > 0) {
        console.log("\n✅ WIN! Small profit made!");
    } else if (profit === 0) {
        console.log("\n🤝 BREAK EVEN! No loss, no gain.");
    } else {
        console.log("\n💸 LOSS! Better luck next time!");
    }
}

function displayGameStatistics(client) {
    console.log("\n📊 Game Session Statistics:");
    const eventHistory = client.getEventHistory();
    console.log(`   🔄 Total Events: ${eventHistory.length}`);
    console.log(`   ⏱️  Session Duration: ${calculateSessionDuration(eventHistory)}`);
}

function calculateSessionDuration(eventHistory) {
    if (eventHistory.length === 0) {
        return "Unknown";
    }

    const startTime = new Date(eventHistory[0].timestamp);
    const endTime = new Date(eventHistory[eventHistory.length - 1].timestamp);
    const durationSeconds = Math.round((endTime - startTime) / 1000);
    
    return `~${durationSeconds}s`;
}

function handleGameError(error) {
    console.error("\n💥 Game Session Error:");
    console.error(`   ${error.message}`);

    if (error.completedSteps) {
        console.log(`\n📋 Completed ${error.completedSteps.length}/4 game steps`);
    }
}

function cleanupGame(client) {
    client.cleanup();
    console.log("\n🧹 Session ended. Connection closed.");
    console.log("\nThanks for playing! 🎰✨");
}

// Handle graceful shutdown
process.on("SIGINT", () => {
    console.log("\n\n👋 Game session interrupted. Goodbye!");
    process.exit(0);
});

// Run game launcher
if (import.meta.url === `file://${process.argv[1]}`) {
    launchGame().catch(console.error);
}

export default launchGame;
