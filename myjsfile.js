/*
console.log("Hello World!!!");
var firstname="John";
console.log(firstname);
var fullage=true;
console.log(fullage);
alert("Who is "+ firstname);
var lastname =prompt("Whats is his last name");
console.log(firstname + " " + lastname);

*/
var dice;
var p=1;
function myFunction(){

	if(p==1)
	{dice=Math.floor(Math.random()*6)+1;	
	document.querySelector('#tf1').textContent=dice;
	p=0}
	
else
{dice=Math.floor(Math.random()*6)+1;	
		document.querySelector('#tf2').textContent=dice;
		 p=1;
		}
}




/*var number, dice,active=0;

number =6;
Document.querySelector("#d");


	
	
dice=Math.floor(Math.random()*6)+1;

	{
	
	document.querySelector('#tf1').textContent=dice;
}*/