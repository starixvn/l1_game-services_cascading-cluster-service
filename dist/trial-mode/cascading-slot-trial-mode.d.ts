import type { SocketClient } from "../types/index";
export default class CascadingSlotTrialMode {
    private trialModeRoundCalculator;
    private logService;
    private trialMode;
    constructor(trialModeRoundCalculator: any, logService: any);
    init(configs: any): void;
    registerSocketEvent(socketClient: SocketClient): void;
}
//# sourceMappingURL=cascading-slot-trial-mode.d.ts.map