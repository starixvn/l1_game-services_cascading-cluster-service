import { asClass, asValue } from "awilix";
import { CascadingSlotContainerRegistry as BaseRegistry } from "sc-cascading-cluster-base";
import CascadingClusterGameCron from "./crons/cascading-cluster-game-cron";
import { freeSpins, rounds, totalMultipliers } from "./models/index";
export default class CascadingClusterContainerRegistry extends BaseRegistry {
    register(appConfigs, definition, gameData) {
        super.register(appConfigs, definition, gameData);
        return this.container;
    }
    registerModels() {
        const definition = this.container.resolve("definition");
        super.registerModels();
        this.container.register({
            roundsRepository: asValue(rounds(definition.configName)),
            freeSpinsRepository: asValue(freeSpins(definition.configName)),
            totalMultiplierRepository: asValue(totalMultipliers(definition.configName)),
        });
    }
    registerCrons() {
        super.registerCrons();
        this.container.register({
            gameCron: asClass(CascadingClusterGameCron).singleton().proxy(),
        });
    }
}
