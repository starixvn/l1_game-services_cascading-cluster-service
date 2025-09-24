import { CascadingSlotContainerRegistry as BaseRegistry } from "sc-cascading-cluster-base";
import type { AppConfig, GameDefinition, GameData } from "./types/index";
export default class CascadingSlotContainerRegistry extends BaseRegistry {
    register(appConfigs: AppConfig, definition: GameDefinition, gameData: GameData): any;
    registerTrialMode(): void;
    registerModels(): void;
    registerCrons(): void;
}
//# sourceMappingURL=cascading-slot-container-registry.d.ts.map