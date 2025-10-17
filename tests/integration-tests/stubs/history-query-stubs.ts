// @ts-ignore
import { createDummyUser } from "sc-game-service-integration-utils";
import { COMMON_ODDS_CONFIG, COMMON_SETTLEMENT_RESULT, SAMPLE_BOARD_DATA } from "./test-constants";

export const queryHistoryUser = { playerId: "000101", playerName: "TestUser", UID: "" };

export const playerFreeSpinState = {
    ended: true,
    uid: "68dde22df34d308f7bf1a0f2",
    __v: 0,
    maxWin: 2000,
    name: "TestUser",
    playerId: "000101",
    rounds: [
        {
            time: new Date(),
            roundId: 43,
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
    endTime: new Date(),
};

export const stubHistoryData = async (currency, GoldAndDragonRounds, GoldAndDragonFreeSpinStates) => {
    const { userInfo, userSession } = await createDummyUser(queryHistoryUser.playerId, queryHistoryUser.playerName, currency);

    queryHistoryUser.UID = userSession.userId as string;
    (playerFreeSpinState as any).name = userSession.playerName;

    const createHistoryRound = (id: number, freeSpin: boolean) => ({
        id,
        name: userSession.playerName,
        siteId: "4100300",
        uid: userSession.userId,
        coinValue: 0.1,
        betLevel: 1,
        betMultiplier: 20,
        totalAmount: 2,
        freeSpin,
        reachMaxWin: false,
        odds: {
            symbols: COMMON_ODDS_CONFIG.odds,
            freeSpins: COMMON_ODDS_CONFIG.freeSpins,
        },
        betWin: 0,
        paid: true,
        time: new Date("2025-10-17T09:06:37.774Z"),
        currency: "INH",
        rate: 0.03935056827912655,
        exchangeRateId: 2103,
        operatorId: "ONEworksVGCash",
        playerId: userSession.playerId,
        __v: 0,
        endTime: new Date(),
        settlementResult: COMMON_SETTLEMENT_RESULT,
    });

    const historyRounds = [createHistoryRound(5, false), createHistoryRound(6, true)];

    await GoldAndDragonRounds.insertMany(historyRounds);
    return GoldAndDragonFreeSpinStates.insertMany([playerFreeSpinState]);
};
