import { TrialMode } from "sc-trial-mode";
import type { SocketClient } from "../types/index";

export default class CascadingSlotTrialMode {
    private trialModeRoundCalculator: any;
    private logService: any;
    private trialMode: any;

    constructor(trialModeRoundCalculator: any, logService: any) {
        this.trialModeRoundCalculator = trialModeRoundCalculator;
        this.logService = logService;

        this.trialMode = new TrialMode(this.trialModeRoundCalculator, this.logService.logError);
    }

    init(configs: any): void {
        this.trialMode.init(configs);
    }

    registerSocketEvent(socketClient: SocketClient): void {
        this.trialMode.registerSocketHandler(socketClient);
    }
}
