var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var candidateSchema = new Schema({
	firstName:  String,
	lastName: String,
	location: String,
	skills: Array,
	education: Array,
	experience: Array,
	date: { type: Date, default: Date.now }
});

var employerSchema = new Schema({
	companyName:  String,
	jobTitle: String,
	joblocation: String,
	jobLevel: String,
	jobRequirements: Array,
	companyDescription: String,
	date: { type: Date, default: Date.now }

});

var Candidate = mongoose.model('Candidate', candidateSchema);
var Employer = mongoose.model('Employer', employerSchema);
