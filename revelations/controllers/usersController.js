const db = require("../models");

// Defining methods for the postsController
module.exports = {
  create: function(req, res) {
    db.User.findOne({ username: req.body.username })
      // if dbModel is undefined then create user account.  
      // if dbmodel exists and the user provided password is invalid, then send unauthorized status 401 with response.data "Inuse", as the username/account is unavailible.
      // if dbmodel exists and the user provided password is valid, then send the user model (sans password) to be automatically logged in (user match - lazy login reroute for the unaware)
      .then(dbModel => {
        switch(true) {
          case !dbModel:
            db.User.create(req.body)
              .then(dbModel => {
                console.log("Account created for user: " + dbModel._doc.username)
                delete dbModel._doc["password"];  // withhold password from front end
                res.json(dbModel._doc)
              })
              .catch(err => res.status(422).json(err));
            break;
          case !dbModel.validPassword(req.body.password):
            throw 'Inuse';
          default:
            delete dbModel._doc["password"];  // withhold password from front end
            res.json(dbModel._doc)
        }
      })
      .catch(err => res.status(401).send(err));  // unauthorized status code 401 - invalid Credentials: username already in use
  },
  login: function(req, res) {
    db.User.findOne({ username: req.body.username })
      .then(dbModel => {
        delete dbModel._doc["password"];  // withhold password from front end
        res.json(dbModel);
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
};