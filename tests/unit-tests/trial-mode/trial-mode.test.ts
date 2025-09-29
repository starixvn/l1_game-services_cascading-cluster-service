import { CascadingClusterTrialMode, TrialModeRoundCalculator } from "../../../src/trial-mode";
import { stub } from "jest-micro-auto-stub";
import { logger } from "sc-common";

jest.mock("sc-trial-mode");

describe("trialMode", () => {
    let cascadingClusterTrialMode: CascadingClusterTrialMode;

    const trialModeRoundCalculator = stub(TrialModeRoundCalculator);
    const logService = stub(logger);

    beforeEach(() => {
        cascadingClusterTrialMode = new CascadingClusterTrialMode(trialModeRoundCalculator, logService);
    });

    describe("init", () => {
        it("should call trialMode.init", () => {
            // Arrange
            const config = {} as any;

            // Act
            cascadingClusterTrialMode.init(config);

            // Assert
            expect((cascadingClusterTrialMode as any).trialMode.init).toBeCalledWith(config);
        });
    });

    describe("registerSocketEvent", () => {
        it("should call trialMode.registerSocketEvent", () => {
            // Arrange
            const socketClient = {} as any;

            // Act
            cascadingClusterTrialMode.registerSocketEvent(socketClient);

            // Assert
            expect((cascadingClusterTrialMode as any).trialMode.registerSocketHandler).toBeCalledWith(socketClient);
        });
    });
});
