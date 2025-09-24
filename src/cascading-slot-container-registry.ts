import { asClass, asValue } from "awilix";
import { CascadingSlotContainerRegistry as BaseRegistry } from "sc-cascading-cluster-base";
import CascadingSlotGameCron from "./crons/cascading-slot-game-cron";
import { freeSpins, rounds, totalMultipliers } from "./models/index";
import { CascadingSlotTrialMode, TrialModeBoardGenerator, TrialModeRoundCalculator } from "./trial-mode/index";
import type { AppConfig, GameDefinition, GameData } from "./types/index";

export default class CascadingSlotContainerRegistry extends BaseRegistry {
    register(appConfigs: AppConfig, definition: GameDefinition, gameData: GameData): any {
        this.registerTrialMode();
        super.register(appConfigs, definition, gameData);
        return this.container;
    }

    registerTrialMode(): void {
        this.container.register({
            trialModeRoundCalculator: asClass(TrialModeRoundCalculator).proxy(),
            trialModeBoardGenerator: asClass(TrialModeBoardGenerator).singleton(),
            cascadingSlotTrialMode: asClass(CascadingSlotTrialMode).singleton(),
        });
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
            gameCron: asClass(CascadingSlotGameCron).singleton().proxy(),
        });
    }
}
