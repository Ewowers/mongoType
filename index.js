const express = require("express");
const mongoose = require("mongoose");
const api = require("./api/api");
const openApi = require("./opneApi");
const app = express();
openApi();

app.use("/api", api);
const start = async () => {
  try {
    const url = "mongodb://localhost:27017/RESTAPI"; // подключение к бд
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    const port = process.env.PORT || 8001;
    app.listen(port, () => {
      console.log("http://localhost:" + port);
    });
  } catch (err) {
    console.error;
  }
};
start();
