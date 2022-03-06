const knex = require("./knex");

function createTicket(tick) {
    return knex("tickets").insert(tick);
};

function getAllTickets() {
    return knex("tickets").select("*");
};

function deleteTicket(id) {
    return knex("tickets").where("id", id).del();
};

function updateTicket(id, tick) {
    return knex("tickets").where("id", id).update(tick);
};

module.exports = {
    createTicket,
    getAllTickets,
    deleteTicket,
    updateTicket
}