// @ts-ignore
import { eventTypes, GameClientDriver } from "sc-game-service-integration-utils";

import { initUserSession } from "./helpers";
import { socketOptions } from "./stubs/test-data";
import { placeBetUser } from "./stubs/user-stub";

const JEST_ASSERT_WAITING_RESPONSE_TIMEOUT = 50000;

describe("event place bet", () => {
    let userClientDriver: GameClientDriver;

    beforeAll(async () => {
        jest.setTimeout(JEST_ASSERT_WAITING_RESPONSE_TIMEOUT);
        userClientDriver = new GameClientDriver(socketOptions, initUserSession(placeBetUser));
        await userClientDriver.handleSignedInEvent();
    });

    afterAll(() => {
        if (userClientDriver) {
            userClientDriver.close();
        }
    });

    it("should be able to place bet", async () => {
        userClientDriver.emit(eventTypes.bet, { betLevel: 1, coinValue: 0.1 });
        const result = await userClientDriver.handleGameEvent((data) => data.finish);
        expect(result).toBeDefined();
        expect(result.finish.freeSpins).toBe(0);
    });

    it("should be able to buy free spin", async () => {
        userClientDriver.emit(eventTypes.bet, { betLevel: 1, coinValue: 0.1, buyFreeSpin: 1 });
        const result = await userClientDriver.handleGameEvent((data) => data.finish);
        expect(result.finish.freeSpins).toBeGreaterThan(0);
    });
});
