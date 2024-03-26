const router = require("express").Router();
const controller = require("../controller/profile.js");


router.put("/edit", controller.updateProfile);

module.exports = router;