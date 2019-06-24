 //При необходимости можно менять свойства окрывшегося окна

 let open=document.getElementsByTagName("a");

  function go() {
    window.open("https://yandex.ru/","MyWin", "menubar=yes,width=1024,height=768");
  }

  open[0].onclick = go;