import { CascadingBoardGenerator } from "sc-cascading-cluster-base/dist/board";

export const trialModeBoardSettings = {
    reels: 6,
    symbolsOnReel: 5,
    numberOfSymbols: 11,
    numberOfShuffles: 3,
    difficulty: 4,
};

export default class TrialModeBoardGenerator extends CascadingBoardGenerator {
    constructor(definition: any, gameData: any, boardSettings: any, logService: any) {
        super(definition, gameData, trialModeBoardSettings, logService);
    }
}
