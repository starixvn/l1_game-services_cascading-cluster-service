import cloneDeep from "lodash.clonedeep";
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
    private cascadingSlotTrialMode: CascadingSlotTrialMode;
    private trialModeBoardGenerator: any;

    constructor({
        definition,
        gameData,
        bot,
        settleGameRoundConsumer,
        freeSpinsConsumer,
        idCountersConsumer,
        gameStatusPublisher,
        runningRoundInfoPublisher,
        logService,
        roundsRepository,
        totalMultiplierConsumer,
        boardGenerator,
        cascadingSlotTrialMode,
        trialModeBoardGenerator,
        roundIdConsumer,
        gameManagementApiClientFactory,
        promotionFreeSpinsConsumer,
    }: CascadingSlotGameCronDependencies) {
        super({
            definition,
            gameData,
            bot,
            settleGameRoundConsumer,
            gameStatusPublisher,
            runningRoundInfoPublisher,
            logService,
            roundsRepository,
            freeSpinsConsumer,
            idCountersConsumer,
            totalMultiplierConsumer,
            boardGenerator,
            roundIdConsumer,
            gameManagementApiClientFactory,
            promotionFreeSpinsConsumer,
        });

        this.cascadingSlotTrialMode = cascadingSlotTrialMode;
        this.trialModeBoardGenerator = trialModeBoardGenerator;
    }

    initTrialMode(): void {
        this.trialModeBoardGenerator.initialize();
        this.cascadingSlotTrialMode.init({ 
            ...cloneDeep(this.gameData.gameConfigs), 
            name: this.definition.name 
        });
    }
}
