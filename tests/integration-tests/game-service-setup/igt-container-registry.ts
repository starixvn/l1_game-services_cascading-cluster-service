import { asClass, asValue } from "awilix";
import CascadingClusterContainerRegistry from "../../../src/cascading-cluster-container-registry";
import IGTSlotHttpRouter from "./igt-slot-http-router";

const logger = {
    logError: (message: string) => {
        console.log(message);
    },
};

export default class IGTContainerRegistry extends CascadingClusterContainerRegistry {
    registerRouters() {
        super.registerRouters();

        this.container.register({
            httpRouter: asClass(IGTSlotHttpRouter),
        });
    }

    registerApis() {
        super.registerApis();

        this.container.register({
            logService: asValue(logger),
        });
    }
}
