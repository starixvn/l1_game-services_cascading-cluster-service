import { RoundCalculator } from "sc-cascading-cluster-base/dist/board";
export default class TrialModeRoundCalculator extends RoundCalculator {
    constructor({ trialModeBoardGenerator, tumbleCalculator }) {
        super({ boardGenerator: trialModeBoardGenerator, tumbleCalculator });
    }
}
