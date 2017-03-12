var db = require('/db.js');

$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();

    $("#candidateJoin").on("click", function() {

    	
		//Capture user inputs and store into variables
		var firstName = "";
		var lastName = "";
		var email = "";

		firstName = $('#first_name').val().trim(); 
		lastName = $('#last_name').val().trim(); 
		email = $('#email').val().trim(); 

		var newCandidate = new db.candidate({
			firstName: firstName,
			lastName: lastName,
			email: email
		});

		newCandidate.save(function (err) {if (err) console.log ('Error on save!')});
	});

	// database.ref().push({
	// 			firstName: firstName,
	// 			lastName: lastName,
	// 			password: password,
	// 			email: email,
	// 			dob: dob
	// 		});

	// database.ref().on('child_added', function(childsnapshot) {
	// 	console.log(childsnapshot.val().firstName);
	// });
});

 $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });

// var config = {
//     apiKey: "AIzaSyDGG3MAFBRUusldVQxLxwJC-n8ysXfz2Jg",
//     authDomain: "interviewiq-landing-page.firebaseapp.com",
//     databaseURL: "https://interviewiq-landing-page.firebaseio.com",
//     storageBucket: "interviewiq-landing-page.appspot.com",
//     messagingSenderId: "567023610328"
//   };
//   firebase.initializeApp(config);

// var database = firebase.database();





