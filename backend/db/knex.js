const knex = require("knex");

const connectedKnex = knex({
    client: "sqlite3",
    connection: {
        filename: "tickets.sqlite3"
    }
});

module.exports = connectedKnex;