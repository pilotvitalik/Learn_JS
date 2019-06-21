  let url = "http://myrusakov.ru"; //Адрес Вашего сайта
  let title = "Как создать свой сайт"; //Название Вашего сайта
  function addFavorite(a) {
    try {
      window.external.AddFavorite(url, title);
    }
    catch (e) {
      try {
        window.sidebar.addPanel (title, url, "");
        }
      catch (e) {
        if (typeof(opera)=="object") {
          a.rel = "sidebar";
          a.title = title;
          a.url = url;
          return true;
        }
        else {
          alert("Нажмите Ctrl-D для добавления в избранное");
        }
      }
    }
    return false;
          }