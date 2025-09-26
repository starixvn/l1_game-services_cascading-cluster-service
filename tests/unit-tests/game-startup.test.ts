import { createContainer } from "awilix";
import { stub, stubMongoose } from "jest-micro-auto-stub";
import { when } from "jest-when";
import mongoose from "mongoose";
import { Core } from "sc-game-base";
import GameStartup from "../../src/game-startup";
import CascadingSlotTrialMode from "../../src/trial-mode/cascading-slot-trial-mode";

describe("GameStartup", () => {
    const container = createContainer();
    const cascadingSlotTrialMode = stub(CascadingSlotTrialMode);
    const gameConfigsRepository = stubMongoose(mongoose.Model);
    const definition = { name: "treasureisland" };
    const app = {} as any;
    const gameCron = { start: jest.fn() };
    const processBetQueue = { start: jest.fn() };
    const socketServer = {
        of: jest.fn().mockReturnValue({ on: jest.fn() }),
    } as any;

    let gameStartup: GameStartup;

    beforeEach(() => {
        (container.resolve as any) = jest.fn();

        (container.resolve as any).mockReturnValue({});

        when(container.resolve as any).calledWith("definition").mockReturnValue(definition);
        when(container.resolve as any).calledWith("gameCron").mockReturnValue(gameCron);
        when(container.resolve as any).calledWith("processBetQueue").mockReturnValue(processBetQueue);
        when(container.resolve as any).calledWith("cascadingSlotTrialMode").mockReturnValue(cascadingSlotTrialMode);
        when(container.resolve as any).calledWith("gameConfigsRepository").mockReturnValue(gameConfigsRepository);

        gameStartup = new GameStartup(container);
    });

    it("should be instance of Core.BaseStartup", () => {
        // Assert
        expect(gameStartup instanceof Core.BaseStartup);
    });

    describe("start", () => {
        beforeEach(() => {
            gameStartup.initHttpRouter = jest.fn();
            gameStartup.initSocketRouter = jest.fn();
            gameStartup.initAdminSocketRouter = jest.fn();
        });

        it("should call initHttpRouter", async () => {
            // Act
            await gameStartup.start(app, socketServer);

            // Assert
            expect(gameStartup.initHttpRouter).toBeCalledWith(app);
        });

        it("should register socket namespace user", async () => {
            // Act
            await gameStartup.start(app, socketServer);

            // Assert
            expect(socketServer.of).toHaveBeenNthCalledWith(1, `/user/${definition.name}`);
        });

        it("should register socket namespace user", async () => {
            // Act
            await gameStartup.start(app, socketServer);

            // Assert
            expect(socketServer.of).toHaveBeenNthCalledWith(1, `/user/${definition.name}`);
        });

        it("should register socket namespace admin", async () => {
            // Act
            await gameStartup.start(app, socketServer);

            // Assert
            expect(socketServer.of).toHaveBeenNthCalledWith(2, `/admin/${definition.name}`);
        });

        it("should call gameCron.start", async () => {
            // Act
            await gameStartup.start(app, socketServer);

            // Assert
            expect(gameCron.start).toBeCalled();
        });

        it("should call processBetQueue.start", async () => {
            // Act
            await gameStartup.start(app, socketServer);

            // Assert
            expect(processBetQueue.start).toBeCalled();
        });
    });
});
