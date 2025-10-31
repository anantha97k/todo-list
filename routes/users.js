const { userPOST } = require("../controller/userController");
const { GETuser, GETuserID } = require("../db/userDB");

var express = require("express");
var userRouter = express.Router();
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await GETuser(username);

      if (user === null)
        return done(null, false, { message: "Incorrect username" });

      if (user.password !== password)
        return done(null, false, { message: "Incorrect password" });

      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }),
);

passport.serializeUser((user, done) => {
  done(null, user.user_id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await GETuserID(id);

    done(null, user);
  } catch (err) {
    done(err);
  }
});

userRouter.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
  }),
  function (req, res) {
    res.redirect(`/todo/${req.user.user_id}`);
  },
);

userRouter.post("/signup", userPOST, (req, res, next) => {
  req.login(res.locals.user, function (err) {
    if (err) {
      return next(err);
    }
    res.redirect(`/todo/${req.user.user_id}`);
  });
});

userRouter.post("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

module.exports = userRouter;
