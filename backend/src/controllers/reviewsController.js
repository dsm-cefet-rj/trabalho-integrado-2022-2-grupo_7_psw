import reviews from "../models/Review.js";

class ReviewsController {
  static getAllReviews = (req, res) => {
    reviews
      .find()
      .populate("user", ["username", "pictureUrl"])
      .exec((err, review) => {
        res.status(200).json({
          data: review,
        });
      });
  };

  static getFavorite = (req, res) => {
    const id = req.params.id;
    reviews.find({ favorite: true, username: id }, (err, review) => {
      res.status(200).json({
        data: review,
      });
    });
  };

  static getByGameIdAndUserId = (req, res) => {
    const gameId = req.params.gameId;
    const userId = req.params.userId;
    reviews
      .find({ game_id: gameId })
      .where("user")
      .equals(userId) //userId tem risco de quebrar
      .exec((err, review) => {
        if (!err) {
          res.status(200).send(review);
        } else {
          res.status(400).send(err.message);
        }
      });
  };

  static createReview = (req, res) => {
    let newReview = new reviews(req.body);

    newReview.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ messege: `${err.messege} - falha ao criar review` });
      } else {
        res.status(201).send(newReview.toJSON());
      }
    });
  };
  static updateReview = (req, res) => {
    const id = req.params.id;
    const userid = req.params.userid;
    reviews.findOneAndUpdate(
      { game_id: id, user: userid },
      {
        $set: {
          text_review: req.body.text_review,
          rating: req.body.rating,
          date: req.body.date,
          favorite: req.body.favorite,
          status: req.body.status,
        },
      },
      (err) => {
        if (!err) {
          res.status(200).send({ message: "News atualizada com sucesso" });
        } else {
          res.status(500).send({ message: err.message });
        }
      }
    );
  };

  static getById = (req, res) => {
    const id = req.params.id;

    reviews.find({ game_id: id }, (err, review) => {
      if (err) {
        res.status(400).json({
          data: "Error",
        });
      } else {
        res.status(200).json({
          data: review,
        });
      }
    });
  };

  static getByUser = (req, res) => {
    const id = req.params.id;

    reviews.find({ username: id }, (err, review) => {
      if (err) {
        res.status(400).json({
          data: "Error",
        });
      } else {
        res.status(200).json({
          data: review,
        });
      }
    });
  };

  static deleteReview = (req, res) => {
    const id = req.params.id;
    const userid = req.params.userid;
    reviews.findOneAndDelete({ game_id: id, user: userid }, (err) => {
      if (!err) {
        res.status(200).send({ messege: "Review deleted successfuly" });
      }
    });
  };
}

export default ReviewsController;
