const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
//const PORT = 3003
const session = require("express-session")
const methodOverride = require("method-override")
const PORT = process.env.PORT || 5001

var MONGODB_URI = process.env.MONGODB_URL || "mongodb://localhost:27017/auth";
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  family: 4 // Use IPv4, skip trying IPv6
};
mongoose.connect(MONGODB_URI, options)

app.use(express.urlencoded({ extended: false }))

app.use(
	session({
		secret: "feedmeseymour",
		resave: false,
		saveUninitialized: false,
	})
)

app.use(methodOverride("_method"))

// MONGOOSE
mongoose.connection.on("error", err =>
	console.log(err.message + " is Mongod not running?")
)
mongoose.connection.on("disconnected", () => console.log("mongo disconnected"))


//CORS middleware:
const whitelist = [
	"http://localhost:3003",
	"https://igradus-react.herokuapp.com"
];
  const corsOptions = {
    origin: function(origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    }
  };
app.use(cors(corsOptions));

//app.use(cors())

// JSON
app.use(express.json())

//initial routes for authorization
app.get("/app", (req, res) => {
	if (req.session.currentUser) {
		res.send("the party")
	} else {
		res.redirect("/sessions/new")
	}
})
//initial routes for authorization
app.get("/", (req, res) => {
	res.render("index.ejs", {
		currentUser: req.session.currentUser,
	})
})

//CONTROLLER ROUTES
const assignmentsController = require("./controllers/assignments.js")
app.use("/assignments", assignmentsController)

const studentsController = require("./controllers/students.js")
app.use("/students", studentsController)

const usersController = require("./controllers/users.js")
app.use("/users", usersController)

const sessionsController = require("./controllers/sessions.js")
app.use("/sessions", sessionsController)

// PORT LISTENER
app.listen(PORT, () => {
	console.log(`Listening on ${PORT}`)
})
