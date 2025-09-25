import { asClass } from "awilix";
import CascadingSlotContainerRegistry from "../../../src/cascading-slot-container-registry";
import IGTSlotHttpRouter from "./igt-slot-http-router";
export default class IGTContainerRegistry extends CascadingSlotContainerRegistry {
    registerRouters() {
        super.registerRouters();
        this.container.register({
            httpRouter: asClass(IGTSlotHttpRouter),
        });
    }
}
