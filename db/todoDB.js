const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

async function POSTtask(task_name, user_id) {
  await prisma.todo.create({
    data: {
      task_name: task_name,
      user_id: user_id,
    },
  });
}

async function GETtask(user_id, filter = "all") {
  const tasks = await prisma.todo.findMany({
    where: {
      user_id: user_id,
      completed: filter !== "all" ? JSON.parse(filter) : undefined,
    },
    orderBy: {
      task_id: "desc",
    },
  });
  return tasks;
}

async function PUTtaskname(task_id, task_name) {
  await prisma.todo.update({
    where: {
      task_id: task_id,
    },
    data: {
      task_name: task_name,
    },
  });
}

async function PUTtask(task_id, completed) {
  await prisma.todo.update({
    where: {
      task_id: task_id,
    },
    data: {
      completed: completed === "true" ? true : false,
    },
  });
}

async function DELETEtask(task_id) {
  await prisma.todo.delete({
    where: {
      task_id: task_id,
    },
  });
}

module.exports = {
  POSTtask,
  GETtask,
  PUTtaskname,
  PUTtask,
  DELETEtask,
};
