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
    recommend("publish",1,14,false,recommendleft);
    recommend("count",null,14,false,recommendright);

})

function recommend(order,type,num,img,fun) {
    $.ajax({
        type: "post",
        url: "./get.php",
        data: {
            type: type,
            order: order,
            num:num,
            img:img
        },
        dataType: "json",
        success: function(msg) {
            fun(type,msg);

        },
        error: function() {
            alert("error");
        }

    });

}
$("#recommend_left .language").each(function(index) {
    if (index == 0) {
        $(this).click(function() {
            recommend("publish",1,14,false,recommendleft);
        })
    } else if (index == 1) {
        $(this).click(function() {
            recommend("publish",2,14,false,recommendleft);
        })
    } else {
        $(this).click(function() {
            recommend("publish",3,14,false,recommendleft);
        })
    }

})

function recommendleft(type,msg){

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
        $("#recommend_left .mname:eq(" + i + ")").attr("title",arr["musicname"]);
        $("#recommend_left .msinger:eq(" + i + ")").attr("title",arr["singername"]);

    };
    textsplit($("#recommend_left .mname"));

}
function recommendright(type,msg){


    for (var i = 0; i < msg.length; i++) {
        var arr = msg[i];
        $("#recommend_right .mname:eq(" + i + ")").text(arr["musicname"]);
        $("#recommend_right .msinger:eq(" + i + ")").html("&nbsp;&nbsp;-&nbsp;&nbsp;"+arr["singername"]);
        $("#recommend_right .mname:eq(" + i + ")").attr("title",arr["musicname"]);
        $("#recommend_right .msinger:eq(" + i + ")").attr("title",arr["singername"]);

    };
    textsplit($("#recommend_right .mname"));

}
/*文字超出切割*/
function textsplit($textset){
    $textset.each(function(index) {
        var snamelength = $(this).text().length;

        if (snamelength > 7 ) {
            var newsname = $(this).text().substr(0, 15) + '...';
            $(this).text(newsname);
        }
    });
}
$("#logout").click(function(){
    sessionStorage.clear();//注销，清除
    location.reload();//重新加载页面
})
$("#header").click(function(e){
    var href=e.target.href.slice(e.target.href.lastIndexOf("/")+1,e.target.href.lastIndexOf("."))
    parent.document.location.hash="#"+href;


})
var musiclist=[];
var listindex=0;
var audio=parent.document.querySelector("audio");
var list=parent.document.querySelector("#list");
$("#right_sort .fa-play-circle").click(function (e) {
    musiclist=[];//歌曲列表
    $("#right_sort .rignt_muscicname").each(function(index){
        musiclist[index]=$(this).text();//获取歌名
    });
    musicchange(listindex);
    $(list).html(musiclist.join("<br/>"))
})
audio.addEventListener("ended",function(){
    //一首歌播完，播放列表的下一首，循环列表

    if(listindex<musiclist.length)
    {listindex++;}
    else
    {
        listindex=0;
    }
    musicchange(listindex);
})
function getlrc(str){
    var st;
//发起ajax请求，在后台读取歌词，并以字符串的形式返回
    $.ajax({

        type: "post",
        url: "./getlrc.php",
        data: {
            musicname: str
        },
        async:false,//同步
        dataType: "text",
        success: function(con) {

            if(con){
                st=con;
              //显示歌词
            }
            else{
                alert("发生错误！")
            }

        },
        error: function() {
            alert("error");
        }

    });
    return st
}

function showlrc(lrc){
   var result=[];
    var showelem= parent.document.querySelector(".lyrics");
    var lines=lrc.split('\n');//将歌词按行切成数组
    //用于匹配时间的正则表达式，匹配的结果类似[xx:xx.xx]
    var pattern = /\[\d{2}:\d{2}.\d{2}\]/g;

    //去掉不含时间的行
    while (!pattern.test(lines[0])) {
        lines = lines.slice(1);
    };
    if(!lines[lines.length-1].length){lines.pop();}
    lines.forEach(function(item,index,array){
        var time=item.match(pattern);//获得时间

        var lrcvalue=item.replace(pattern,"");//获取歌词
        //t [0]为分钟，t [1]为秒数

        time.forEach(function(v1, i1, a1) {
            //去掉时间里的中括号得到xx:xx.xx
            var t = v1.slice(1, -1).split(':');
            //将结果压入最终数组
            result.push([parseInt(t[0], 10) * 60 + parseFloat(t[1]), lrcvalue]);
        });

    })
    result.sort(function(a,b){
        return a[0]-b[0];
    });
    audio.ontimeupdate=function(e){
        for(var i= 0,l=result.length;i<l;i++){
            if (this.currentTime /*当前播放的时间*/ > result[i][0]) {
                //显示到页面
                if(i<l-2){
                $(showelem).html(result[i][1]+"<br/>"+result[i+1][1]+"<br/>"+result[i+2][1]) ;
                }
                else if(i==(l-2)){
                    $(showelem).html(result[i][1]+"<br/>"+result[i+1][1]) ;
                }
                else{
                    $(showelem).html(result[i][1]);
                }
            };
        }
    }

}
 parent.document.querySelector(".fa-forward").addEventListener("click",function(e){

    if(listindex<musiclist.length)
    {listindex++;}
    else
    {
        listindex=0;
    }
     musicchange(listindex);
})
parent.document.querySelector(".fa-backward").addEventListener("click",function(e){

    if(listindex>0)
    {listindex--;}
    else
    {
        listindex=musiclist.length-1;
    }
    musicchange(listindex);
})

function musicchange(index){
    var name="music/"+musiclist[listindex];

    $(audio).attr("src",name+".mp3");
    audio.play();
    showlrc(getlrc(name+".lrc"))//歌词
}