import mongoose from "mongoose";
import { middlewares } from "sc-common";
import {
    // @ts-ignore
    createDummyCurrency,
    // @ts-ignore
    createDummyUsers,
    // @ts-ignore
    createExchangeRate,
    // @ts-ignore
    createGameConfig,
    // @ts-ignore
    createPartnerConfig,
    // @ts-ignore
} from "sc-game-service-integration-utils";
import { createCurrencyGroupGames } from "./currency-group-games-stub";
import { stubHistoryData } from "./history-query-stubs";
import { createDummyUsers as createCascadingClusterDummyUsers } from "./user-stub";

import idcounters from "sc-slot-game-base/src/models/id-counters";
import configs from "../../../src/app-configs.IGT";
import { freeSpins, freeSpinState, rounds } from "../../../src/models";
import { currencyData, game, gameConfig, playerFreeSpins, playerFreeSpinStates, rounds as roundDatas } from "./test-data";

const GoldAndDragonRounds = rounds("goldanddragon");
const GoldAndDragonFreeSpins = freeSpins("goldanddragon");
const GoldAndDragonFreeSpinStates = freeSpinState("goldanddragon");

const connectDatabase = async () => {
    await middlewares.database.configureDatabase(mongoose, configs.database);
    await clearAllData();
};

const clearAllData = async () => {
    const collections = await mongoose.connection.db.collections();

    for (const collection of collections) {
        await collection.deleteMany({});
    }
};

const createTestData = async () => {
    await connectDatabase();
    await createExchangeRate();
    await createGameConfig(gameConfig);
    const partnerConfig = await createPartnerConfig(game.id);
    const currency = await createDummyCurrency(partnerConfig.partnerId, currencyData.code, currencyData.name);
    await createCurrencyGroupGames(currency.groupId, game.id, gameConfig);
    await createDummyUsers(currency);
    await createCascadingClusterDummyUsers(currency);
    await createRounds();
    await createPlayerFreeSpins();
    await createPlayerFreeSpinStates();
    await stubHistoryData(currency, GoldAndDragonRounds, GoldAndDragonFreeSpinStates);
    await idcounters.create({ f: "id", m: "GoldAndDragon_round", c: 6 });
    console.log("Create game config & dummy user for testing successfully!");

    process.exit(0);
};

const createRounds = async () => {
    return GoldAndDragonRounds.insertMany(roundDatas);
};

const createPlayerFreeSpins = async () => {
    return GoldAndDragonFreeSpins.insertMany(playerFreeSpins);
};

const createPlayerFreeSpinStates = async () => {
    return GoldAndDragonFreeSpinStates.insertMany(playerFreeSpinStates);
};

createTestData();
