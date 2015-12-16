var orc = {
	hair: "green",
	age: 26,
	stomachFull: true,
	eat: function(){
		document.write("YUM YUM!");
	}
}
orc.stomachFull = false;

if (orc.stomachFull == true){
	orc.eat();
}
else {
	document.write("not eating");
}