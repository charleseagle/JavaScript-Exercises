function validateTextbox (){
	var box = document.getElementById("name");
	var box1 = document.getElementById("address");
	
	if (box.value.length < 5 || box1.value.length < 5){
		alert("Please enter at least 5 characters.");
		box.focus();
		box.style.border = "solid 3px red";
		return false;
	}
	
/* 		if (box.value == "" || box1.value == ""){
		alert("The field cannot be blank.");
		return false;
	}
	 */
}