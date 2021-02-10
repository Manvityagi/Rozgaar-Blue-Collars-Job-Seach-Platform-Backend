require("dotenv").config();

const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  flash = require("connect-flash"),
  passport = require("passport"),
  LocalStrategy = require("passport-local"),
  methodOverride = require("method-override");

const Job = require("./models/job"),
//   Comment = require("./models/comment"), bla bla
  User = require("./models/user");

const { db_user, db_pwd, db_host, db_name } = require("./config");

//requiring routes
// const commentRoutes = require("./routes/comments"),
const jobRoutes = require("./routes/jobs"),
  indexRoutes = require("./routes/index");

const mongoSrvString = `mongodb+srv://${db_user}:${db_pwd}@${db_host}/${db_name}?retryWrites=true&w=majority`;

// connect the database
const db = mongoose
  .connect(mongoSrvString, {
    useNewUrlParser: true,
    useUnifiedTopology: true, //significant refactor of how it handles monitoring all the servers in a replica set or sharded cluster.
    //In MongoDB parlance, this is known as server discovery and monitoring.
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then(() => {
    console.log("Connected to mongo db");
  })
  .catch((err) => {
    console.log("Couldn't connect to mongo db, err: ", err);
  });

// in order to read HTTP POST data , we have to use "body-parser" node module. body-parser is a piece of express middleware that reads a form's input and stores it as a javascript object accessible through req.body
app.use(bodyParser.urlencoded({ extended: true })); //middleware for parsing bodies from URL.
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method")); //to support HTTP Verbs other than GET,POST
app.use(flash());

//seedDB();

//PASSPORT CONFIGURATION
app.use(
  require("express-session")({
    secret: "awesomeness!",
    resave: false,
    saveUninitialized: false, //if you set saveUninitialized to false,
    //the session cookie will not be set on the browser unless the session is modified
  })
);
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser()); //setting id as cookie in user’s browser
passport.deserializeUser(User.deserializeUser()); //getting id from the cookie,

//middleware, whatever function we provide to it will be called on every route
app.use(function (req, res, next) {
  console.log(`req.user: ${req.user}`);
  //pass that req.user to every single template
  //whatever we put in res.locals is whats available inside of our template
  res.locals.currentUser = req.user;
  next();
});

app.use(indexRoutes);
app.use("/jobs", jobRoutes);
//// app.use("/jobs/:id/comments", commentRoutes);

const port = process.env.PORT || 3030;
app.listen(port, function () {
  console.log(`[OK] server started on port ${port}`);
});
