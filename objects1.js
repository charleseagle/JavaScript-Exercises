var orc = {
	hair: "green",
	age: 26,
	stomachFull: true,
}
orc.hair = 1;
orc.hair2 = "red";
delete orc.hair2;
orc.hair2;

document.write(orc.hair2);