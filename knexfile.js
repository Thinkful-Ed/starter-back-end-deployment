require("dotenv").config();

module.exports = {
  development: {
    client: "postgresql",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + "/src/db/migrations",
    },
    seeds: {
      directory: __dirname + "/src/db/seeds",
    },
  },

  production: {
    client: "postgresql",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + "/src/db/migrations",
    },
    seeds: {
      directory: __dirname + "/src/db/seeds",
    },
  },
};
