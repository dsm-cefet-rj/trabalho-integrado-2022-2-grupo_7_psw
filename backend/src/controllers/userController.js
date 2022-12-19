import users from "../models/User.js";
// import bcrypt from "bcryptjs";
import User from "../models/User.js";
import passport from "passport";

class UserController {
  static getAllUser = (req, res) => {
    users.find((err, user) => {
      res.status(200).json(user);
    });
  };
  static createUser = (req, res, next) => {
    // console.log(req.body)
    User.register(new User({
      username: req.body.username,
      email: req.body.email,
      level: req.body.level,
      bio: req.body.bio,
      pictureUrl: req.body.pictureUrl,
      friends: [req.body.user]
    }),
      req.body.password,
      (err, user) => {
      if (err) {
        res
          .status(500)
          .setHeader('Content-Type', 'application/json')
          .send({ messege: `${err.messege} - falha ao criar user` });
      } else {
        passport.authenticate('local')(req, res, () => {
          res.statusCode = 200;
          res.setHeader('content-type' , 'application/json');
          res.json({success: true, status: 'Registration Successful'});
        })
      }            
    })
  };
  static updateUser = (req, res) => {
    const id = req.params.id;
    User.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "User updated successfuly" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
  static getById = (req, res) => {
    const id = req.params.id;

    User.findById(id, (err, user) => {
      if (err) {
        res.status(400).send({
          message: `${err.message} - Found any user by id requested`,
        });
      } else {
        res.status(200).send(user);
      }
    });
  };

  static getByEmail = (req, res) => {
    const email = req.query.email;
    User.find({ email: email }, {}, (err, user) => {
      if (!err) {
        res.status(200).send(user);
      } else {
        res.status(400).send({
          message: `${err.message} - Found any user by email requested`,
        });
      }
    });
  };

  static deleteUser = (req, res) => {
    const id = req.params.id;
    User.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ messege: "User deleted successfuly" });
      }
    });
  };

  static loginUser = (err, req, res, next) => {
    passport.authenticate('local'), (req, res) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json')
      res.json({success: true, status: "You are successfully logged in"});
    }
  };
}

export default UserController;
