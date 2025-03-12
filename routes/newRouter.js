const { Router } = require("express");
const newRouter = Router();
const newController = require("../controller/newController");

newRouter.get("/", newController.newGet);
newRouter.post("/", newController.newPost);

module.exports = newRouter;
