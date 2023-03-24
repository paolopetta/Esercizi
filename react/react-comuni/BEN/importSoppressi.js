const { MongoClient } = require("mongodb");
const fs = require("fs");
const { parse } = require("csv-parse");
var csv = require("csvtojson");

var dbURL = "mongodb://localhost:27017/esercizio_comuni";

async function main() {
  const client = new MongoClient(dbURL);
  global.db = client.db("esercizio_comuni");

  try {
    await client.connect();

    console.log("Connesso");
  } catch (e) {
    console.error(e);
  }
}
main().catch(console.error);

async function comuni_soppressi() {
  const jsonArrayObj = await csv({ delimiter: ";" }).fromFile(
    "comuni_soppressi.csv"
  );
  fs.writeFileSync(
    "comuni_soppressi.json",
    JSON.stringify(jsonArrayObj),
    "utf-8",
    (err) => {
      if (err) console.log(err);
    }
  );

  let rawdata = fs.readFileSync("comuni_soppressi.json");
  const comuni_soppressi = JSON.parse(rawdata);

  for (const comuneSopp of comuni_soppressi) {
    comuneSopp.soppresso = true;
    checkExist(comuneSopp["Codice Comune"]).then((esiste) => {
      if (esiste)
        console.log(
          "Comune " +
            comuneSopp["Denominazione Comune"] +
            " - " +
            comuneSopp["Codice Comune"] +
            " esistente"
        );
      else {
        console.log(
          "Inserisco il comune " +
            comuneSopp["Denominazione Comune"] +
            " - " +
            comuneSopp["Codice Comune"]
        );
        insertObj(comuneSopp);
      }
    });
  }
}

comuni_soppressi();

async function insertObj(myobj) {
  const result = await global.db.collection("comuni_nuovi").insertOne(myobj);
}

async function checkExist(codComune) {
  const result = await global.db
    .collection("comuni_nuovi")
    .find({ "Codice Comune": codComune })
    .toArray();
  if (result.length > 0) {
    return true;
  } else {
    return false;
  }
}
