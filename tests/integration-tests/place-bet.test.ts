// @ts-ignore
import { GameClientDriver } from "sc-game-service-integration-utils";

import { initUserSession } from "./helpers";
import { socketOptions } from "./stubs/test-data";
import { placeBetUser } from "./stubs/user-stub";

const JEST_ASSERT_WAITING_RESPONSE_TIMEOUT = 50000;

describe("event place bet", () => {
    let userClientDriver: GameClientDriver;

    beforeAll(async () => {
        jest.setTimeout(JEST_ASSERT_WAITING_RESPONSE_TIMEOUT);
    });

    afterAll(() => {
        if (userClientDriver) {
            userClientDriver.close();
        }
    });

    it("should be able to connect for placing bet", async () => {
        userClientDriver = new GameClientDriver(socketOptions, initUserSession(placeBetUser));
        await userClientDriver.handleSignedInEvent();
        expect(userClientDriver).toBeDefined();
    });
});
