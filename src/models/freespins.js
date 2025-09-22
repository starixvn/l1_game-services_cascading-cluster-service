import mongoose from "mongoose";
import { FreeSpinSchema } from "sc-cascading-cluster-base/src/models";

export default function (gameConfigName) {
    return mongoose.model(`${gameConfigName}_freespin`, FreeSpinSchema);
}
