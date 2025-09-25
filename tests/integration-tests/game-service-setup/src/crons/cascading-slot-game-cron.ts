import cloneDeep from "lodash.clonedeep";
import { CascadingGameCron } from "sc-cascading-cluster-base/dist/crons";
export default class CascadingSlotGameCron extends CascadingGameCron {
    cascadingSlotTrialMode;
    trialModeBoardGenerator;
    constructor({ definition, gameData, bot, settleGameRoundConsumer, freeSpinsConsumer, idCountersConsumer, gameStatusPublisher, runningRoundInfoPublisher, logService, roundsRepository, totalMultiplierConsumer, boardGenerator, cascadingSlotTrialMode, trialModeBoardGenerator, roundIdConsumer, gameManagementApiClientFactory, promotionFreeSpinsConsumer, }) {
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
    initTrialMode() {
        this.trialModeBoardGenerator.initialize();
        this.cascadingSlotTrialMode.init({
            ...cloneDeep(this.gameData.gameConfigs),
            name: this.definition.name
        });
    }
}
