import { CascadingGameCron } from "sc-cascading-cluster-base/dist/crons";
import type CascadingSlotTrialMode from "../trial-mode/cascading-slot-trial-mode";
interface CascadingSlotGameCronDependencies {
    definition: any;
    gameData: any;
    bot: any;
    settleGameRoundConsumer: any;
    freeSpinsConsumer: any;
    idCountersConsumer: any;
    gameStatusPublisher: any;
    runningRoundInfoPublisher: any;
    logService: any;
    roundsRepository: any;
    totalMultiplierConsumer: any;
    boardGenerator: any;
    cascadingSlotTrialMode: CascadingSlotTrialMode;
    trialModeBoardGenerator: any;
    roundIdConsumer: any;
    gameManagementApiClientFactory: any;
    promotionFreeSpinsConsumer: any;
}
export default class CascadingSlotGameCron extends CascadingGameCron {
    private cascadingSlotTrialMode;
    private trialModeBoardGenerator;
    constructor({ definition, gameData, bot, settleGameRoundConsumer, freeSpinsConsumer, idCountersConsumer, gameStatusPublisher, runningRoundInfoPublisher, logService, roundsRepository, totalMultiplierConsumer, boardGenerator, cascadingSlotTrialMode, trialModeBoardGenerator, roundIdConsumer, gameManagementApiClientFactory, promotionFreeSpinsConsumer, }: CascadingSlotGameCronDependencies);
    initTrialMode(): void;
}
export {};
//# sourceMappingURL=cascading-slot-game-cron.d.ts.map