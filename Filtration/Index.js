//4. Объявляем переменные для основных тегов: input, ul и li. Т.к. тег li находится
// внутри тега ul, то для его поиска исп. другой формт записи
 let input=document.getElementById("myInput");
 let ul=document.getElementById("myUL");
 let li=ul.getElementsByTagName("li");
//5. Объявляем основную ф-ию
function myFunction(){
//6. Объявляем дополнительные переменные
	let filter, a, i;
	filter=input.value.toUpperCase();// получает занчение из вводимой информ. в поле input
//7. Сздаем цикл для поиска информации в списке
	for(i=0;i<li.length;i++){
		a=li[i].getElementsByTagName("a")[0];//переменная получает информ. по ссылке, начиная с индекса 
		//элемента равного 0
		if(a.innerHTML.toUpperCase().indexOf(filter)>-1){
			li[i].style.display="";
		}
		else{
			li[i].style.display= "none";
		}
	}
}