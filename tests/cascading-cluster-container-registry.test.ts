import * as Slot from "sc-slot-game-base";
import { InjectionMode } from "awilix";
import CascadingClusterContainerRegistry from "../src/cascading-cluster-container-registry";

jest.mock(
    "awilix",
    () => {
        return {
            asValue: jest.fn((t: any) => t),
            asClass: () => ({ singleton: () => ({ proxy: () => {} }) }),
            InjectionMode: jest.fn(() => {}),
            createContainer: jest.fn(() => {}),
        };
    },
    { virtual: true }
);

describe("service-container-registry", () => {
    // arrange
    const defaultInjectionMode = InjectionMode.CLASSIC;

    describe("extends", () => {
        it("inherit Slot.SlotContainerRegistry", () => {
            // arrange
            const serviceContainerRegistry = new CascadingClusterContainerRegistry(defaultInjectionMode as any);

            // assert
            expect(serviceContainerRegistry instanceof Slot.SlotContainerRegistry);
        });
    });

    describe("registerModels", () => {
        it("should register correct Model", () => {
            // arrange
            const serviceContainerRegistry = new CascadingClusterContainerRegistry(defaultInjectionMode as any);
            serviceContainerRegistry.container = { register: jest.fn() } as any;

            // act
            serviceContainerRegistry.registerModels();

            // assert
            expect(serviceContainerRegistry.container.register).toBeCalledWith({
                roundsRepository: expect.any(Function),
                famesRepository: expect.any(Function),
                freeSpinsRepository: expect.any(Function),
            });
        });
    });

    describe("registerValidators", () => {
        it("should register correct validators", () => {
            // arrange
            const serviceContainerRegistry = new CascadingClusterContainerRegistry(defaultInjectionMode as any);
            serviceContainerRegistry.container = { register: jest.fn() } as any;

            // act
            serviceContainerRegistry.registerValidators();

            // assert
            expect(serviceContainerRegistry.container.register).toBeCalledWith({
                playGamePermissionValidator: expect.any(Object),
            });
        });
    });
});
