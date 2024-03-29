import merge from 'lodash/merge';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const stage = process.env.STAGE || 'local';

let envConfig;

if (stage === 'local') {
    envConfig = require('./local').default;
} else if (stage === 'testing') {
    envConfig = require('./testing').default;
} else if (stage === 'production') {
    envConfig = require('./prod').default;
}

export default merge({
    stage,
    env: process.env.NODE_ENV,
    port: 3001,
    secrets: {
        jwt: process.env.JWT_STRING,
        dbUrl: process.env.DATABASE_URL

    }
}, envConfig)
