import { asClass, asValue } from "awilix";
import { CascadingSlotContainerRegistry as BaseRegistry } from "sc-cascading-cluster-base";
import CascadingClusterGameCron from "./crons/cascading-cluster-game-cron";
import { freeSpins, rounds, totalMultipliers } from "./models/index";
import type { AppConfig, GameDefinition, GameData } from "./types/index";

export default class CascadingClusterContainerRegistry extends BaseRegistry {
    register(appConfigs: AppConfig, definition: GameDefinition, gameData: GameData): any {
        super.register(appConfigs, definition, gameData);
        return this.container;
    }

    registerModels(): void {
        const definition = this.container.resolve("definition");

        super.registerModels();
        this.container.register({
            roundsRepository: asValue(rounds(definition.configName)),
            freeSpinsRepository: asValue(freeSpins(definition.configName)),
            totalMultiplierRepository: asValue(totalMultipliers(definition.configName)),
        });
    }

    registerCrons(): void {
        super.registerCrons();

        this.container.register({
            gameCron: asClass(CascadingClusterGameCron).singleton().proxy(),
        });
    }
}
