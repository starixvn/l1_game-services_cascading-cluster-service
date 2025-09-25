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
        // Mock classes to disable trial mode
        const mockTrialModeRoundCalculator = {
            calculate: () => ({}),
            processRound: () => ({}),
            getResults: () => ({}),
            reset: () => {}
        };

        const mockTrialModeBoardGenerator = {
            initialize: () => {},
            generate: () => (console.log("generate")),
            createBoard: () => ({}),
            reset: () => {}
        };

        const mockCascadingSlotTrialMode = {
            init: () => {},
            registerSocketEvent: () => {},
            start: () => {},
            stop: () => {}
        };

        this.container.register({
            trialModeRoundCalculator: asValue(mockTrialModeRoundCalculator),
            trialModeBoardGenerator: asValue(mockTrialModeBoardGenerator),
            cascadingSlotTrialMode: asValue(mockCascadingSlotTrialMode),
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
