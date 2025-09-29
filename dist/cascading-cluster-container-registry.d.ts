import { CascadingSlotContainerRegistry as BaseRegistry } from "sc-cascading-cluster-base";
import type { AppConfig, GameDefinition, GameData } from "./types/index";
export default class CascadingClusterContainerRegistry extends BaseRegistry {
    register(appConfigs: AppConfig, definition: GameDefinition, gameData: GameData): any;
    registerModels(): void;
    registerCrons(): void;
}
//# sourceMappingURL=cascading-cluster-container-registry.d.ts.map