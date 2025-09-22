import mongoose from "mongoose";
import { RoundsSchema } from "sc-cascading-cluster-base/src/models";

export default function (gameConfigName) {
    return mongoose.model(`${gameConfigName}_round`, RoundsSchema);
}
