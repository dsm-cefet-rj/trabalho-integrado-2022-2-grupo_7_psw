const axios = require("axios");
const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
var bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
require("dotenv").config();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = 3001;

app.set("port", port);
const server = http.createServer(app);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

const uri = process.env.URL_MONGO || "mongodb+srv://empty"; // username and password are contained in the uri which is a env variable.

const client = new MongoClient(uri);

const accessToken = "Bearer ijh5gvzwv8ntxnvxyyijh39kor858t";

app.post("/review/new", (req, res) => {
  async function run() {
    try {
      await client.connect();
      // database and collection code goes here
      const db = client.db("Droppr");
      const coll = db.collection("reviews");
      // insert code goes here
      const docs = [req.body];
      const result = await coll.insertMany(docs);
      // display the results of your operation
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);

  console.log(req.body);
  res.send(req.body);
});

app.get("/getreview", (req, res) => {
  const review = [];
  async function run() {
    try {
      await client.connect();
      // database and collection code goes here
      const db = client.db("Droppr");
      const coll = db.collection("reviews");
      // find code goes here
      const cursor = coll.find();
      // iterate code goes here
      await cursor.forEach((e) => {
        review.push(e);
      });

      res.status(200).json({
        data: review,
      });
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);
});

app.get("/api/date/:id", (req, res) => {
  axios({
    url: "https://api.igdb.com/v4/release_dates",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Client-ID": "dnz1zvhqgyb7pwacm85eu171egtel1",
      Authorization: accessToken,
    },
    data: `fields human,y; where game=${req.params.id};`,
  })
    .then((response) => {
      res.json({ data: response.data });
    })
    .catch((err) => {
      console.error(err);
      res.send("Error");
    });
});

app.get("/api/creator/:id", (req, res) => {
  axios({
    url: "https://api.igdb.com/v4/companies",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Client-ID": "dnz1zvhqgyb7pwacm85eu171egtel1",
      Authorization: accessToken,
    },
    data: `fields name; where developed=[${req.params.id}];`,
  })
    .then((response) => {
      res.json({ data: response.data });
    })
    .catch((err) => {
      console.error(err);
      res.send("Error");
    });
});

//Given the game id, the api returns the title, the description, which platforms are avaiable, the genres and category of the game.

app.get("/api/general/:id", (req, res) => {
  axios({
    url: "https://api.igdb.com/v4/games",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Client-ID": "dnz1zvhqgyb7pwacm85eu171egtel1",
      Authorization: accessToken,
    },
    data: `fields rating, name, summary, platforms, genres, category; where id=${req.params.id};`,
  })
    .then((response) => {
      res.json({ data: response.data });
    })
    .catch((err) => {
      console.error(err);
      res.send("Error");
    });
});

//Given the game id, the api returns the cover url of the game

app.get("/api/cover/:id", (req, res) => {
  axios({
    url: "https://api.igdb.com/v4/covers",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Client-ID": "dnz1zvhqgyb7pwacm85eu171egtel1",
      Authorization: accessToken,
    },
    data: `fields url; where game=${req.params.id};`,
  })
    .then((response) => {
      res.json({ data: response.data });
    })
    .catch((err) => {
      console.error(err);
      res.send("Error");
    });
});

// Given the cover id, this return the cover url of the game
app.get("/api/capa/:id", (req, res) => {
  axios({
    url: "https://api.igdb.com/v4/covers",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Client-ID": "dnz1zvhqgyb7pwacm85eu171egtel1",
      Authorization: accessToken,
    },
    data: `fields url; where id=${req.params.id};`,
  })
    .then((response) => {
      res.json({ data: response.data });
    })
    .catch((err) => {
      console.error(err);
      res.send("Error");
    });
});

app.get("/api/screenshot/:id", (req, res) => {
  axios({
    url: "https://api.igdb.com/v4/screenshots",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Client-ID": "dnz1zvhqgyb7pwacm85eu171egtel1",
      Authorization: accessToken,
    },
    data: `fields url, game; where game=${req.params.id};`,
  })
    .then((response) => {
      res.json({ data: response.data });
    })
    .catch((err) => {
      console.error(err);
      res.send("Error");
    });
});

// Endpoint for gameLists in the homepage, the id represents the page in which the user is walking through.

app.get("/api/list/:id", (req, res) => {
  axios({
    url: "https://api.igdb.com/v4/games",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Client-ID": "dnz1zvhqgyb7pwacm85eu171egtel1",
      Authorization: accessToken,
    },
    data: `fields name, summary, platforms, genres, category, cover; limit 5; offset ${
      req.params.id * 15
    };`,
  })
    .then((response) => {
      res.json({ data: response.data });
    })
    .catch((err) => {
      console.error(err);
      res.send("Error");
    });
});

app.get("/api/query/:name/:id", (req, res) => {
  axios({
    url: "https://api.igdb.com/v4/games",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Client-ID": "dnz1zvhqgyb7pwacm85eu171egtel1",
      Authorization: accessToken,
    },
    data: `search "${req.params.name}"; fields name,cover; limit 15; offset ${
      req.params.id * 15
    };`,
  })
    .then((response) => {
      res.json({ data: response.data });
    })
    .catch((err) => {
      console.error(err);
      res.send("Error");
    });
});

app.get("/api/count/:name", (req, res) => {
  axios({
    url: "https://api.igdb.com/v4/multiquery",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Client-ID": "dnz1zvhqgyb7pwacm85eu171egtel1",
      Authorization: accessToken,
    },
    data: `query games/count "Count of games" {
      search"${req.params.name}";
    };`,
  })
    .then((response) => {
      res.json({ data: response.data });
    })
    .catch((err) => {
      console.error(err);
      res.send("Error");
    });
});
