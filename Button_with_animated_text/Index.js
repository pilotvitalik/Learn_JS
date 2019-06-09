let bod = document.querySelector("body");
let timerID = 0;
let timerRunning = false;
let charNo = 0;
let charMax = 0;
let textLine = "Michael Rusakov - Personal Web Site"; //Текст на кнопке
let urlLine = "http://www.myrusakov.ru"; //Адрес перехода после нажатия
function startShow() {
  stopShow();
  showLine();
  timerRunning = true;
}
function stopShow() {
  if (timerRunning) {
    clearTimeout(timerID);
    timerRunning = false;
  }
}
function showLine() {
  charMax = textLine.length;
  if (charNo <= charMax) {
    document.animationbutton.but.value = textLine.substring(0, charNo);
    document.animationbutton.but.style.color = "red";
    charNo++;
    timerID = setTimeout("showLine()", 100);
  }
  else {
    charNo = 0;
    timerID = setTimeout("showLine()", 3000);
  }
}
function gotoURL() {
  location.href = urlLine;
}
bod.addEventListener("onload",startShow(),false);