const { databaseConfig } = require('./src/config/config'); 

module.exports = {
  development: {
    ...databaseConfig, 
    dialect: 'mariadb', 
    migrationStorageTableName: 'sequelize_meta', 
    seederStorage: 'sequelize', 
  },
};