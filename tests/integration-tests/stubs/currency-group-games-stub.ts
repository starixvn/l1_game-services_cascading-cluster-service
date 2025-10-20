import { CurrencyGroupGames } from "sc-base-database";

export const createCurrencyGroupGames = async (currencyGroupId, gameId, gameConfig) => {
    const data = {
        enabled: true,
        coinValues: [0.1, 1, 2, 5, 10, 20, 50, 100],
        betLevels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        stakeLevels: [],
        groupId: currencyGroupId,
        maxWinPerRound: 50000,
    };

    return CurrencyGroupGames.create({ gameId, ...gameConfig, ...data });
};
