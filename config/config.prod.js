var config = require('./config.global');

config.env = 'prod';
config.hostname = 'prod.host.localhost';
config.mongo.db = 'prod_mongo_db';

module.exports = config;