//4. Осуществляем поиск ползунка по id
let rng=document.getElementById("r1");
//5. Объявляем переменную со вторым input с помощью поиска. Будет получать 
//значение для input
let i1=document.getElementById("i1");
//6. Создаем функцию, которая будет подгружать значения в параграф
//   с помощью св-ва value. 
function fun1(){
	i1.value=rng.value;
}
//8. АЛЬТЕРНАТИВА
//   Вызвать событие можно через JS, исп. уже имеющиеся данные
rng.oninput=fun1;
// Событие oninput срабатывает при любом изменении в элементе формы,
// в т.ч. при вводе нового символа и т.п.
// Событие onchange срабатывает при потере фокуса в элементе