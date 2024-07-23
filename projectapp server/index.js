const express = require("express");
require("dotenv").config();
const cors = require("cors"); // cross origin resource sharing

const projectserver = express();

projectserver.use(cors());

const routes = require("./Routes/routes");
require('./db/connection')

projectserver.use(express.json());

projectserver.use(routes);

const PORT = 8000 || process.env.PORT;

projectserver.listen(PORT, () => {
  console.log(`------------server started at ${PORT}------------`);
});

projectserver.get("/", (req, res) => {
  res.send("<h1> vishnu</h1>");
});
