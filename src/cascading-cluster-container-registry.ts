import { asValue } from "awilix";
import { CascadingSlotContainerRegistry as BaseRegistry } from "sc-cascading-cluster-base";
import { freeSpins, freeSpinState, rounds } from "./models/index";
import type { AppConfig, GameData, GameDefinition } from "./types/index";

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
            freeSpinStateRepository: asValue(freeSpinState(definition.configName)),
        });
    }
}
