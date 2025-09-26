// @ts-ignore
import { createDummyUser } from "sc-game-service-integration-utils";
import { COMMON_ODDS_CONFIG, COMMON_SETTLEMENT_RESULT, SAMPLE_BOARD_DATA } from "./test-constants";

export const queryHistoryUser = { playerId: 3, playerName: "QueryHistoryUser", UID: "" };

export const playerMultipliers = {
    playerId: 6,
    time: "2022-06-22T06:16:07.186Z",
    uid: "UID",
    rounds: [
        {
            prevTotalMultiplier: 0,
            totalMultiplier: 2,
            multiplier: 2,
            time: "2022-06-22T06:16:07.186Z",
            roundId: 6,
        },
    ],
    ended: true,
    endTime: "2022-06-22T06:17:07.186Z",
};


export const stubHistoryData = async (currency, TreasureIslandRounds, TreasureIslandTotalMultipliers) => {
    const { userInfo, userSession } = await createDummyUser(queryHistoryUser.playerId, queryHistoryUser.playerName, currency);

    queryHistoryUser.UID = userSession.userId as string;
    (playerMultipliers as any).name = userSession.playerName;

    const createHistoryRound = (id: number, freeSpin: boolean) => ({
        coinValue: 1,
        betLevel: 1,
        betMultiplier: 20,
        multiplier: 0,
        totalAmount: 20,
        totalTumbleWin: 0,
        totalMultiplier: 0,
        freeSpin,
        betwin: 0,
        paid: true,
        id,
        uid: userSession.userId,
        name: userInfo.name,
        time: "2022-06-03T07:32:21.142+00:00",
        rate: 1,
        exchangeRateId: 1,
        odds: COMMON_ODDS_CONFIG,
        siteId: "4100300",
        currency: "$US",
        operatorId: "ONEworks1",
        playerId: userSession.playerId,
        __v: 0,
        endTime: "2022-06-03T07:32:21.150+00:00",
        result: SAMPLE_BOARD_DATA,
        settlementResult: COMMON_SETTLEMENT_RESULT,
    });

    const historyRounds = [
        createHistoryRound(5, false),
        createHistoryRound(6, true),
    ];


    await TreasureIslandRounds.insertMany(historyRounds);
    return TreasureIslandTotalMultipliers.insertMany([playerMultipliers]);
};
