var config = require('./config.global');

config.env = 'dev';
config.hostname = 'dev.host.localhost';
config.mongo.db = 'dev_mongo_db';

module.exports = config;