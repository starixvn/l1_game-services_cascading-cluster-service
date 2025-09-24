export interface DatabaseConfig {
    url: string;
    options: {
        dbName: string;
        useNewUrlParser: boolean;
        useUnifiedTopology: boolean;
    };
}
export interface ApiSettings {
    enabledApi: boolean;
    apiUrl: string;
    authUrl: string;
    client: {
        id: string;
        secret: string;
    };
    useAuthenticate: boolean;
    requestTimeout: number;
    placeBetTimeout: number;
    hitJackpotTimeout: number;
    enabledApiLogs: boolean;
}
export interface AuthenticateSettings {
    url: string;
    id: string;
    secret: string;
    requestTimeout: number;
    useAuthenticate: boolean;
    audiences: string[];
}
export interface ServiceSettings {
    url: string;
}
export interface SocketOptions {
    pingInterval: number;
    pingTimeout: number;
    transports: string[];
    allowUpgrades: boolean;
    perMessageDeflate: boolean;
}
export interface SentryConfig {
    sentryUrl: string;
    logIdentifier: string;
    env: string;
}
export interface OtelConfig {
    system: string;
    enabled: boolean;
    endpoint: string;
}
export interface GameManagementApiSettings {
    BASE: string;
}
export interface PromotionApiSettings {
    baseUrl: string;
    timeout: number;
    useAuthentication: boolean;
}
export interface TrackingApiSettings {
    baseUrl: string;
}
export interface AppConfig {
    hostingPort: number;
    apiSettings: ApiSettings;
    authenticateSettings: AuthenticateSettings;
    userServiceSettings: ServiceSettings;
    notificationServiceSettings: ServiceSettings;
    socketOptions: SocketOptions;
    enabledLogs: boolean;
    database: DatabaseConfig;
    sentry: SentryConfig;
    adminSecretKey: string;
    freeSpinLiveSeconds: number;
    bonusLiveSeconds: number;
    jackpotLiveSeconds: number;
    otel: OtelConfig;
    gameManagementApiSettings: GameManagementApiSettings;
    promotionApiSettings: PromotionApiSettings;
    trackingApiSettings: TrackingApiSettings;
}
export interface GameSettings {
    id?: string;
    name?: string;
    durations: {
        wholeRound: number;
        lockingBet: number;
    };
    freeSpinLiveSeconds: number;
    bonusLiveSeconds: number;
}
export interface GameContainer {
    register: (key: string, value: any) => void;
    resolve: (key: string) => any;
}
export interface GameData {
    gameConfigs?: any;
}
export interface GameDefinition {
    name: string;
}
export interface SocketClient {
    id: string;
    emit: (event: string, data: any) => void;
    on: (event: string, callback: Function) => void;
    disconnect: () => void;
}
//# sourceMappingURL=index.d.ts.map