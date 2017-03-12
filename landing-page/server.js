var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var path = require("path");

// Set up the Express App
var app = express();
var PORT = process.env.PORT || 8080;

// Static file support with public folder
app.use(express.static("public"));

// Sets up the Express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


// ROUTES
// ==========================================================

// Find all books marked as unread
app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.post("/saveCandidate", function(req,res) {
	
});

app.post("/saveEmployer", function(req,res) {
	
});

// Start the server to begin listening 
app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
})
