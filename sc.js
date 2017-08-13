var znak,a,b,c;
btn7.onclick = function(){
	document.getElementById("tx1").value += 7;
}
btn8.onclick = function(){
	document.getElementById("tx1").value += 8;
}
btn9.onclick = function(){
	document.getElementById("tx1").value += 9;
}
btn1.onclick = function(){
	document.getElementById("tx1").value += 1;
}
btn2.onclick = function(){
	document.getElementById("tx1").value += 2;
}
btn3.onclick = function(){
	document.getElementById("tx1").value += 3;
}
btn4.onclick = function(){
	document.getElementById("tx1").value += 4;
}
btn5.onclick = function(){
	document.getElementById("tx1").value += 5;
}
btn6.onclick = function(){
	document.getElementById("tx1").value += 6;
}
btn0.onclick = function(){
	document.getElementById("tx1").value += 0;
}
btnTac.onclick = function(){
	document.getElementById("tx1").value += ".";
}
btnPl.onclick = function ()
{
	znak = "+";
	a=Number(document.getElementById("tx1").value);
	document.getElementById("tx1").value = "";
}
btnOd.onclick = function ()
{
	znak = "-";
	a=Number(document.getElementById("tx1").value);
	document.getElementById("tx1").value = "";
}
btnMnoz.onclick = function (){
	znak = "*";
	a=Number(document.getElementById("tx1").value);
	document.getElementById("tx1").value = "";
}
btnDelj.onclick = function (){
	znak = "/";
	a=Number(document.getElementById("tx1").value);
	document.getElementById("tx1").value = "";
}
btnJed.onclick = function(){
	b= Number(document.getElementById("tx1").value);
	
	if(znak=="+")
	{
		c=a+b;
		document.getElementById("tx1").value = c;
	}
	else if(znak=="-")
	{
		c=a-b;
		document.getElementById("tx1").value = c;
	}
	else if(znak=="*")
	{
		c=a*b;
		document.getElementById("tx1").value = c;
	}
	else if(znak=="/")
	{
		if(b==0){
			alert("Deljenje nulom je zabranjeno");
			obrisiSve();
		}
		//document.getElementById("tx1").value = c;
	}
}
Brisi.onclick = function()
{
	obrisiSve();
}
function obrisiSve()
{
	document.getElementById("tx1").value = "";
	znak ="";
	a="";
	b="";
	c="";
}