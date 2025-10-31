const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

async function POSTuser(username, password) {
  const { user_id } = await prisma.users.create({
    data: {
      username: username,
      password: password,
    },
    select: {
      user_id: true,
    },
  });

  return user_id;
}

async function GETuser(username) {
  const users = await prisma.users.findUnique({
    where: {
      username: username,
    },
  });
  return users;
}

async function GETuserID(user_id) {
  const users = await prisma.users.findUnique({
    where: {
      user_id: user_id,
    },
  });
  return users;
}

module.exports = {
  POSTuser,
  GETuser,
  GETuserID,
};
