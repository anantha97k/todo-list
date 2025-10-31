const {
  POSTtask,
  GETtask,
  PUTtaskname,
  PUTtask,
  DELETEtask,
} = require("../db/todoDB");

async function taskPOST(req, res) {
  const { task } = req.body;
  await POSTtask(task, parseInt(req.params.id, 10));
  res.redirect(`/todo/${req.params.id}`);
}

async function taskGET(req, res) {
  let { filter } = req.query;
  const tasks = await GETtask(parseInt(req.params.id, 10), filter);
  if (filter === undefined) filter = "all";
  res.render("todo", { tasks: tasks, user: req.user, filter: filter });
}

async function tasknamePUT(req, res) {
  const { task } = req.body;
  await PUTtaskname(req.id, task);
  res.redirect(`/todo/${req.params.id}`);
}

async function taskPUT(req, res) {
  const { completed } = req.body;
  await PUTtask(parseInt(req.params.tid, 10), completed);
  res.redirect(`/todo/${req.params.uid}`);
}

async function taskDELETE(req, res) {
  await DELETEtask(parseInt(req.params.tid, 10));
  res.redirect(`/todo/${req.params.uid}`);
}

module.exports = {
  taskPOST,
  taskGET,
  tasknamePUT,
  taskPUT,
  taskDELETE,
};
