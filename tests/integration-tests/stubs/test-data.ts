import { COMMON_ODDS_CONFIG, COMMON_SETTLEMENT_RESULT, SAMPLE_BOARD_DATA } from "./test-constants";

const game = {
    id: 120,
    name: "GoldandDragon",
};

const gameConfig = {
    gameId: 120,
    bot_maxbet: 10,
    botenabled: false,
    cascadingClusterConfig: {
        bigWinRatio: [5, 10, 15],
        tileMultiplier: {
            step: 2,
            max: 20,
        },
        betLevels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        betMultiplier: 20,
        rageMeters: [15, 30, 50, 80],
        ...COMMON_ODDS_CONFIG,
    },
    delayStartTime: 0,
    disabled_message: "Game đang được bảo trì, vui lòng quay lại sau 10 phút.",
    disabledround: 0,
    displayName: "Gold and Dragon",
    enableFreeBet: false,
    enabled: true,
    exchangeReload: false,
    hour_maxbot: [
        0.0005, 0.0005, 0.0005, 0.0005, 0.0005, 0.0005, 0.0005, 0.0005, 0.0005, 0.0005, 0.0005, 0.0005, 0.0005, 0.0005, 0.0005, 0.0005,
        0.0005, 0.0005, 0.0005, 0.0005, 0.0005, 0.0005, 0.0005, 0.0005,
    ],
    maxWinPerRound: 1000,
    maxbet: 0,
    minbet: 0,
    name: "goldanddragon",
    randomMode: 0,
    siteExclusions: [],
    slotRNGConfig: null,
    slotsConfig: null,
    smartBotEnabled: false,
    smartBotGroupRatio: 0,
    time: {
        $date: "2022-07-28T02:59:36.871Z",
    },
    type: 12,
};

const currencyData = { code: "USD", name: "$US" };
const currentTime = new Date();
const freeSpinsExpiredTime = new Date(currentTime.getTime() + 60 * 1000);

const rounds = [
    {
        id: 4,
        name: "TestUser",
        siteId: "4100300",
        siteName: "lumi",
        uid: "68dde22df34d308f7bf1a0f2",
        coinValue: 0.1,
        betLevel: 1,
        betMultiplier: 20,
        totalAmount: 100,
        freeSpin: false,
        reachMaxWin: false,
        odds: {
            symbols: COMMON_ODDS_CONFIG.odds,
            freeSpins: COMMON_ODDS_CONFIG.freeSpins,
        },
        betWin: 0,
        paid: true,
        time: currentTime,
        currency: "INH",
        currencyCode: "VND",
        currencyGroupId: "61b953ad815d6c000196a14c",
        rate: 0.03935056827912655,
        exchangeRateId: 2103,
        operatorId: "ONEworksVGCash",
        playerId: "20102106",
        appType: 1,
        buyFreeSpin: 1,
        __v: 0,
        actualBetWin: 0,
        endTime: currentTime,
        sessionId: "test-session-id",
        settlementResult: COMMON_SETTLEMENT_RESULT,
    },
];

const playerFreeSpins = [
    {
        id: 6,
        uid: "68dde22df34d308f7bf1a0f2",
        name: "TestUser",
        roundId: 4,
        bet: 100,
        total: 15,
        available: 4,
        time: currentTime,
        expiryTime: freeSpinsExpiredTime,
        playerId: "000101",
        betLevel: 1,
        coinValue: 0.1,
        betMultiplier: 20,
        reachMaxWin: true,
        rootFreeSpinRoundId: 599,
        buyFreeSpin: 1,
    },
];

const playerFreeSpinStates = [
    {
        ended: true,
        uid: "68dde22df34d308f7bf1a0f2",
        maxWin: 2000,
        name: "TestUser",
        playerId: "000101",
        rounds: [
            {
                time: currentTime,
                roundId: 599,
                reelMultipliers: [
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                    [-1, -1, -1, -1, -1, -1],
                ],
                stageQueue: [],
                currentStage: 0,
                rageMeter: 0,
                remainingMaxWin: 2000,
            },
        ],
        time: currentTime,
        endTime: new Date(),
    },
];

const socketOptions = {
    socketUri: "http://localhost:5001/user/goldanddragon",
    gameName: game.name,
    proxyRoute: "/socket.io",
};

export { currencyData, game, gameConfig, playerFreeSpins, playerFreeSpinStates, rounds, socketOptions };
