const  express = require("express");
const userController = require("../controllers/user.controllers");

const router = express.Router();


router.route("/").get(userController.getUser).post(userController.saveUser);
router.route("/:id").put(userController.updateUser).delete(userController.deleteUser);
router.route("/login").post(userController.findUser);
// router.route("/user-data").post(userController.userData); 
router.route("/course").get(userController.getCourse).post(userController.saveCourse); 

module.exports = router;