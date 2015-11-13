var imgplay = document.getElementById("left_imgplay");
var playimg = imgplay.getElementsByTagName("img")[0];
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var list = document.getElementsByClassName("nav_list");
var alist = document.getElementsByClassName("range");
var imgas = document.getElementsByClassName("img");
var img_is = document.getElementsByClassName("playicon");
var sname = document.getElementById("left_recommend").getElementsByClassName("ellipsis mname");

  
(function() {

    for (var i = 0; i < imgas.length; i++) {
        (function(i) {
            imgas[i].onmouseover = function() {

                img_is[i].style.display = "inline-block";
                img_is[i].style.color = "#fff";

            }
        })(i);
        (function(i) {
            imgas[i].onmouseout = function() {

                img_is[i].style.display = "none";
            }
        })(i);
    }


})()

for(var i=0;i<sname.length;i++){
  
 var snamelength = sname[i].innerHTML.length; 
    if(snamelength>12){
        var newsname= sname[i].innerHTML.substr(0,snamelength)+'...';
        sname[i].innerHTML = newsname;
    }
}

var liveflag = 1,
    preflag = 0;

function change(num) {

    playimg.src = "img/" + (num) + ".jpg";
    liveflag = num + 1;
    for (var i = 0; i < alist.length; i++) {
        if (i == num) {
            alist[i].style.backgroundColor = "#eee";
        } else {
            alist[i].style.backgroundColor = "rgba(161, 161, 161, 0.5)";
        }
    }

}

prev.onclick = function() {

    previmg();


}

next.onclick = function() {

    nextimg();

}

function nextimg() {
    if (liveflag == 8) {
        liveflag = 0;
    }


    playimg.src = "img/" + (liveflag) + ".jpg";
    alist[preflag].style.backgroundColor = "rgba(161, 161, 161, 0.5)";
    alist[liveflag].style.backgroundColor = "#eee";
    preflag = liveflag;
    liveflag++;

}

function previmg() {
    if (liveflag == -1) {
        liveflag = 7;
    }

    playimg.src = "img/" + (liveflag) + ".jpg";
    alist[preflag].style.backgroundColor = "rgba(161, 161, 161, 0.5)";
    alist[liveflag].style.backgroundColor = "#eee";
    preflag = liveflag;
    liveflag--;

}

function show(num) {
    list[num].style.display = "";
    list[num].style.position = "absolute";
    list[num].style.left = 238 + num * 110 + "px";
    for (var i = 0; i < list.length; i++) {
        if (i != num) {
            list[i].style.display = "none";
            list[i].style.paddingLeft = "";
        }
    }
}
var play = setInterval(function() {
    nextimg();
}, 2000);
imgplay.onmouseover = function() {
    clearInterval(play);
}

imgplay.onmouseout = function() {
    play = setInterval(function() {
        nextimg();
    }, 2000);
}
