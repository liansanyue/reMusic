$(function(){
	  recommend("count",1,8,true,mvfunction);
})
$("#left_mv .language").each(function(index) {
   switch(index){
    case 0: 
    $(this).click(function(){ recommend("count",1,8,true,mvfunction);})
     
      break;
    case 1:
    $(this).click(function(){ recommend("count",2,8,true,mvfunction);})
    
      break;
    case 2:
    $(this).click(function(){ recommend("count",3,8,true,mvfunction);})
    
    break;  
    case 3:
    $(this).click(function(){ recommend("count",4,8,true,mvfunction);})
   
    break; 
     case 4:
    $(this).click(function(){ recommend("count",5,8,true,mvfunction);})
 
      break;

   }

   })
function mvfunction(type,msg){
    $("#left_mv .language:eq(" + (type - 1) + ")").css({
                "color": "black"
            });
            $(".language:not(.language:eq(" + (type - 1) + "))").css({
                "color": "#979696"
            });
            for (var i = 0; i < msg.length; i++) {
                var arr = msg[i];
               
                $("#left_mv .sname:eq(" + i + ")").html(arr["mvname"]+"&nbsp;&nbsp;-&nbsp;&nbsp;"+arr["mvsinger"]);
                
                  $("#left_mv .sname:eq(" + i + ")").attr("title",arr["mvname"]+"-"+arr["mvsinger"]);
                $("#left_mv .fa-play:eq(" + i + ")").html(arr["count"]);
                $("#left_mv .mvpublish:eq(" + i + ")").html(arr["publish"]);
                $("#left_mv img:eq(" + i + ")").attr("src","img/"+arr["imgurl"]);


            };
           
  

 }