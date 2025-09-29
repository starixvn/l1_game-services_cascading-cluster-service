import { CascadingGameCron } from "sc-cascading-cluster-base/dist/crons";
interface CascadingClusterGameCronDependencies {
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
    roundIdConsumer: any;
    gameManagementApiClientFactory: any;
    promotionFreeSpinsConsumer: any;
}
export default class CascadingClusterGameCron extends CascadingGameCron {
    constructor({ definition, gameData, bot, settleGameRoundConsumer, freeSpinsConsumer, idCountersConsumer, gameStatusPublisher, runningRoundInfoPublisher, logService, roundsRepository, totalMultiplierConsumer, boardGenerator, roundIdConsumer, gameManagementApiClientFactory, promotionFreeSpinsConsumer, }: CascadingClusterGameCronDependencies);
}
export {};
//# sourceMappingURL=cascading-cluster-game-cron.d.ts.map