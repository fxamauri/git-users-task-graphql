// Update with your config settings.

module.exports = {
    client: "pg",
    connection: {
      database: "git-tasks-graphql",
      user: "root",
      password: "root",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./src/db/migrations",
    },
  };