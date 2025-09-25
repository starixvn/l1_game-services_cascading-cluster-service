import { asClass, asValue } from "awilix";
import { CascadingSlotContainerRegistry as BaseRegistry } from "sc-cascading-cluster-base";
import CascadingSlotGameCron from "./crons/cascading-slot-game-cron";
import { freeSpins, rounds, totalMultipliers } from "./models/index";
import { CascadingSlotTrialMode, TrialModeBoardGenerator, TrialModeRoundCalculator } from "./trial-mode/index";
export default class CascadingSlotContainerRegistry extends BaseRegistry {
    register(appConfigs, definition, gameData) {
        this.registerTrialMode();
        super.register(appConfigs, definition, gameData);
        return this.container;
    }
    registerTrialMode() {
        this.container.register({
            trialModeRoundCalculator: asClass(TrialModeRoundCalculator).proxy(),
            trialModeBoardGenerator: asClass(TrialModeBoardGenerator).singleton(),
            cascadingSlotTrialMode: asClass(CascadingSlotTrialMode).singleton(),
        });
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
            gameCron: asClass(CascadingSlotGameCron).singleton().proxy(),
        });
    }
}
