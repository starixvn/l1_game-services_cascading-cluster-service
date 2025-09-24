import mongoose from "mongoose";
import { RoundsSchema } from "sc-cascading-cluster-base/dist/models";

export default function (gameConfigName: string): mongoose.Model<any> {
    return mongoose.model(`${gameConfigName}_round`, RoundsSchema);
}
