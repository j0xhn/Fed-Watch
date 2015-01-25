$(document).ready(function(){
	$('#example').DataTable();

	var currentUser = Parse.User.current();
	if (currentUser) {
		window.userImg = 'https://graph.facebook.com/' + currentUser.attributes.authData.facebook.id + '/picture?width=150&height=150'
		$('.login').replaceWith('<img class="profile-pic" src=' + userImg + '>');
	} else {
    // show the signup or login page
    alert('not logged in')
}

});





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





