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

textsplit($("#left_recommend .mname"));

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
/*-----------切换不同语言音乐-----------------*/
$(function() {
    recommend(1);
})

function recommend(type) {
    $.ajax({
        type: "post",
        url: "./get.php",
        data: {
            type: type
        },
        dataType: "json",
        success: function(msg) {
            $(".language:eq(" + (type - 1) + ")").css({
                "color": "black"
            });
            $(".language:not(.language:eq(" + (type - 1) + "))").css({
                "color": "#979696"
            });
            for (var i = 0; i < msg.length; i++) {
                var arr = msg[i];
                $("#recommend_left .mname:eq(" + i + ")").text(arr["musicname"]);
                $("#recommend_left .msinger:eq(" + i + ")").html("&nbsp;&nbsp;-&nbsp;&nbsp;"+arr["singername"]);

            };
            textsplit($("#recommend_left .mname"));
        },
        error: function() {
            alert("error");
        }

    });

}
$(".language").each(function(index) {
    if (index == 0) {
        $(this).click(function() {
            recommend(1);
        })
    } else if (index == 1) {
        $(this).click(function() {
            recommend(2);
        })
    } else {
        $(this).click(function() {
            recommend(3);
        })
    }



})
/*文字超出切割*/
function textsplit($textset){
    $textset.each(function(index) {
                var snamelength = $(this).text().length;
                console.log(snamelength)
                if (snamelength > 7 ) {
                    var newsname = $(this).text().substr(0, 15) + '...';
                    $(this).text(newsname);
                }
            });
}