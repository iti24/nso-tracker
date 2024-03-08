const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("./config");
const bodyParser = require("body-parser");
const locationRoutes = require("./routes/locatinDetails");
const app = express();

mongoose.connect(config.mongodbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongoDB connection error"));
app.use(cors());

app.use(bodyParser.json());
app.get("/", async (req, res) => {
  res.send("the server is running");
});
// Routes

app.use("/api/location", locationRoutes);



app.listen(config.port, () => {
  console.log(`server started on port ${config.port}`);
});
