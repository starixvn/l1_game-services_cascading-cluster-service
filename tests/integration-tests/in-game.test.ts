// @ts-ignore
import { GameClientDriver, normalUser } from "sc-game-service-integration-utils";
import { initUserSession } from "./helpers";
import { socketOptions } from "./stubs/test-data";
const JEST_ASSERT_WAITING_RESPONSE_TIMEOUT = 50000;

describe("event ingame", () => {
    beforeAll(() => {
        jest.setTimeout(JEST_ASSERT_WAITING_RESPONSE_TIMEOUT);
    });

    describe("when not play game yet", () => {
        let userClientDriver: GameClientDriver;
        
        afterEach(() => {
            if (userClientDriver) {
                userClientDriver.close();
            }
        });

        it("should be able to connect", async () => {
            userClientDriver = new GameClientDriver(socketOptions, initUserSession(normalUser));
            await userClientDriver.handleSignedInEvent();
            expect(userClientDriver).toBeDefined();
        });
    });
});
