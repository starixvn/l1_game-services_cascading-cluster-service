import { COMMON_ODDS_CONFIG, COMMON_SETTLEMENT_RESULT, SAMPLE_BOARD_DATA } from "./test-constants";

const game = {
    id: 47,
    name: "TreasureIsland",
};

const gameConfig = {
    type: 3,
    name: "treasureisland",
    displayName: "Treasure Island",
    enabled: true,
    botenabled: false,
    minbet: 0,
    maxbet: 0,
    disabledround: null,
    bot_maxbet: 10,
    hour_maxbot: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    disabled_message: "Game đang được bảo trì, vui lòng quay lại sau 10 phút.",
    choices_maxbet: null,
    odds: null,
    delayStartTime: 0,
    enableFreeBet: false,
    slotsConfig: null,
    siteExclusions: [],
    smartBotEnabled: false,
    smartBotGroupRatio: 0,
    isBeta: true,
    gameId: 47,
    randomMode: 0,
    cascadingSlotsConfig: {
        mode: 1,
        bigWinRatio: 2.5,
        multiplierBonus: { min: 2, max: 28 },
        betLevels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        betMultiplier: 20,
        maxWinPerRound: 500000,
        ...COMMON_ODDS_CONFIG,
    },
};

const currencyData = { code: "USD", name: "$US" };

const rounds = [
    {
        coinValue: 1,
        betLevel: 1,
        betMultiplier: 20,
        multiplier: 0,
        totalAmount: 20,
        totalTumbleWin: 0,
        totalMultiplier: 0,
        freeSpin: false,
        betwin: 0,
        paid: true,
        id: 4,
        uid: "61b80fa943897d4ff78ab37f",
        name: "Lychee15508",
        time: "2022-06-03T07:32:21.142+00:00",
        rate: 1,
        exchangeRateId: 1,
        odds: COMMON_ODDS_CONFIG,
        siteId: "4100300",
        currency: "$US",
        operatorId: "ONEworks1",
        playerId: "123456",
        __v: 0,
        endTime: "2022-06-03T07:32:21.150+00:00",
        result: SAMPLE_BOARD_DATA,
        settlementResult: COMMON_SETTLEMENT_RESULT,
    },
];

const currentTime = new Date();
const freeSpinsExpiredTime = new Date(currentTime.getTime() + 60 * 1000);

const playerFreeSpins = [
    {
        available: 2,
        name: "HaveTotalMultiplierUser",
        playerId: "2",
        id: 1,
        uid: "HaveTotalMultiplierUser",
        roundId: 1,
        bet: 20,
        total: 5,
        time: currentTime,
        expiryTime: freeSpinsExpiredTime,
        betLevel: 1,
        betMultiplier: 20,
        coinValue: 1,
    },
];

const playerMultipliers = [
    {
        uid: "HaveTotalMultiplierUser",
        playerId: "2",
        name: "HaveTotalMultiplierUser",
        time: currentTime,
        rounds: [{ prevTotalMultiplier: 0, totalMultiplier: 2, multiplier: 2, time: currentTime, roundId: 1 }],
        ended: false,
        endTime: freeSpinsExpiredTime,
    },
];

const socketOptions = {
    socketUri: "http://localhost:5001/user/treasureisland",
    gameName: game.name,
    proxyRoute: "/socket.io",
};

export { currencyData, game, gameConfig, playerFreeSpins, playerMultipliers, rounds, socketOptions };
