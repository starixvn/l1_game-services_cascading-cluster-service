import { CascadingGameCron } from "sc-cascading-cluster-base/dist/crons";

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
    roundIdConsumer: any;
    gameManagementApiClientFactory: any;
    promotionFreeSpinsConsumer: any;
}

export default class CascadingSlotGameCron extends CascadingGameCron {

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
    }
}
