// require and configure dotenv, will load vars in .env into PROCESS.ENV
require('dotenv').config();

const envVars = process.env;

const config = {
    env: envVars.NODE_ENV || "development",
    port: envVars.PORT || 3000,
    mongo: {
        host: envVars.MONGO_HOST || "mongodb://localhost:27017/starwars",
    }
};

module.exports = config;