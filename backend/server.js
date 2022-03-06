const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const db = require("./db/tickets");
const cors = require('cors');

app.use(cors({
    origin: '*'
}))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post("/tickets", async (req, res) => {
    const results = await db.createTicket(req.body);
    res.status(201).json({ id: results[0] });
});

app.get("/tickets", async (req, res) => {
    const tickets = await db.getAllTickets();
    res.status(200).json({ tickets });
});

app.patch("/tickets/:id", async (req, res) => {
    const id = await db.updateTicket(req.params.id, req.body);
    res.status(200).json({ id });
});

app.delete("/tickets/:id", async (req, res) => {
    await db.deleteTicket(req.params.id);
    res.status(200).json({ success: true });
});

app.listen(1337, () => console.log("server is running on port 1337"));