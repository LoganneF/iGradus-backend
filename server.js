const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require('cors')
const PORT = 3000

const gradesController = require("./controllers/grades")

// MONGOOSE
mongoose.connection.on("error", err =>
	console.log(err.message + " is Mongod not running?")
)
mongoose.connection.on("disconnected", () => console.log("mongo disconnected"))
mongoose.connect("", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
mongoose.connection.once("open", () => {
	console.log("connected to mongoose...")
})

// CORS middleware:
const whitelist = [
    "http://localhost:3000",
    "https://fathomless-sierra-68956.herokuapp.com"
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

// JSON
app.use(express.json())

// MOUNT ROUTE
app.use("/grades", gradesController)

// PORT LISTENER
app.listen(PORT, () => {
	console.log(`Listening on ${PORT}`)
})