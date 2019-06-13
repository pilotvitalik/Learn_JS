let default_color;
let change = document.querySelector("input");

change.addEventListener("mouseover", function( event ) {   
  default_color = document.changecolorbutton.but.style.background;
  event.target.style.background = "red";
})

change.addEventListener("mouseout", function( event ) {   
  event.target.style.background = default_color;
})