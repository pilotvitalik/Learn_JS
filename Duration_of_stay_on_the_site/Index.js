let body = document.querySelector("body");
startdate = new Date();
clockStart = startdate.getTime();
function initStopwatch() {
  let thisTime = new Date(); 
  return (thisTime.getTime() - clockStart)/1000; 
}
function getSecs() {
  let tSecs 	= Math.round(initStopwatch());
  let iSecs = tSecs % 60;
  let iMins = Math.round((tSecs-30)/60);
  let sSecs ="" + ((iSecs > 9) ? iSecs : "0" + iSecs);
  let sMins ="" + ((iMins > 9) ? iMins : "0" + iMins);
  document.getElementById("timer-counter").innerHTML = sMins+":"+sSecs;
  setTimeout('getSecs()', 1000); 
}

body.addEventListener("onload",getSecs());