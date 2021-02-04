require('dotenv').config()
module.exports = {
  "development": {
    "username": "manulangat",
    "password": "3050manu",
    "database": "tem_node",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "use_env_variable": "DATABASE_URL",
    "dialect":"postgres",
    "dialectOptions": {
      ssl: {
        require: true,
        rejectUnauthorized: false // <<<<<<< YOU NEED THIS
      }
    }
  },
  production: {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postges"
  }
}
