import mongoose from "mongoose";
import { FreeSpinSchema } from "sc-cascading-cluster-base/dist/models";

export default function (gameConfigName: string): mongoose.Model<any> {
    return mongoose.model(`${gameConfigName}_freespin`, FreeSpinSchema);
}
