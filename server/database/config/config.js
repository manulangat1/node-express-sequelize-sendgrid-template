require('dotenv').config()
module.exports = {
  "development": {
    "username": "manulangat",
    "password": "3050manu",
    "database": "tem_node",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  test: {
    "use_env_variable":"TEST_URL",
    "dialect":"postgres",
    "ssl": true
  },
  production: {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postges"
  }
}
