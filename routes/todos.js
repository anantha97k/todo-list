const {
  taskPOST,
  taskGET,
  tasknamePUT,
  taskPUT,
  taskDELETE,
} = require("../controller/todoController");

var express = require("express");
var todoRouter = express.Router();

todoRouter.post("/:uid/put/:tid", taskPUT);

todoRouter.post("/:uid/del/:tid", taskDELETE);

todoRouter.route("/:id").get(taskGET).post(taskPOST);

todoRouter.put(":id/task", tasknamePUT);

module.exports = todoRouter;
