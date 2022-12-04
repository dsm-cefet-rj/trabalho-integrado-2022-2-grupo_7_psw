import reviews from "../models/Review.js";

class ReviewsController {
  static getAllReviews = (req, res) => {
    reviews.find((err, review) => {
      res.status(200).json({
        data: review,
      });
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
    reviews.findOneAndUpdate(
      { game_id: id },
      {
        $set: {
          text_review: req.body.text_review,
          rating: req.body.rating,
          date: req.body.date,
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
  static deleteReview = (req, res) => {
    const id = req.params.id;
    reviews.deleteOne({ game_id: id }, (err) => {
      if (!err) {
        res.status(200).send({ messege: "Review deleted successfuly" });
      }
    });
  };
}

export default ReviewsController;
