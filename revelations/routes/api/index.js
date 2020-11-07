const router = require("express").Router();
const userRoutes = require("./users");

// Post routes
router.use("/users", userRoutes);

module.exports = router;
