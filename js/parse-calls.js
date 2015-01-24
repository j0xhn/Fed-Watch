$(document).ready(function(){
	$('#example').DataTable();
});

var currentUser = Parse.User.current();
if (currentUser) {
    console.log(currentUser)
} else {
    // show the signup or login page
    alert('not logged in')
}



var fbLogin = function(){
	debugger;
	Parse.FacebookUtils.logIn(null, {
		success: function(user) {
			if (!user.existed()) {
				debugger;
				alert("User signed up and logged in through Facebook!");
			} else {
				debugger;
				alert("User logged in through Facebook!");
			}
		},
		error: function(user, error) {
			alert("User cancelled the Facebook login or did not fully authorize.");
		}
	}); 
}



var fbAppId = '1563097570598524';





