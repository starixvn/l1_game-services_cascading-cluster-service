import { Core } from "sc-game-base";
import * as awilix from "awilix";
import type { AppConfig } from "./types/index";
export default class GameApp extends Core.BaseGameApp {
    constructor(gameName: string, appConfigs: AppConfig);
    startGame(container: awilix.AwilixContainer): Promise<void>;
}
//# sourceMappingURL=game-app.d.ts.map