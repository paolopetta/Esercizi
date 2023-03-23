const { MongoClient } = require("mongodb");
const fs = require("fs");
const { parse } = require("csv-parse");
var csv = require("csvtojson");

var dbURL = "mongodb://localhost:27017/comuni";

async function main() {
  const client = new MongoClient(dbURL);
  global.db = client.db("comuni");

  try {
    await client.connect();

    console.log("Connesso");
  } catch (e) {
    console.error(e);
  }
}
main().catch(console.error);

csv({ delimiter: ";" })
  .fromFile("comuni_soppressi.csv")
  .then((jsonArrayObj) => {
    fs.writeFileSync(
      "comuni_soppressi.json",
      JSON.stringify(jsonArrayObj),
      "utf-8",
      (err) => {
        if (err) console.log(err);
      }
    );
  });

let rawdata = fs.readFileSync("comuni_soppressi.json");
const comuni_soppressi = JSON.parse(rawdata);
//console.log(comuni_soppressi);

for (const comuneSopp of comuni_soppressi) {
  comuneSopp.soppresso = true;
  insertObj(comuneSopp);
}

async function insertObj(myobj) {
  const result = await global.db.collection("comuni_nuovi").insertOne(myobj);
  console.log(result);
}
