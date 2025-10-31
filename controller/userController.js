const { POSTuser, GETuser } = require("../db/userDB");

async function userPOST(req, res, next) {
  const { username, password } = req.body;
  const id = await POSTuser(username, password);
  res.locals.user = { user_id: id, username: username };
  next();
}

async function userGET(req, res) {
  const id = await GETuser(req.id);
  res.redirect(`/todo/${id}`);
}

module.exports = {
  userPOST,
  userGET,
};
