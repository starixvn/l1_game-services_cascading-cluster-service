import { asClass } from "awilix";
import CascadingClusterContainerRegistry from "../../../src/cascading-cluster-container-registry";
import IGTSlotHttpRouter from "./igt-slot-http-router";

export default class IGTContainerRegistry extends CascadingClusterContainerRegistry {
    registerRouters() {
        super.registerRouters();

        this.container.register({
            httpRouter: asClass(IGTSlotHttpRouter),
        });
    }
}
