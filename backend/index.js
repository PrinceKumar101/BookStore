import express from "express";
import dotenv from "dotenv";
import connect from "./config/mongodb.js"

const app = express();
dotenv.config();
connect();

const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
