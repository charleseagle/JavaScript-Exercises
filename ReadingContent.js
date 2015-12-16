function changeStyle(){
	
var paragraph = document.getElementsByClassName("para");

paragraph[2].innerHTML = paragraph[0].innerHTML + paragraph[1].innerHTML;

paragraph[0].innerHTML = "";
paragraph[1].innerHTML = "";	
}