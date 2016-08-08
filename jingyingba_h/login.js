var iphone = /^1[3578]\d{9}$/;  //手机验证
var pwd = /^\d{6,}$/;  //验证密码
var arr = ['1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f','g','h','i','g','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var save = true;  //检查记住我是否勾选
var treaty = true;
console.log();
//注册页面验证网站条款是否勾选
$("#hh_content .content2 .save input").click(function(){
  if(treaty){
    treaty = false;
  }else{
    treaty = true;
  }
  if(!treaty){
    $("#hh_content .content2 .saveError2").html("<em class='fl'></em>请阅读网站条款");
  }else{
    $("#hh_content .content2 .saveError2").html("");
  }
});
function randFN(min,max){
  return parseInt(Math.random()*(max-min+1)+min);
}
//生成随机数拼出验证码
var num1 = randFN(0,35);
var num2 = randFN(0,35);
var num3 = randFN(0,35);
var num4 = randFN(0,35);
var code = arr[num1]+arr[num2]+arr[num3]+arr[num4];
$("#hh_content .content1 .img").html(code);
$("#hh_content .content1 .img").click(function(){
  num1 = randFN(0,35);
  num2 = randFN(0,35);
  num3 = randFN(0,35);
  num4 = randFN(0,35);
  code = arr[num1]+arr[num2]+arr[num3]+arr[num4];
  $(this).html(code);
});
//取消选中文字的默认事件
$("#hh_content .content1 .img").on("selectstart",function(){
  return false;
})
//登录页面验证手机号
$("#hh_content .content1 .account input").blur(function(){
  var str = this.value;
  if(str == ''){
    $("#hh_content .content1 .accountError1").html("<em class='fl'></em>请输入手机号");
  }else if(!iphone.test(str)){
    $("#hh_content .content1 .accountError1").html("<em class='fl'></em>手机号格式不正确");
  }
  $(this).focus(function(){
    $("#hh_content .content1 .accountError1").html("");
  });
});
//登录页面验证密码
$("#hh_content .content1 .pwd input").blur(function(){
  var str = this.value;
  if(str == ''){
    $("#hh_content .content1 .pwdError1").html("<em class='fl'></em>请输入密码");
  }else if(str.length < 6){
    $("#hh_content .content1 .pwdError1").html("<em class='fl'></em>密码太短");
  }else if(!pwd.test(str)){
    $("#hh_content .content1 .pwdError1").html("<em class='fl'></em>密码格式不正确");
  }
  $(this).focus(function(){
    $("#hh_content .content1 .pwdError1").html("");
  });
});
//登录页面验证验证码
$("#hh_content .content1 .code input").blur(function(){
  if(this.value == ''){
    $("#hh_content .content1 .codeError1").html("<em class='fl'></em>请填写验证码");
  }else if(this.value != $("#hh_content .content1 .img").html()){
    $("#hh_content .content1 .codeError1").html("<em class='fl'></em>验证码错误");
  }
  $(this).focus(function(){
    $("#hh_content .content1 .codeError1").html("");
  });
});
//注册页面验证手机号
$("#hh_content .content2 .account input").blur(function(){
  var str = this.value;
  if(str == ''){
    $("#hh_content .content2 .accountError2").html("<em class='fl'></em>请输入手机号");
  }else if(!iphone.test(str)){
    $("#hh_content .content2 .accountError2").html("<em class='fl'></em>手机号格式不正确");
  }
  $(this).focus(function(){
    $("#hh_content .content2 .accountError2").html("");
  });
});
//注册页面验证密码
$("#hh_content .content2 .pwd1 input").blur(function(){
  var str = this.value;
  if(str == ''){
    $("#hh_content .content2 .pwdError12").html("<em class='fl'></em>请输入密码");
  }else if(str.length < 6){
    $("#hh_content .content2 .pwdError12").html("<em class='fl'></em>密码太短");
  }else if(!pwd.test(str)){
    $("#hh_content .content2 .pwdError12").html("<em class='fl'></em>密码格式不正确");
  }
  $(this).focus(function(){
    $("#hh_content .content2 .pwdError12").html("");
  });
});
//注册页面验证重复密码
$("#hh_content .content2 .pwd2 input").blur(function(){
  var str = this.value;
  var str1 = $("#hh_content .content2 .pwd1 input")[0].value;
  if(str != str1 || str == ''){
    $("#hh_content .content2 .pwdError22").html("<em class='fl'></em>两次输入密码不一致");
  }
  $(this).focus(function(){
    $("#hh_content .content2 .pwdError22").html("");
  });
});
//记住我的点击事件
$("#hh_content .content1 .save input").click(function(){
  if(save){
    save = false;
  }else{
    save = true;
  }
});
//登录的点击事件
$("#hh_content .content1 .confirm").click(function(){
  var name = $("#hh_content .content1 .account input")[0].value;
  var pwd = $("#hh_content .content1 .pwd input")[0].value;
  if($("#hh_content .content1 .accountError1").html() == '' && $("#hh_content .content1 .pwdError1").html() == '' && $("#hh_content .content1 .codeError1").html() == '' && name != '' && pwd != '' && $("#hh_content .content1 .code input")[0].value != ''){
    $.ajax({
      url : "check.php",
      data : {
        name : name,
        password : pwd
      },
      success : function(res){
        if(res == "success"){
          if(save){
            Cookie.setCookie(name,pwd,"h1");
          }
          window.sessionStorage.name = name;
          // window.sessionStorage.pwd = pwd;
          $("#hh_content .popup").css({display:"block"});
          $("#hh_content .popup span").html("登录成功，正在跳转...");
          var time = 0;
          var timer = setInterval(function(){
            time ++;
            if(time >= 3){
              $("#hh_content .popup").css({display:"none"});
              $("#hh_content .popup span").html();
              clearInterval(timer);
              window.location = "index.html";
            }
          },500);
        }else{
          $("#hh_content .popup").css({display:"block"});
          $("#hh_content .popup span").html("登录失败，请检查用户名密码");
          var time = 0;
          var timer = setInterval(function(){
            time ++;
            if(time >= 3){
              $("#hh_content .popup").css({display:"none"});
              $("#hh_content .popup span").html();
              clearInterval(timer);
            }
          },500);
        }
      }
    });
  }
});

//注册的点击事件
$("#hh_content .content2 .submit").click(function(){
  var name = $("#hh_content .content2 .account input")[0].value;
  var pwd = $("#hh_content .content2 .pwd1 input")[0].value;

  if($("#hh_content .content2 .accountError2").html() == '' && $("#hh_content .content2 .pwdError12").html() == '' && $("#hh_content .content2 .pwdError22").html() == '' && name != '' && pwd != '' && $("#hh_content .content2 .pwd2 input")[0].val != '' && treaty){
    $.ajax({
      url: "add.php",
      data: {
        name: name,
        password: pwd
      },
      success: function(res){
        if(res == 'success'){
          $("#hh_content .popup").css({display:"block"});
          $("#hh_content .popup span").html("注册成功，正在跳转...");
          var time = 0;
          var timer = setInterval(function(){
            time ++;
            if(time >= 3){
              $("#hh_content .popup").css({display:"none"});
              $("#hh_content .popup span").html();
              clearInterval(timer);
              window.location.search = "1";
            }
          },500);
        }else{
          console.log('');
          $("#hh_content .popup").css({display:"block"});
          $("#hh_content .popup span").html("注册失败，用户名已存在");
          var time = 0;
          var timer = setInterval(function(){
            time ++;
            if(time >= 3){
              $("#hh_content .popup").css({display:"none"});
              $("#hh_content .popup span").html();
              clearInterval(timer);
              window.location.search = "2";
            }
          },500);
        }
      }
    });
  }
});
//获取cookie
var user = Cookie.getCookie();
for (var x in user) {
  if(x != ''){
    $("#hh_content .content1 .account input")[0].value = x;
    $("#hh_content .content1 .pwd input")[0].value = user[x];
    console.log("储存cookie");
  }
}
//检测用户点击哪个按钮进入的页面
if(window.location.search.split("?")[1] == 1){
  $("#hh_content .btn span").eq(0).addClass("btnSpan");
  $("#hh_content .btn span").eq(1).removeClass("btnSpan");
  $("#hh_content .login .content1").css({display:"block"});
  $("#hh_content .login .content2").css({display:"none"});
}else if(window.location.search.split("?")[1] == 2){
  $("#hh_content .btn span").eq(1).addClass("btnSpan")
  $("#hh_content .btn span").eq(0).removeClass("btnSpan");
  $("#hh_content .login .content1").css({display:"none"});
  $("#hh_content .login .content2").css({display:"block"});
}
//注册条约的跳转
$("#hh_content .content2 .save span").click(function(){
  window.location = "index.html?6";
});
//登录页面
$("#hh_content .btn span").eq(0).click(function(){
  $(this).addClass("btnSpan");
  $("#hh_content .btn span").eq(1).removeClass("btnSpan");
  $("#hh_content .login .content1").css({display:"block"});
  $("#hh_content .login .content2").css({display:"none"});
});
//注册页面
$("#hh_content .btn span").eq(1).click(function(){
  $(this).addClass("btnSpan");
  $("#hh_content .btn span").eq(0).removeClass("btnSpan");
  $("#hh_content .login .content1").css({display:"none"});
  $("#hh_content .login .content2").css({display:"block"});
});
