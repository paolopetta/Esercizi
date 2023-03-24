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
  //const result = await global.db.collection(collection).find({}).toArray();
  const result = await global.db
    .collection(collection)
    .aggregate([
      {
        $lookup: {
          from: "province",
          localField: "sigla",
          foreignField: "sigla",
          as: "result",
        },
      },
    ])
    .toArray();
  res.send(result);
});

app.get("/comuni/:search", async function (req, res, next) {
  const collection = "comuni";
  const search = req.params.search;
  const result = await global.db
    .collection(collection)
    //.find({ nome: search })
    .find({ $or: [{ $text: { $search: search } }, { cap: search }] })
    .toArray();
  res.send(result);
});

app.get("/merge/:search", async function (req, res, next) {
  const collection = "comuni";
  const search = req.params.search;
  const result = await global.db
    .collection(collection)
    //.find({ $or: [{ $text: { $search: search } }, { cap: search }] })
    .aggregate([
      {
        $match: {
          $or: [{ $text: { $search: search } }, { cap: search }],
        },
      },
      {
        $lookup: {
          from: "province",
          localField: "sigla",
          foreignField: "sigla",
          as: "result",
        },
      },
    ])
    .toArray();
  res.send(result);
});

app.get("/comuniMerge/:search", async function (req, res, next) {
  const collection = "comuni_nuovi";
  const search = req.params.search;
  let result = await global.db
    .collection(collection)
    .aggregate([
      {
        $match: {
          //$text: { $search: search },
          $or: [
            { "Denominazione in italiano": search },
            { "Denominazione Comune": search },
          ],
        },
      },
      // {
      //   $lookup: {
      //     from: "comuni",
      //     localField: "Codice Comune formato alfanumerico",
      //     foreignField: "codice",
      //     as: "comuni",
      //   },
      // },
    ])
    .toArray();

  let resultPar = [];

  for (const comuneTrovato of result) {
    if (comuneTrovato?.soppresso) {
      singleQuery = await global.db
        .collection("comuni_nuovi")
        .find({
          "Codice Comune formato alfanumerico":
            comuneTrovato["Codice del Comune associato alla variazione"],
        })
        .toArray();
      resultPar.push(...singleQuery);
    }
  }

  result = resultPar;
  res.send(result);

  //Ora in result ho i dati del merge
  //Rimaneggio result per aggiungere il report
  // const report = result.map((element) => {
  //   if (element.comuni.length == 0) {
  //     return (element.reportComuni = "Non presente");
  //   } else return (element.reportComuni = "Presente");
  // });

  // const result2016 = await global.db
  //   .collection(collection)
  //   .aggregate([
  //     {
  //       $lookup: {
  //         from: "comuni_2016",
  //         localField: "codice",
  //         foreignField: "codice",
  //         as: "comuni2016",
  //       },
  //     },
  //   ])
  //   .toArray();

  // const report2016 = result.map((element) => {
  //   if (element.comuni.length == 0) {
  //     return (element.reportComuni2016 = "Non presente");
  //   } else return (element.reportComuni2016 = "Presente");
  // });

  //res.send(result);
});

app.get("/comuniMerge", async function (req, res, next) {
  const collection = "comuni_nuovi";
  const result = await global.db
    .collection(collection)
    .aggregate([
      {
        $lookup: {
          from: "comuni",
          localField: "Codice Comune formato alfanumerico",
          foreignField: "codice",
          as: "comuni",
        },
      },
    ])
    .toArray();

  const report = result.map((element) => {
    if (element.comuni.length == 0) {
      return (element.reportComuni = "Non presente");
    } else return (element.reportComuni = "Presente");
  });

  const result2016 = await global.db
    .collection(collection)
    .aggregate([
      {
        $lookup: {
          from: "comuni_2016",
          localField: "codice",
          foreignField: "codice",
          as: "comuni2016",
        },
      },
    ])
    .toArray();

  const report2016 = result.map((element) => {
    if (element.comuni.length == 0) {
      return (element.reportComuni2016 = "Non presente");
    } else return (element.reportComuni2016 = "Presente");
  });

  res.send(result);
});

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
