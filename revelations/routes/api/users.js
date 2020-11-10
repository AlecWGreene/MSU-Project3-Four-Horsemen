const router = require("express").Router();
const passport = require("../../config/passport");
// const isAuthenticated = require("../config/middleware/isAuthenticated.js");
const usersController = require("../../controllers/usersController");

router.route("/")
  .post(usersController.checkUser);

// Matches with "/api/posts"
router.route("/signup/")
  .post(usersController.create);

router.route("/login/")
//   .post(passport.authenticate('local', {
//     failureRedirect: '/'
// }), function (req, res) {
//     res.redirect('/');
// });
  .post(passport.authenticate("local"), usersController.login);
  // .post(function(req, res, next) {
  //   passport.authenticate("local")
  //   next()
  // }, 
  //   usersController.login
  // );
// Matches with "/api/posts/:id"
router.route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

// router.route("/checkUser")
//   .post(usersController.checkUser);

module.exports = router;
