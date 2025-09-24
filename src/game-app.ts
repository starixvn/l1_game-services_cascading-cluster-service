import { Core } from "sc-game-base";
import GameStartup from "./game-startup";
import * as awilix from "awilix";
import type { AppConfig } from "./types/index";

export default class GameApp extends Core.BaseGameApp {
    constructor(gameName: string, appConfigs: AppConfig) {
        super(gameName, appConfigs);
    }
    async startGame(container: awilix.AwilixContainer): Promise<void> {
        container.register({ baseMetrics: awilix.asValue(this.baseMetrics) });
        const gameStartUp = new GameStartup(container);
        await gameStartUp.start(this.app, this.socketServer);
    }
}
