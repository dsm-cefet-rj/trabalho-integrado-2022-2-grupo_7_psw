const axios = require("axios");
const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
var bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = 3001;

app.set("port", port);
const server = http.createServer(app);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

const accessToken = "Bearer ijh5gvzwv8ntxnvxyyijh39kor858t";

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

// I HAVE TO FIX IT YET
// Given the game id, the api should have returned the developer. However I am having problems handling the array of games developed.
// I don't know how to make a condition to check if the array of games developed contains the id of the given game id

app.get("/api/creator/:id", (req, res) => {
  axios({
    url: "https://api.igdb.com/v4/companies",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Client-ID": "dnz1zvhqgyb7pwacm85eu171egtel1",
      Authorization: accessToken,
    },
    data: `fields name; where developed=${req.params.id};`,
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
