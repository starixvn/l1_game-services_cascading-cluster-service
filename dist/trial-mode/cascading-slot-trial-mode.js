import { TrialMode } from "sc-trial-mode";
export default class CascadingSlotTrialMode {
    trialModeRoundCalculator;
    logService;
    trialMode;
    constructor(trialModeRoundCalculator, logService) {
        this.trialModeRoundCalculator = trialModeRoundCalculator;
        this.logService = logService;
        this.trialMode = new TrialMode(this.trialModeRoundCalculator, this.logService.logError);
    }
    init(configs) {
        this.trialMode.init(configs);
    }
    registerSocketEvent(socketClient) {
        this.trialMode.registerSocketHandler(socketClient);
    }
}
//# sourceMappingURL=cascading-slot-trial-mode.js.map