import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();

class ApiController {
  static getDate = (req, res) => {
    axios({
      url: "https://api.igdb.com/v4/release_dates",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Client-ID": process.env.CLIENT_IGDB_ID,
        Authorization: process.env.ACCESS_IGDB_TOKEN,
      },
      data: `fields human,y; where game=${req.params.id};`,
    })
      .then((response) => {
        res.json({ data: response.data });
      })
      .catch((err) => {
        // console.error(err);
        res.send("Error");
      });
  };

  static getCreator = (req, res) => {
    axios({
      url: "https://api.igdb.com/v4/companies",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Client-ID": process.env.CLIENT_IGDB_ID,
        Authorization: process.env.ACCESS_IGDB_TOKEN,
      },
      data: `fields name; where developed=[${req.params.id}];`,
    })
      .then((response) => {
        res.json({ data: response.data });
      })
      .catch((err) => {
        // console.error(err);
        res.send("Error");
      });
  };

  static getGeneral = (req, res) => {
    axios({
      url: "https://api.igdb.com/v4/games",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Client-ID": process.env.CLIENT_IGDB_ID,
        Authorization: process.env.ACCESS_IGDB_TOKEN,
      },
      data: `fields rating, name, summary, platforms, genres, category; where id=${req.params.id};`,
    })
      .then((response) => {
        res.json({ data: response.data });
      })
      .catch((err) => {
        // console.error(err);
        res.send("Error");
      });
  };
  static getGenres = (req, res) => {
    axios({
      url: "https://api.igdb.com/v4/genres",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Client-ID": process.env.CLIENT_IGDB_ID,
        Authorization: process.env.ACCESS_IGDB_TOKEN,
      },
      data: `fields name,slug; where id=${req.params.id};`,
    })
      .then((response) => {
        res.json({ data: response.data });
      })
      .catch((err) => {
        // console.error(err);
        res.send("Error");
      });
  };
  static getCover = (req, res) => {
    axios({
      url: "https://api.igdb.com/v4/covers",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Client-ID": process.env.CLIENT_IGDB_ID,
        Authorization: process.env.ACCESS_IGDB_TOKEN,
      },
      data: `fields url; where game=${req.params.id};`,
    })
      .then((response) => {
        res.json({ data: response.data });
      })
      .catch((err) => {
        // console.error(err);
        res.send("Error");
      });
  };
  static getScreenshot = (req, res) => {
    axios({
      url: "https://api.igdb.com/v4/screenshots",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Client-ID": process.env.CLIENT_IGDB_ID,
        Authorization: process.env.ACCESS_IGDB_TOKEN,
      },
      data: `fields url, game; where game=${req.params.id};`,
    })
      .then((response) => {
        res.json({ data: response.data });
      })
      .catch((err) => {
        // console.error(err);
        res.send("Error");
      });
  };
  static getList = (req, res) => {
    axios({
      url: "https://api.igdb.com/v4/games",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Client-ID": process.env.CLIENT_IGDB_ID,
        Authorization: process.env.ACCESS_IGDB_TOKEN,
      },
      data: `fields name, summary, platforms, genres, category, cover, rating_count; limit 15; where rating_count > 100; offset ${
        req.params.id * 15
      };`,
    })
      .then((response) => {
        res.json({ data: response.data });
      })
      .catch((err) => {
        // console.error(err);
        res.send("Error");
      });
  };
  static getQuery = (req, res) => {
    axios({
      url: "https://api.igdb.com/v4/games",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Client-ID": process.env.CLIENT_IGDB_ID,
        Authorization: process.env.ACCESS_IGDB_TOKEN,
      },
      data: `search "${req.params.name}"; fields name,cover,genres; limit 15; offset ${
        req.params.id * 15
      };`,
    })
      .then((response) => {
        res.json({ data: response.data });
      })
      .catch((err) => {
        // console.error(err);
        res.send("Error");
      });
  };
  static getCount = (req, res) => {
    axios({
      url: "https://api.igdb.com/v4/multiquery",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Client-ID": process.env.CLIENT_IGDB_ID,
        Authorization: process.env.ACCESS_IGDB_TOKEN,
      },
      data: `query games/count "Count of games" {
        search"${req.params.name}";
      };`,
    })
      .then((response) => {
        res.json({ data: response.data });
      })
      .catch((err) => {
        // console.error(err);
        res.send("Error");
      });
  };

  static getCapa = (req, res) => {
    axios({
      url: "https://api.igdb.com/v4/covers",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Client-ID": process.env.CLIENT_IGDB_ID,
        Authorization: process.env.ACCESS_IGDB_TOKEN,
      },
      data: `fields url; where id=${req.params.id};`,
    })
      .then((response) => {
        res.json({ data: response.data });
      })
      .catch((err) => {
        // console.error(err);
        res.send("Error");
      });
  };
}

export default ApiController;
