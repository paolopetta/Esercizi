const express = require("express");
const { MongoClient } = require("mongodb");
const app = express();
const cors = require("cors");

const dbURL = "mongodb://localhost:27017/esercizio_comuni";
let db;

app.use(cors());

async function main() {
  const client = await new MongoClient(dbURL);
  global.db = client.db("esercizio_comuni");

  try {
    await client.connect();

    console.log("Connesso");
  } catch (e) {
    console.error(e);
  }
}

main().catch(console.error);

app.get("/getAllComuni", async function (req, res, next) {
  const collection = "comuni";
  const result = await global.db.collection(collection).find({}).toArray();
  res.send(result);
});

app.get("/comuni/:search", async function (req, res, next) {
  const collection = "comuni";
  const search = req.params.search;
  const result = await global.db
    .collection(collection)
    //.find({ nome: search })
    .find({ $text: { $search: search } })
    .toArray();
  res.send(result);
});

app.get("/cap/:cap", async function (req, res, next) {
  const collection = "comuni";
  const cap = req.params.cap;
  const result = await global.db
    .collection(collection)
    //.find({ nome: search })
    .find({ cap: cap })
    .toArray();
  res.send(result);
});

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
