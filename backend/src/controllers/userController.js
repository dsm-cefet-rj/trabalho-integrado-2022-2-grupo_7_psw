import users from "../models/User.js";

class UserController {
  static getAllUser = (req, res) => {
    users.find((err, user) => {
      res.status(200).json(user);
    });
  };
  static createUser = (req, res) => {
    let newUser = new users(req.body);

    newUser.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ messege: `${err.messege} - falha ao criar user` });
      } else {
        res.status(201).send(newUser.toJSON());
      }
    });
  };
  static updateUser = (req, res) => {
    const id = req.params.id;
    users.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "User updated successfuly" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
  static getById = (req, res) => {
    const id = req.params.id;

    users.findById(id, (err, user) => {
      if (err) {
        res.status(400).send({
          message: `${err.message} - Not found any user by id requested`,
        });
      } else {
        res.status(200).send(user);
      }
    });
  };
  static deleteUser = (req, res) => {
    const id = req.params.id;
    users.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ messege: "User deleted successfuly" });
      }
    });
  };
}

export default UserController;
