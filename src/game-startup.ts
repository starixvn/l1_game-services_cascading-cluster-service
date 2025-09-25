import { logger } from "sc-common";
import { Core } from "sc-game-base";
import type { SocketClient } from "./types/index";

export default class GameStartup extends Core.BaseStartup {

    constructor(container: any) {
        super(container);
    }

    async start(app: any, socketServer: any): Promise<void> {
        const gameNameInSocketNamespace = this.definition.name.toLowerCase();
        this.initHttpRouter(app);
        
        socketServer.of(`/user/${gameNameInSocketNamespace}`).on("connection", (socketClient: SocketClient) => {
            this.initSocketRouter(socketClient as any);
        });

        socketServer.of(`/admin/${gameNameInSocketNamespace}`).on("connection", (socketClient: SocketClient) => {
            this.initAdminSocketRouter(socketClient as any);
        });

        try {
            await this.gameCron.start();
            this.processBetQueue.start();
        } catch (error) {
            console.log(error);
            logger.logError(error);
        }
    }
}
