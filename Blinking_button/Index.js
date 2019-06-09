/*
//Исп. палитра цветов Hsl. В этом варианте меняются только первые значения, остальные остаются без изм.
В HTML  необходимо указать цвет в палитре Hsl
let arrColor = ["0", "30", "60", "120", "195", "240", "315", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
function mouseOut() {
  for (i = 0; i <= 6; i++)
    setTimeout ('document.blinkbutton.button.style.background = "hsl('+arrColor[6-i]+', 100%, 50%)";', i * 1000);
}// i*1000 - скорость изм. цвета в млсек
function mouseOver() {
  for (i = 0; i <= 6; i++)	
    setTimeout ('document.blinkbutton.button.style.background = "hsl('+arrColor[i]+', 100%, 50%)";', i * 1000);
}*/

/*let arrColorR = ["255", "255", "255", "0", "0", "0", "128"];
let arrColorG = ["51", "165", "255", "128", "0", "0", "0"];
let arrColorB = ["51", "0", "0", "0", "255", "139", "128"];
function mouseOut() {
  for (i = 0; i <= 6; i++)
    setTimeout ('document.blinkbutton.button.style.background = "rgb('+arrColorR[6-i]+', '+arrColorG[6-i]+', '+arrColorB[6-i]+')";', i * 1000);
}// i*1000 - скорость изм. цвета в млсек
function mouseOver() {
  for (i = 0; i <= 6; i++)	
    setTimeout ('document.blinkbutton.button.style.background = "rgb('+arrColorR[i]+', '+arrColorG[i]+', '+arrColorB[i]+')";', i * 1000);
}*/


//Исп. палитра HEX
let arrColor = ["FF3333", "FF9933", "FFFF33", "33FF33", "33CCFF", "3370FF", "7600D1"];
function mouseOut() {
  for (i = 0; i <= 6; i++)
    setTimeout ('document.blinkbutton.button.style.background = "#'+arrColor[6-i]+'";', i * 1000);
}// i*1000 - скорость изм. цвета в млсек
function mouseOver() {
  for (i = 0; i <= 6; i++)	
    setTimeout ('document.blinkbutton.button.style.background = "#'+arrColor[i]+'";', i * 1000);
}
