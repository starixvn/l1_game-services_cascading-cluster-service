import { CascadingGameCron } from "sc-cascading-cluster-base/dist/crons";
export default class CascadingClusterGameCron extends CascadingGameCron {
    constructor({ definition, gameData, bot, settleGameRoundConsumer, freeSpinsConsumer, idCountersConsumer, gameStatusPublisher, runningRoundInfoPublisher, logService, roundsRepository, totalMultiplierConsumer, boardGenerator, roundIdConsumer, gameManagementApiClientFactory, promotionFreeSpinsConsumer, }) {
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
    }
}
