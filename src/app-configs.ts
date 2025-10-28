import internalAppConfigs from "./internal-configs/app-configs";
import shareAppConfigs from "./share-configs/app-configs";

function flattenObject(obj: any, prefix = "", res = {}): Record<string, any> {
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            const newKey = prefix ? `${prefix}||${key}` : key;
            const value = obj[key];

            if (typeof value === "object" && value !== null && !Array.isArray(value)) {
                flattenObject(value, newKey, res);
            } else {
                res[newKey] = value;
            }
        }
    }
    return res;
}

function unflattenObject(flatObject = {}): any {
    const result: any = {};

    for (const key in flatObject) {
        if (Object.prototype.hasOwnProperty.call(flatObject, key)) {
            const value = flatObject[key];
            const parts = key.split("||");

            let current = result;
            for (let i = 0; i < parts.length - 1; i++) {
                const part = parts[i];
                if (!current[part] || typeof current[part] !== "object") {
                    current[part] = {};
                }
                current = current[part];
            }

            const finalPart = parts[parts.length - 1];
            current[finalPart] = value;
        }
    }

    return result;
}

const flattenedShareConfigs = flattenObject(shareAppConfigs);
const flattenedInternalAppConfigs = flattenObject(internalAppConfigs);

const appConfigs = unflattenObject({
    ...flattenedShareConfigs,
    ...flattenedInternalAppConfigs,
});

export default appConfigs;
