declare module 'sc-game-base/src/core/game-management-api/index.js' {
  export default class GameManagementApiClientFactory {
    constructor(appConfigs: any);
    instance(): any;
  }
  export function getOrDefault<T>(promise: Promise<T>, defaultValue: T | null): Promise<T | null>;
}
