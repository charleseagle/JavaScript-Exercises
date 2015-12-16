function newParagraph(){
	//This creates a heading
	var elementH = document.createElement("h2");
	var main = document.getElementById("main");
	main.appendChild(elementH);
	var textH = document.createTextNode("The Battle of Gettysburg");
	elementH.appendChild(textH);
	
	//This creates a paragraph
var element = document.createElement("p");

//var main = document.getElementById("main");

main.appendChild(element);

var text = document.createTextNode("The Battle of Gettysburg (local Listeni/ˈɡɛtɨsbɜrɡ/, with an /s/ sound)[6] was fought July 1–3, 1863, in and around the town of Gettysburg, Pennsylvania, by Union and Confederate forces during the American Civil War. The battle involved the largest number of casualties of the entire war[7] and is often described as the war's turning point.[8] Union Maj. Gen. George Meade's Army of the Potomac defeated attacks by Confederate Gen. Robert E. Lee's Army of Northern Virginia, ending Lee's attempt to invade the North.");

element.appendChild(text);

var pAttribute = document.createAttribute("id");
pAttribute.value = "test";
element.setAttributeNode(pAttribute);
}

function removeHeader(){
	var elementHR = document.getElementsByTagName("h2")[2];
	
	var parent = elementHR.parentNode;
	parent.removeChild(elementHR);
	
	var elementP = document.getElementsByTagName("p")[2];
	
	parent.removeChild(elementP);
}