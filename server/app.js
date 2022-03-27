const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const port = 3030;
require("dotenv").config();

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

mongoose.connect("mongodb://localhost:27017/challenge_db"), {
	useNewUrlParser: true
};

// middlewares
app.use(require("./middlewares/auth"));
// routes
app.use("/login", require("./routes/login"));
app.use("/register", require("./routes/register"));
app.use("/dashboard", require("./routes/dashboard"));
app.use("/materials", require("./routes/materials"));

app.listen(port, function() {
	console.log("server running on port " + port);
});