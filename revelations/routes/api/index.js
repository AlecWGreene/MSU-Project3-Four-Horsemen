const router = require("express").Router();
const userRoutes = require("./users");

// sign up routes
router.use("/", userRoutes);

module.exports = router;

