
document.getElementById("register").addEventListener("click", function(){
console.log(document.getElementById("password").value + ", " + document.getElementById("confirmPassword").value)	
	if((document.getElementById("password").value) == (document.getElementById("confirmPassword").value)){
		console.log("Invalid Password");
		window.location.href = "FlashCards.html?" + ("confirmPassword").value;
	}
});