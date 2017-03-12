var mongoose = require('mongoose');

var uristring = 'mongodb://gbest:goodlandingpage@ds129050.mlab.com:29050/heroku_0t3tqm9c';

mongoose.connect(uristring, function (err, res) {
      if (err) {
      console.log ('ERROR connecting to: ' + uristring + '. ' + err);
      } else {
      console.log ('Succeeded connected to: ' + uristring);
      }
});

var Schema = mongoose.Schema;

var candidateSchema = new Schema({
	firstName:  String,
	lastName: String,
	email: String
});

var employerSchema = new Schema({
	firstName:  String,
	lastName: String,
	email: String,
	position: String
});

var Candidate = mongoose.model('candidate-info', candidateSchema);
var Employer = mongoose.model('employer-info', employerSchema);

var johndoe = new Candidate({
	firstName: "john",
	lastName: "green",
	email: "jgreene@awsyahoo.com"
});

var pex = new Employer({
	firstName: "mike",
	lastName: "grant",
	email: "jgreene@awsyahoo.com",
	position: "boss"
});

module.exports = {
	candidate: Candidate,
	employer: Employer
}

pex.save(function (err) {if (err) console.log ('Error on save!')});

