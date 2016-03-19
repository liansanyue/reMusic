
$("button").click(function(e){

    var namevale=$("input[name=username]").val();
    var passwordvalue=$("input[name=password]").val();
    $.ajax({
        type: "post",
        url: "./login.php",
        data: {
            name:namevale ,
            password: passwordvalue

        },
        dataType: "text",
        success: function(isLogin) {

            if(isLogin==1){
                sessionStorage.setItem("login",namevale);
                location.href="music.html";
                parent.document.location.hash="#music"
            }
            else{
                alert("用户名或密码错误！")
            }

        },
        error: function() {
            alert("error");
        }

    });

})
