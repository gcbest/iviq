var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var candidateSchema = new Schema({
	firstName:  String,
	lastName: String,

	date: { type: Date, default: Date.now }

});

var employerSchema = new Schema({
	companyName:  String,
	jobTitle: String,
	location: String,
	jobLevel: String,

	date: { type: Date, default: Date.now }

});

var Candidate = mongoose.model('Candidate', candidateSchema);
var Employer = mongoose.model('Employer', employerSchema);
