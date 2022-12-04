import gameLists from "../models/gameLists";

class gameListController {
  static getAllGameLists = (req, res) => {
    gameLists.find((err, gameList) => {
      res.status(200).json({
        data: gameList,
      });
    });
  };
  static createGameList = (req, res) => {
    let newReview = new gameLists(req.body);

    newReview.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ messege: `${err.messege} - falha ao criar gameList` });
      } else {
        res.status(201).send(newReview.toJSON());
      }
    });
  };
  static updateGameList = (req, res) => {
    const id = req.params.id;
    gameLists.findOneAndUpdate(
      { game_id: id },
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
          games: req.body.games,
        },
      },
      (err) => {
        if (!err) {
          res.status(200).send({ message: "GameList atualizada com sucesso" });
        } else {
          res.status(500).send({ message: err.message });
        }
      }
    );
  };

  static getById = (req, res) => {
    const id = req.params.id;

    gameLists.find({ game_id: id }, (err, gameList) => {
      if (err) {
        res.status(400).json({
          data: "Error",
        });
      } else {
        res.status(200).json({
          data: gameList,
        });
      }
    });
  };
  static deleteGameList = (req, res) => {
    const id = req.params.id;
    gameLists.deleteOne({ game_id: id }, (err) => {
      if (!err) {
        res.status(200).send({ messege: "Review deleted successfuly" });
      }
    });
  };
}

export default gameListController;
