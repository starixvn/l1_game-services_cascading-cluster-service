import { Core } from "sc-game-base";
import GameStartup from "./game-startup";
import * as awilix from "awilix";
export default class GameApp extends Core.BaseGameApp {
    constructor(gameName, appConfigs) {
        super(gameName, appConfigs);
    }
    async startGame(container) {
        container.register({ baseMetrics: awilix.asValue(this.baseMetrics) });
        const gameStartUp = new GameStartup(container);
        await gameStartUp.start(this.app, this.socketServer);
    }
}
