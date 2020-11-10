const db = require("../models");
// const passport = require("../../config/passport");

// Defining methods for the postsController
module.exports = {
  findAll: function(req, res) {
    db.User.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    // if (req.user) {
    //   res.redirect("/members");
    // }
    db.User.create(req.body)
      .then(dbModel => {
        // res.redirect(307,"/login/");
        console.log(dbModel)
        // res.json(req.user)
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  login: function(req, res) {
    const data = req.user? 1 : 0;
    if(data){
      res.json(data)
      console.log("user logged-in")
      // res.redirect("/");
    }else{
      res.json(data)
    }
  },
  // login: function(req, res) {
  //   db.User.findOne({ username: req.body.username }, req.body)
  //     .then(dbModel => {
  //       res.json(dbModel)
  //     })
  //     .catch(err => res.status(422).json(err));
  // },
  // login: function() {
  //   passport.authenticate("local"), (req, res) => {
  //     // Sending back a password, even a hashed password, isn't a good idea
  //     res.json({
  //       email: req.user.email,
  //       id: req.user.id
  //     });
  //   };
  // },
  checkUser: function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      console.log("user logged-in")
      res.redirect("/game");
    }
    // res.sendFile(path.join(__dirname, "../public/signup.html"));
    console.log("user NOT logged-in")
    res.redirect("/login");
  }
};
