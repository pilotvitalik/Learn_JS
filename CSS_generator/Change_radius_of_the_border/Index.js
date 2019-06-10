function fun1(){
//8.В функции объявить переменную с помощью поиска для каждого id для 
// возможности принимать значение
	let rtl=document.getElementById("rtl").value;
	let rtr=document.getElementById("rtr").value;
	let rbr=document.getElementById("rbr").value;
	let rbl=document.getElementById("rbl").value;
	let ttl=document.getElementById("ttl");
	let ttr=document.getElementById("ttr");
	let tbr=document.getElementById("tbr");
	let tbl=document.getElementById("tbl");

	let block=document.getElementById("block");
//9. передать значение из ползунков в текстовое поле
	ttl.value=rtl;
	ttr.value=rtr;
	tbr.value=rbr;
	tbl.value=rbl;

//10. Задать границам угла блока радиус скругления
	block.style.borderRadius=rtl+"px "+rtr+"px "+rbr+"px "+rbl+"px ";
}
//12. АЛЬТЕРНАТИВА
//Подписка на событие
rtl.oninput=fun1;
rtr.oninput=fun1;
rbr.oninput=fun1;
rbl.oninput=fun1;