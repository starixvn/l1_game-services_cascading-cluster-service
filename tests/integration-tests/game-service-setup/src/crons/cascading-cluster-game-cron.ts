import cloneDeep from "lodash.clonedeep";
import { CascadingGameCron } from "sc-cascading-cluster-base/dist/crons";
export default class CascadingClusterGameCron extends CascadingGameCron {
    cascadingClusterTrialMode;
    trialModeBoardGenerator;
    constructor({ definition, gameData, bot, settleGameRoundConsumer, freeSpinsConsumer, idCountersConsumer, gameStatusPublisher, runningRoundInfoPublisher, logService, roundsRepository, totalMultiplierConsumer, boardGenerator, cascadingClusterTrialMode, trialModeBoardGenerator, roundIdConsumer, gameManagementApiClientFactory, promotionFreeSpinsConsumer, }) {
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
        this.cascadingClusterTrialMode = cascadingClusterTrialMode;
        this.trialModeBoardGenerator = trialModeBoardGenerator;
    }
    initTrialMode() {
        this.trialModeBoardGenerator.initialize();
        this.cascadingClusterTrialMode.init({
            ...cloneDeep(this.gameData.gameConfigs),
            name: this.definition.name
        });
    }
}
