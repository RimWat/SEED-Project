
/* Login */
	document.getElementById("logSign-in").addEventListener("click", function(){
		$.get( "https://api.myjson.com/bins/u48ft", function( data ) {
			console.log( document.getElementById("username").value + ", " + data.username + ", " + document.getElementById("password").value + ", " + data.password
			);
			if((document.getElementById("username").value) == data.username 
				&& (document.getElementById("password").value) == data.password){
					console.log("Logged In");
					window.location.href = "Welcome.html?" + data.username;
				} else {
					console.log("Wrong password");
				}
		$( "Username" )
		.append( "Username: " + data.username );
		$( "Password" )
		.append( "Password: " + data.password );
		}, "json" );
	});