var a,b,result;

function setValues()
{
	a=Number(document.getElementById("a").value);
	b=Number(document.getElementById("b").value);
}

function sum()
{
	setValues();
	result = a+b;
	alert("The operation is equal to " +result);
}

function subtract()
{
	setValues();
	result = a-b;
	alert("The operation is equal to " +result);
}

function multiply()
{
	setValues();
	result = a*b;
	alert("The operation is equal to " +result);
}

function divide()
{
	setValues();
	result = a/b;
	alert("The operation is equal to " +result);
}


