//我的订单的点击事件
for(var i=0; i<$("#hh_content .order ul li").length; i++){
  $("#hh_content .order ul li").eq(i).click(function(){
    $("#hh_content .order ul li").removeClass("inforLi");
    $(this).addClass("inforLi");
  });
}
//我是在校生信息的点击事件
$("#hh_content .students .btn").click(function(){
  var name = $("#hh_content .students .name input")[0].value;
  var school = $("#hh_content .students .school input")[0].value;
  var depar = $("#hh_content .students .depar input")[0].value;
  var profe = $("#hh_content .students .profe input")[0].value;
  var tcss = $("#hh_content .students .tcss input")[0].value;
  if(name == '' || school == '' || depar == '' || profe == '' || tcss == ''){
    $("#hh_content .students .prompt").css({color:'red'}).html("信息输入不完整，请重试");
  }else{
    $("#hh_content .students .prompt").css({color:'#333'}).html("<em></em>保存成功");
  }
});
//修改账号密码的验证
$("#hh_content .reset .btn").click(function(){
  var oldPwd = $("#hh_content .reset .oldPwd input")[0].value;
  var newPwd1 = $("#hh_content .reset .newPwd1 input")[0].value;
  var newPwd2 = $("#hh_content .reset .newPwd2 input")[0].value;
  var name = window.sessionStorage["name"];
  var pwd = /^\d{6,}$/;  //验证密码
  if(oldPwd == ''){
    $("#hh_content .reset .oldPwd p").html("<strong></strong>内容不能为空");
    $("#hh_content .reset .oldPwd input").css({border:"1px solid red"});
  }else{
    $("#hh_content .reset .oldPwd p").html("");
    $("#hh_content .reset .oldPwd input").css({border:"1px solid #666"});
  }
  if(newPwd1 == ''){
    $("#hh_content .reset .newPwd1 p").html("<strong></strong>内容不能为空");
    $("#hh_content .reset .newPwd1 input").css({border:"1px solid red"});
  }else{
    $("#hh_content .reset .newPwd1 p").html("");
    $("#hh_content .reset .newPwd1 input").css({border:"1px solid #666"});
  }
  if(newPwd2 == ''){
    $("#hh_content .reset .newPwd2 p").html("<strong></strong>内容不能为空");
    $("#hh_content .reset .newPwd2 input").css({border:"1px solid red"});
  }else{
    $("#hh_content .reset .newPwd2 p").html("");
    $("#hh_content .reset .newPwd2 input").css({border:"1px solid #666"});
  }
  if(oldPwd != '' && newPwd1 != '' && newPwd2 != ''){
    if(newPwd1 == newPwd2){
      if(pwd.test(newPwd1)){
        $.ajax({
          url : "setting.php",
          data : {
            name : name,
            oldPwd : oldPwd,
            newPwd : newPwd1
          },
          success : function(res){
            if(res == 'success'){
              $("#hh_content .reset .prompt").html("恭喜,修改成功!");
              $("#hh_content .reset .prompt").css({color:'green'});
              Cookie.remove();
              Cookie.setCookie(name,newPwd1,"h1");
              var time = 0;
              var timer = setInterval(function(){
                time++;
                if(time >= 2){
                  window.location.href='login.html?1';
                }
              },600);
            }else{
              $("#hh_content .reset .prompt").html("原密码错误，请重试");
              $("#hh_content .reset .prompt").css({color:'red'});
            }
          }
        });
      }else{
        $("#hh_content .reset .prompt").html("新密码格式不正确，支持6位以上纯数字");
        $("#hh_content .reset .prompt").css({color:'red'});
      }
    }else{
      $("#hh_content .reset .prompt").html("两次输入密码不一致");
      $("#hh_content .reset .prompt").css({color:'red'});
    }
  }
});
//左侧栏的点击事件
for(var i = 0; i<$("#hh_content .options li").length; i++){
  $("#hh_content .options li").eq(i).click(function(){
    $("#hh_content .options li").removeClass("optionsLi");
    $(this).addClass("optionsLi");
    $("#hh_content .content>div").css({display:"none"});
    var name = $(this).attr("name");
    if(name == '1'){
      $("#hh_content .content .reset").css({display:"block"});
      $("#hh_content .reset .prompt").html("");
      $("#hh_content .reset .oldPwd p").html("");
      $("#hh_content .reset .newPwd1 p").html("");
      $("#hh_content .reset .newPwd2 p").html("");
      $("#hh_content .reset .oldPwd input")[0].value = "";
      $("#hh_content .reset .newPwd1 input")[0].value = "";
      $("#hh_content .reset .newPwd2 input")[0].value = "";
      $("#hh_content .reset .oldPwd input").css({border:"1px solid #666"});
      $("#hh_content .reset .newPwd1 input").css({border:"1px solid #666"});
      $("#hh_content .reset .newPwd2 input").css({border:"1px solid #666"});
    }else if(name == '2'){
      $("#hh_content .content .students").css({display:"block"});
      $("#hh_content .students .prompt").html("");
      $("#hh_content .students .name input")[0].value = "";
      $("#hh_content .students .school input")[0].value = "";
      $("#hh_content .students .depar input")[0].value = "";
      $("#hh_content .students .profe input")[0].value = "";
      $("#hh_content .students .tcss input")[0].value = "";
    }else if(name == '3'){
      $("#hh_content .content .order").css({display:"block"});
      allOrder();
    }
  });
}
//判断window.location.search决定进入第几个
var num = window.location.search.split('?')[1];
if(num == '1'){
  $("#hh_content .options li").eq(0).addClass("optionsLi");
  $("#hh_content .content .reset").css({display:"block"});
  $("#hh_content .content .students").css({display:"none"});
  $("#hh_content .content .order").css({display:"none"});
}else if(num == '2'){
  $("#hh_content .options li").eq(1).addClass("optionsLi");
  $("#hh_content .content .reset").css({display:"none"});
  $("#hh_content .content .students").css({display:"block"});
  $("#hh_content .content .order").css({display:"none"});
}else if(num == '3'){
  $("#hh_content .options li").eq(2).addClass("optionsLi");
  $("#hh_content .content .reset").css({display:"none"});
  $("#hh_content .content .students").css({display:"none"});
  $("#hh_content .content .order").css({display:"block"});
}
$("#hh_content .content .infor li").eq(0).click(function(){
  allOrder();
})
$("#hh_content .content .infor li").eq(1).click(function(){
  waitingOrder();
})
$("#hh_content .content .infor li").eq(2).click(function(){
  waitingOrder();
})
$("#hh_content .content .infor li").eq(3).click(function(){
  $("#hh_content .order .displayNone").html("");
})
$("#hh_content .content .infor li").eq(4).click(function(){
  $("#hh_content .order .displayNone").html("");
})
  //待付款,付款失败的ajax请求
function waitingOrder(){
  $.ajax({
    url : "order.php",
    data : {
      type : "waiting",
      keyword : "未支付"
    },
    success : function(res){
      res = JSON.parse(res);
      if(res.length >= 1){
        $("#hh_content .order .displayNone").html("");
        getContent(res);
      }else{
        console.log("没有数据");
        $("#hh_content .order .displayNone").html("");
      }
    }
  });
}
allOrder();
  //全部状态下的ajax请求
function allOrder(){
  $.ajax({
    url : "order.php",
    data : {
      type : "all"
    },
    success : function(res){
      res = JSON.parse(res);
      if(res.length >= 1){
        $("#hh_content .order .displayNone").html("");
        getContent(res);
      }else{
        console.log("没有数据");
      }
    }
  });
}
  //获取数据库的内容
function getContent(data){
  for(var i=0; i<data.length; i++){
    var obj = data[i];
    setContent(obj);

    $("#hh_content .order .order_detailed span").eq(i).click(function(){
      var infor = $(this).parent().find('strong').html();
      var time = $(this).parent().find('p').eq(0).html();
      var txt = $(this).parent().find('p').eq(2).html();
      $.ajax({
        url : "order.php",
        data : {
          type : "payment",
          infor : infor,
          time : time,
          txt : txt,
          state : "支付成功",
          ntxt : "已付款"
        },
        success : function(res){
          console.log(res);
          $(document.body).css({background:"#000",opacity:'.5',zIndex:'100'});
          $("#hh_prompt").css({display:'block'});
          var time = 0;
          var timer = setInterval(function(){
            time ++;
            if(time >= 2){
              location.reload();
              clearInterval(timer);
            }
          },500);
        }
      });
    })
    if($("#hh_content .order .order_detailed span").eq(i).text() == "已付款"){
      $("#hh_content .order .order_detailed span").eq(i).css({background:"#ccc"}).unbind('click');
    }
  }
  click();

}
  //设置页面的显示
function setContent(obj){
  $("#hh_content .order .ordCot .displayNone").append('<div class="order_detailed"> <img src="'+obj.url+'" alt="" /> <strong>'+obj.information+'</strong> <p>'+obj.timer+'</p> <p>'+obj.money+'</p> <p>'+obj.state+'</p> <span>'+obj.operation+'</span> </div>');
}
function click(){
  //提交订单功能            ***未写完
  $("#hh_content .order .order_detailed strong").click(function(){
    alert("页面维护中，敬请期待！");
  });
}

// if( == "已支付"){
//   console.log("到了");
// }
