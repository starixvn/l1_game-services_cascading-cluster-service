import axios from "axios";
// @ts-ignore
import { GameClientDriver, normalUser } from "sc-game-service-integration-utils";
import { initUserSession } from "./helpers";
import { socketOptions } from "./stubs/test-data";
const JEST_ASSERT_WAITING_RESPONSE_TIMEOUT = 30000;

const setResult = async (result: any) => {
    await axios.post("http://localhost:5001/igt-api/set-board", {
        name: normalUser.playerName,
        result,
    });
};

describe("Settlement tests", () => {
    beforeAll(() => {
        jest.setTimeout(JEST_ASSERT_WAITING_RESPONSE_TIMEOUT);
    });

    let userClientDriver: GameClientDriver;
    
    beforeEach(async () => {
        userClientDriver = new GameClientDriver(socketOptions, initUserSession(normalUser));
        await userClientDriver.handleSignedInEvent();
        userClientDriver.sendInGameEvent();
    });

    afterEach(() => {
        if (userClientDriver) {
            userClientDriver.close();
        }
    });

    it("should connect and handle basic game flow", async () => {
        expect(userClientDriver).toBeDefined();
    });
});
