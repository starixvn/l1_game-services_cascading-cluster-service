import { CascadingBoardGenerator } from "sc-cascading-cluster-base/src/board";
import { TrialModeBoardGenerator } from "../../../src/trial-mode";

describe("TrialModeBoardGenerator", () => {
    it("should be instance of CascadingBoardGenerator", () => {
        // Act
        const trialModeBoardGenerator = new TrialModeBoardGenerator();

        // Assert
        expect(trialModeBoardGenerator instanceof CascadingBoardGenerator);
    });
});
