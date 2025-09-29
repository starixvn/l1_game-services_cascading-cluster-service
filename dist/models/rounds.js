import mongoose from "mongoose";
import { RoundsSchema } from "sc-cascading-cluster-base/dist/models";
export default function (gameConfigName) {
    return mongoose.model(`${gameConfigName}_round`, RoundsSchema);
}
