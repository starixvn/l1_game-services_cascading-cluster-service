/**
 * Shared test constants to eliminate duplication across test files
 */

export const SAMPLE_BOARD_DATA = "1,0,1,2,4,8,1,6,4,4,3,1,1,4,6,6,4,2,7,2,0,6,0,5,3,3,0,6,1,0";

export const COMMON_ODDS_CONFIG = {
    odds: {
        "0": [
            {
                from: 5,
                to: 5,
                odds: 20,
            },
            {
                from: 6,
                to: 6,
                odds: 24,
            },
            {
                from: 7,
                to: 7,
                odds: 30,
            },
            {
                from: 8,
                to: 8,
                odds: 40,
            },
            {
                from: 9,
                to: 9,
                odds: 50,
            },
            {
                from: 10,
                to: 10,
                odds: 100,
            },
            {
                from: 11,
                to: 11,
                odds: 160,
            },
            {
                from: 12,
                to: 12,
                odds: 300,
            },
            {
                from: 13,
                to: 13,
                odds: 600,
            },
            {
                from: 14,
                to: 14,
                odds: 1200,
            },
            {
                from: 15,
                to: 36,
                odds: 5000,
            },
        ],
        "1": [
            {
                from: 5,
                to: 5,
                odds: 16,
            },
            {
                from: 6,
                to: 6,
                odds: 20,
            },
            {
                from: 7,
                to: 7,
                odds: 24,
            },
            {
                from: 8,
                to: 8,
                odds: 30,
            },
            {
                from: 9,
                to: 9,
                odds: 40,
            },
            {
                from: 10,
                to: 10,
                odds: 80,
            },
            {
                from: 11,
                to: 11,
                odds: 120,
            },
            {
                from: 12,
                to: 12,
                odds: 240,
            },
            {
                from: 13,
                to: 13,
                odds: 500,
            },
            {
                from: 14,
                to: 14,
                odds: 1000,
            },
            {
                from: 15,
                to: 36,
                odds: 2400,
            },
        ],
        "2": [
            {
                from: 5,
                to: 5,
                odds: 12,
            },
            {
                from: 6,
                to: 6,
                odds: 16,
            },
            {
                from: 7,
                to: 7,
                odds: 20,
            },
            {
                from: 8,
                to: 8,
                odds: 24,
            },
            {
                from: 9,
                to: 9,
                odds: 30,
            },
            {
                from: 10,
                to: 10,
                odds: 60,
            },
            {
                from: 11,
                to: 11,
                odds: 100,
            },
            {
                from: 12,
                to: 12,
                odds: 200,
            },
            {
                from: 13,
                to: 13,
                odds: 400,
            },
            {
                from: 14,
                to: 14,
                odds: 800,
            },
            {
                from: 15,
                to: 36,
                odds: 2000,
            },
        ],
        "3": [
            {
                from: 5,
                to: 5,
                odds: 10,
            },
            {
                from: 6,
                to: 6,
                odds: 12,
            },
            {
                from: 7,
                to: 7,
                odds: 16,
            },
            {
                from: 8,
                to: 8,
                odds: 20,
            },
            {
                from: 9,
                to: 9,
                odds: 24,
            },
            {
                from: 10,
                to: 10,
                odds: 50,
            },
            {
                from: 11,
                to: 11,
                odds: 80,
            },
            {
                from: 12,
                to: 12,
                odds: 160,
            },
            {
                from: 13,
                to: 13,
                odds: 300,
            },
            {
                from: 14,
                to: 14,
                odds: 600,
            },
            {
                from: 15,
                to: 36,
                odds: 1200,
            },
        ],
        "4": [
            {
                from: 5,
                to: 5,
                odds: 8,
            },
            {
                from: 6,
                to: 6,
                odds: 10,
            },
            {
                from: 7,
                to: 7,
                odds: 12,
            },
            {
                from: 8,
                to: 8,
                odds: 16,
            },
            {
                from: 9,
                to: 9,
                odds: 20,
            },
            {
                from: 10,
                to: 10,
                odds: 40,
            },
            {
                from: 11,
                to: 11,
                odds: 60,
            },
            {
                from: 12,
                to: 12,
                odds: 100,
            },
            {
                from: 13,
                to: 13,
                odds: 200,
            },
            {
                from: 14,
                to: 14,
                odds: 400,
            },
            {
                from: 15,
                to: 36,
                odds: 800,
            },
        ],
        "5": [
            {
                from: 5,
                to: 5,
                odds: 6,
            },
            {
                from: 6,
                to: 6,
                odds: 8,
            },
            {
                from: 7,
                to: 7,
                odds: 10,
            },
            {
                from: 8,
                to: 8,
                odds: 12,
            },
            {
                from: 9,
                to: 9,
                odds: 16,
            },
            {
                from: 10,
                to: 10,
                odds: 30,
            },
            {
                from: 11,
                to: 11,
                odds: 50,
            },
            {
                from: 12,
                to: 12,
                odds: 80,
            },
            {
                from: 13,
                to: 13,
                odds: 160,
            },
            {
                from: 14,
                to: 14,
                odds: 300,
            },
            {
                from: 15,
                to: 36,
                odds: 600,
            },
        ],
        "6": [
            {
                from: 5,
                to: 5,
                odds: 5,
            },
            {
                from: 6,
                to: 6,
                odds: 6,
            },
            {
                from: 7,
                to: 7,
                odds: 8,
            },
            {
                from: 8,
                to: 8,
                odds: 10,
            },
            {
                from: 9,
                to: 9,
                odds: 12,
            },
            {
                from: 10,
                to: 10,
                odds: 24,
            },
            {
                from: 11,
                to: 11,
                odds: 40,
            },
            {
                from: 12,
                to: 12,
                odds: 60,
            },
            {
                from: 13,
                to: 13,
                odds: 120,
            },
            {
                from: 14,
                to: 14,
                odds: 240,
            },
            {
                from: 15,
                to: 36,
                odds: 500,
            },
        ],
        "7": [
            {
                from: 5,
                to: 5,
                odds: 4,
            },
            {
                from: 6,
                to: 6,
                odds: 5,
            },
            {
                from: 7,
                to: 7,
                odds: 6,
            },
            {
                from: 8,
                to: 8,
                odds: 8,
            },
            {
                from: 9,
                to: 9,
                odds: 10,
            },
            {
                from: 10,
                to: 10,
                odds: 20,
            },
            {
                from: 11,
                to: 11,
                odds: 30,
            },
            {
                from: 12,
                to: 12,
                odds: 50,
            },
            {
                from: 13,
                to: 13,
                odds: 100,
            },
            {
                from: 14,
                to: 14,
                odds: 200,
            },
            {
                from: 15,
                to: 36,
                odds: 400,
            },
        ],
    },
    freeSpins: {
        initialOdds: [
            {
                count: 3,
                odds: 5,
            },
            {
                count: 4,
                odds: 15,
            },
            {
                count: 5,
                odds: 20,
            },
            {
                count: 6,
                odds: 25,
            },
        ],
    },
};

export const COMMON_SETTLEMENT_RESULT = {
    tumbles: [
        {
            reels: [
                [0, 4, 8, 2, 1, 0],
                [6, 1, 7, 6, 7, 8],
                [5, 2, 2, 5, 7, 4],
                [5, 3, 8, 2, 4, 3],
                [1, 4, 1, 3, 6, 7],
                [5, 8, 3, 6, 0, 0],
            ],
            reelMultipliers: [
                [-2, -2, -2, -2, -2, -2],
                [-2, -2, -2, -2, -2, -2],
                [-2, -2, -2, -2, -2, -2],
                [-2, -2, -2, -2, -2, -2],
                [-2, -2, -2, -2, -2, -2],
                [-2, -2, -2, -2, -2, -2],
            ],
            symbols: [],
            win: 0,
            rageMeter: 0,
            newSymbols: [],
        },
    ],
    freeSpins: {
        count: 4,
        odds: 15,
    },
};
