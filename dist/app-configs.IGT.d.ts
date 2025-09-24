declare const _default: import("./types").AppConfig & {
    hostingPort: number;
    id: number;
    name: string;
    authenticateSettings: {
        url: string;
        id: string;
        secret: string;
        requestTimeout: number;
        useAuthenticate: boolean;
        audiences: string[];
    };
    database: {
        url: string;
        options: {
            dbName: string;
            useNewUrlParser: boolean;
            useUnifiedTopology: boolean;
        };
    };
    gameManagementApiSettings: {
        BASE: string;
    };
    promotionApiSettings: {
        baseUrl: string;
        timeout: number;
        useAuthentication: boolean;
    };
};
export default _default;
//# sourceMappingURL=app-configs.IGT.d.ts.map