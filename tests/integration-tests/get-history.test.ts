// @ts-ignore
import { GameClientDriver } from "sc-game-service-integration-utils";
import { initUserSession } from "./helpers";
import { queryHistoryUser } from "./stubs/history-query-stubs";
import { socketOptions } from "./stubs/test-data";
import { COMMON_SETTLEMENT_RESULT } from "./stubs/test-constants";

describe("event get history", () => {
    let userClientDriver: GameClientDriver;
    afterAll(() => {
        userClientDriver.close();
    });

    beforeAll(async () => {
        userClientDriver = new GameClientDriver(socketOptions, initUserSession(queryHistoryUser));
        await userClientDriver.handleSignedInEvent();
    });
    describe("when page = 0", () => {
        it("should return empty details", async () => {
            // Arrange
            const expectedValue = {} as any;

            // Act
            userClientDriver.sendGetHistoryEvent(0);
            const result = await userClientDriver.handleGameEvent((betHistoryData) => betHistoryData);

            // Assert
            expect(result).toStrictEqual(expectedValue);
        });
    });

    describe("when page > 0 and real player", () => {
        it("should return details", async () => {
            // Arrange
            const expectedValue = {
                history: {
                    betLogs: [
                        {
                            betLevel: 1,
                            betWin: 0,
                            coinValue: 0.1,
                            currency: "INH",
                            freeSpin: true,
                            buyFreeSpin: 0,
                            id: 6,
                            reachMaxWin: false,
                            time: "2025-10-17T09:06:37.774Z",
                            settlementResult: COMMON_SETTLEMENT_RESULT,
                            totalAmount: 2,
                        },
                        {
                            betLevel: 1,
                            betWin: 0,
                            coinValue: 0.1,
                            currency: "INH",
                            freeSpin: false,
                            id: 5,
                            reachMaxWin: false,
                            time: "2025-10-17T09:06:37.774Z",
                            settlementResult: COMMON_SETTLEMENT_RESULT,
                            totalAmount: 2,
                            buyFreeSpin: 0,
                        },
                    ],
                    page: 1,
                    pageSize: 10,
                    total: 2,
                },
            };

            // Act
            userClientDriver.sendGetHistoryEvent(1);

            // Assert
            const result = await userClientDriver.handleGameEvent((betHistoryData) => betHistoryData.history);
            expect(result).toStrictEqual(expectedValue);
        });
    });
});
