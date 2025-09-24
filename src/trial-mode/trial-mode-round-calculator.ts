import { RoundCalculator } from "sc-cascading-cluster-base/dist/board";

interface TrialModeRoundCalculatorProps {
    trialModeBoardGenerator: any;
    tumbleCalculator: any;
}

export default class TrialModeRoundCalculator extends RoundCalculator {
    constructor({ trialModeBoardGenerator, tumbleCalculator }: TrialModeRoundCalculatorProps) {
        super({ boardGenerator: trialModeBoardGenerator, tumbleCalculator });
    }
}
