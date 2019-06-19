let tst=document.getElementsByTagName("h4");
tst[0].addEventListener("click",function(){
    obj = document.getElementById("ans1");
    if (obj.style.display!=="block") obj.style.display="block";
    else obj.style.display="none";
    });

tst[1].addEventListener("click",function(){
    obj = document.getElementById("ans2");
    if (obj.style.display!=="block") obj.style.display="block";
    else obj.style.display="none";
    });