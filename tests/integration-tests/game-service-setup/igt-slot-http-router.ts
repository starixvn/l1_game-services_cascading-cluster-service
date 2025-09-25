import { CascadingHttpRouter } from "sc-cascading-cluster-base/dist/routers";

export default class IGTSlotHttpRouter extends CascadingHttpRouter {
    init(app) {
        super.init(app);

        app.post("/igt-api/set-board", (_req, res) => this.handleSetBoard(_req.body, res));
    }
}
