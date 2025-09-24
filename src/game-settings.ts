import type { GameSettings } from './types/index';
import appConfigs from './app-configs';

const gameSettings: GameSettings = {
    durations: {
        wholeRound: 60,
        lockingBet: 0,
    },
    freeSpinLiveSeconds: appConfigs.freeSpinLiveSeconds,
    bonusLiveSeconds: appConfigs.bonusLiveSeconds,
};

export default gameSettings;
