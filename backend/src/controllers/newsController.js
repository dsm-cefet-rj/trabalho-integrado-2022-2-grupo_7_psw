import news from "../models/News.js";

class NewsController {
  static getAllNews = (req, res) => {
    news
      .find()
      .populate("user")
      .exec((err, news) => {
        res.status(200).json(news);
      });
  };
  static getById = (req, res) => {
    const id = req.params.id;

    news
      .findById(id)
      .populate("user", "nome")
      .exec((err, news) => {
        if (err) {
          res.status(400).send({
            message: `${err.message} - Not found any news by id requested`,
          });
        } else {
          res.status(200).send(news);
        }
      });
  };
  static createNew = (req, res) => {
    let newNews = new news(req.body);

    newNews.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ messege: `${err.messege} - falha ao criar news` });
      } else {
        res.status(201).send(newNews.toJSON());
      }
    });
  };
  static updateNews = (req, res) => {
    const id = req.params.id;
    news.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "News atualizada com sucesso" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static deleteNews = (req, res) => {
    const id = req.params.id;
    news.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ messege: "News deleted successfulyu" });
      }
    });
  };

  static getNewsByUser = (req, res) => {
    const user = req.query.user;
    news.find({ user: user }, {}, (err, news) => {
      res.status(200).send(news);
    });
  };
}

export default NewsController;
