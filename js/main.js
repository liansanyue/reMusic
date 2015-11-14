$(".img").each(function(index) {

    $(this).mouseover(function() {
        $(this).find("i").css({
            "display": "inline-block",
            "color": "#fff"
        });

    });

    $(this).mouseout(function() {
        $(this).find("i").css("display", "none");

    });
});

$("#left_recommend .mname").each(function(index) {
    var snamelength = $(this).text().length;
    if (snamelength > 12) {
        var newsname = $(this).text().substr(0, snamelength) + '...';
        $(this).text(newsname);
    }
});

/*图片轮播效果----------------------------------------------------------------------*/
var liveflag = 1,
    preflag = 0;
var playimg = $("#playimg");

function change(num) {

    playimg.attr("src", "img/" + (num) + ".jpg");
    liveflag = num + 1;
    $(".range").each(function(index) {
        if (index == num) {
            $(this).css({
                "background-color": "#eee"
            });
        } else {
            $(this).css({
                "background-color": "rgba(161, 161, 161, 0.5)"
            });
        }
    });
}

/*图片前后切换*/
$("#prev").click(function() {
    previmg();
})

$("#next").click(function() {
    nextimg();
})


function nextimg() {
    if (liveflag == 8) {
        liveflag = 0;
    }

    playimg.attr("src", "img/" + (liveflag) + ".jpg");


    $(".range:eq(" + preflag + ")").css("background-color", "rgba(161, 161, 161, 0.5)");
    $(".range:eq(" + liveflag + ")").css("background-color", "#eee");
    preflag = liveflag;
    liveflag++;

}

function previmg() {
    if (liveflag == -1) {
        liveflag = 7;
    }
    playimg.attr("src", "img/" + (liveflag) + ".jpg");

    $(".range:eq(" + preflag + ")").css("background-color", "rgba(161, 161, 161, 0.5)");
    $(".range:eq(" + liveflag + ")").css("background-color", "#eee");
    preflag = liveflag;
    liveflag--;

}
/*定时*/
var imgplay = $("#left_imgplay");
var play = setInterval(function() {
    nextimg();
}, 2000);
$("#left_imgplay").mouseover(function() {
    clearInterval(play);
});

$("#left_imgplay").mouseout(function() {
    play = setInterval(function() {
        nextimg();
    }, 2000);
});
/*图片轮播效果----------------------------------------------------------------------*/
/*导航栏*/
function show(num) {

    $(".nav_list:eq(" + num + ")").css({
        "display": "",
        "position": "absolute",
        "left": 238 + num * 110 + "px"
    });
    $(".nav_list").each(function(index) {

        if (index != num) {

            $(".nav_list:eq(" + index + ")").css({
                "display": "none"
            });
        }
    })
}
