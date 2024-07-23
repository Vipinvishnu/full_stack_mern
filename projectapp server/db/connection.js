const mongoose = require("mongoose");
const connectionString = process.env.DATABASE;
mongoose
  .connect(connectionString)
  .then(() => {
    console.log("______MongoDB Atlas connected");
  })
  .catch((err) => {
    console.log(`___MongoDB Atlas connected Failed  !!  ${err}`);
  });
