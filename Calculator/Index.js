//5. Добавляем ф-ии для каждого действия
function plus(){
//6. Внутри ф-ии объявляем переменные для каждого вводимого числа, а также для результата.
//Чтобы вводимое число становилось сразу числом для ПК, доб. value
	let result;
	let num1=document.getElementById("n1").value;
	let num2=document.getElementById("n2").value;
//7. Доб. ф-ию преобразующую строку в число
	num1=parseInt(num1);
	num2=parseInt(num2);
//8. Объявляем переменную для получения математического действия
	result=num1+num2;
//9. Вводим полученное значение в поле для ответа с помощью метода innerHTML
	document.getElementById("out").innerHTML=result;
}
let pl=document.getElementById("plus");
pl.onclick=plus;

function minus(){
	let result;
	let num1=document.getElementById("n1").value;
	let num2=document.getElementById("n2").value;

	num1=parseInt(num1);
	num2=parseInt(num2);

	result=num1-num2;

	document.getElementById("out").innerHTML=result;
}
function multiply(){
	let result;
	let num1=document.getElementById("n1").value;
	let num2=document.getElementById("n2").value;

	num1=parseInt(num1);
	num2=parseInt(num2);

	result=num1*num2;

	document.getElementById("out").innerHTML=result;
}
function share(){
	let result;
	let num1=document.getElementById("n1").value;
	let num2=document.getElementById("n2").value;

	num1=parseInt(num1);
	num2=parseInt(num2);

	result=num1/num2;

	document.getElementById("out").innerHTML=result;
}