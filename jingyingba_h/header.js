$("#header .position").click(function( ev ){
  $("#header .allCity").css({display:"block"});
  $("#header i").css({display:"block"});
  $("#header .position p").css({background:"url('img/ico_bg.png') 0 -593px no-repeat"});
  ev.stopPropagation();  //取消事件下沉时不同时触发document的事件
});
$(document).unbind().click(function(){
  $("#header .allCity").css({display:"none"});
  $("#header i").css({display:"none"});
  $("#header .position p").css({background:"url('img/ico_bg.png') 0 -573px no-repeat"});
});
for(var i = 0; i < $("#header .allCity li").length; i ++){
  num(i);
  function num(m){
    $("#header .allCity li").eq(m).click(function(){
      $("#header .allCity li img").removeClass("selected");
      $(this).find('img').addClass("selected");
      $("#header .position span").text($(this).find('span').text());
      window.location.hash = "city="+m;
      console.log(m);
    });
  }
};
var winhash = window.location.hash.split("=")[1];
if(winhash == 0){
  $("#header .position span").text($("#header .allCity li span").eq(0).text());
}else if(winhash == 1){
  $("#header .position span").text($("#header .allCity li span").eq(1).text());
}else if(winhash == 2){
  $("#header .position span").text($("#header .allCity li span").eq(2).text());
}else if(winhash == 3){
  $("#header .position span").text($("#header .allCity li span").eq(3).text());
}else if(winhash == 4){
  $("#header .position span").text($("#header .allCity li span").eq(4).text());
}else if(winhash == 5){
  $("#header .position span").text($("#header .allCity li span").eq(5).text());
}else if(winhash == 6){
  $("#header .position span").text($("#header .allCity li span").eq(6).text());
}
for (var i = 0; i < $("#header .nav li").length; i++) {
  $("#header .nav li").eq(i).click(function(){
    $("#header .nav li").removeClass();
    $(this).addClass("colorGreen");
  });
}
$("#header .success").mousemove(function(){
  $("#header .setSuccess").css({display:'block'});
  $(this).mouseout(function(){
    $("#header .setSuccess").css({display:'none'});
  });
})
$("#header .setSuccess").mousemove(function(){
  $(this).css({display:"block"});
  $(this).mouseout(function(){
    $(this).css({display:'none'});
  });
})
$("#header .setSuccess li").eq(3).click(function(){
  window.sessionStorage.removeItem("name");
  // window.sessionStorage.removeItem("pwd");
  location.reload();
})
if(window.sessionStorage.length != 0){
  console.log("已登录");
  $("#header .success").css({display:"block"});
  $("#header .login").css({display:"none"});
}else{
    console.log("未登录");
   $("#header .success").css({display:"none"});
   $("#header .login").css({display:"block"});
}
$("#header .setSuccess li").eq(0).click(function(){
  window.location = "setting.html?1";
})
$("#header .setSuccess li").eq(1).click(function(){
  window.location = "setting.html?2";
})
$("#header .setSuccess li").eq(2).click(function(){
  window.location = "setting.html?3";
})
$("#header .nav li").eq(0).click(function(){
  // window.location = "setting.html?3";
})
