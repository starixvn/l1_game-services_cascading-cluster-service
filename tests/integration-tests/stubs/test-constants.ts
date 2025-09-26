/**
 * Shared test constants to eliminate duplication across test files
 */

export const SAMPLE_BOARD_DATA = "1,0,1,2,4,8,1,6,4,4,3,1,1,4,6,6,4,2,7,2,0,6,0,5,3,3,0,6,1,0";

export const COMMON_ODDS_CONFIG = {
    oddsByCounts: {
        0: [
            { from: 8, to: 9, odds: 2 },
            { from: 10, to: 11, odds: 15 },
            { from: 12, to: 30, odds: 40 },
        ],
        1: [
            { from: 8, to: 9, odds: 8 },
            { from: 10, to: 11, odds: 18 },
            { from: 12, to: 30, odds: 80 },
        ],
        2: [
            { from: 8, to: 9, odds: 10 },
            { from: 10, to: 11, odds: 20 },
            { from: 12, to: 30, odds: 100 },
        ],
        3: [
            { from: 8, to: 9, odds: 16 },
            { from: 10, to: 11, odds: 24 },
            { from: 12, to: 30, odds: 160 },
        ],
        4: [
            { from: 8, to: 9, odds: 20 },
            { from: 10, to: 11, odds: 30 },
            { from: 12, to: 30, odds: 200 },
        ],
        5: [
            { from: 8, to: 9, odds: 30 },
            { from: 10, to: 11, odds: 40 },
            { from: 12, to: 30, odds: 240 },
        ],
        6: [
            { from: 8, to: 9, odds: 40 },
            { from: 10, to: 11, odds: 100 },
            { from: 12, to: 30, odds: 300 },
        ],
        7: [
            { from: 8, to: 9, odds: 50 },
            { from: 10, to: 11, odds: 200 },
            { from: 12, to: 30, odds: 500 },
        ],
        8: [
            { from: 8, to: 9, odds: 200 },
            { from: 10, to: 11, odds: 500 },
            { from: 12, to: 30, odds: 1000 },
        ],
    },
    freeSpins: {
        initialOdds: [
            { count: 4, odds: 3 },
            { count: 5, odds: 6 },
            { count: 6, odds: 18 },
        ],
        additionalOdds: [{ count: 4, odds: 3 }],
    },
};

export const COMMON_SETTLEMENT_RESULT = {
    tumbles: [
        {
            originalBoard: SAMPLE_BOARD_DATA,
            newBoard: SAMPLE_BOARD_DATA,
            multipliers: [],
            icons: {},
            win: 0,
        },
    ],
    freeSpins: { count: 0, odds: 0 },
};
