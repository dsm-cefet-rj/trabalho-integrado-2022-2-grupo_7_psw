import users from "../models/User.js";
import bcrypt from "bcryptjs"

class UserController {
  static getAllUser = (req, res) => {
    users.find((err, user) => {
      res.status(200).json(user);
    });
  };
  static createUser = (req, res) => {

    users.findOne({"email": req.body.email}, (err, userWithSameEmail) => {
      if(err){
        res.status(400).json({
          message: 'Error getting email try gain',
        });

      }else if(userWithSameEmail){
        res.status(400).json({ message: 'This email is taken' });
      }else{
        let newUser = new users(req.body);

        bcrypt.genSalt(10, function(err, salt) {
          bcrypt.hash(newUser.password, salt, function(err, hash) {
            newUser.password = hash;
    
            newUser.save((erro) => {
              if (erro) {
                res
                  .status(500)
                  .send({ messege: `${erro.messege} - falha ao criar user` });
              } else {
                res.status(201).send(newUser.toJSON());
              }
            });
          });
        });
      }
    }) 
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
          message: `${err.message} - Found any user by id requested`,
        });
      } else {
        res.status(200).send(user);
      }
    });
  };

  static getByEmail = (req, res) => {
    const email = req.query.email
      users.find({"email": email}, {}, (err, user) => {
        if(!err){
          res.status(200).send(user);

        }else{
          res.status(400).send({
            message: `${err.message} - Found any user by email requested`
          })
        }
      }) 
    
  }

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
