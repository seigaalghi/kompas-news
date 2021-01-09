require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./src/routes");
const port = process.env.PORT || 5000;
const path = require("path");

app.use(express.json());

app.use(cors());

app.use("/api", router);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => console.log(`Server is running at port ${port}`));
