const express = require("express");
const cors = require("cors");
const matchRoutes = require("./routes/matchRoutes");
const teamRoutes = require("./routes/teamRoutes");

const statsRoutes = require("./routes/statsRoutes");




const app = express();
app.use(express.json())
app.use(cors())



app.use("/api/matches", matchRoutes);
app.use("/api/stats", statsRoutes);
app.use("/api/teams", teamRoutes);
module.exports = app;