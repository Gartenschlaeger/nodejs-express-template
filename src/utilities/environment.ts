const ENV_DEV = 'development';
const ENV_PROD = 'production';
const ENV_DEFAULT = ENV_DEV;

class Environment {
    public static getNodeEnv() {
        return process.env.NODE_ENV || ENV_DEFAULT;
    }

    public static isDevelopment() {
        return this.getNodeEnv() === ENV_DEV;
    }

    public static isProduction() {
        return this.getNodeEnv() === ENV_PROD;
    }

    public static getVariable(key: string, defaultValue: string): string {
        let result = process.env[key];
        if (typeof result !== 'string') {
            result = defaultValue;
        }

        return result;
    }

    public static getRequiredVariable(key: string): string {
        const result = process.env[key];
        if (typeof result !== 'string') {
            throw Error(`Could not find an environment variable with key ${key}`);
        }

        return result;
    }
}

export { Environment };
