for(var i = 0; i < $("#hh_content .tab li").length; i ++){
  $("#hh_content .tab li").eq(i).click(function(){
    $("#hh_content .tab li").removeClass();
    $(this).addClass("tabLi");
    var index = $(this).attr("index");
    $("#hh_content .content>div").css({display:'none'});
    if(index == '1'){
      $("#hh_content .content .jj").css({display:'block'});
    }else if(index == '2'){
      $("#hh_content .content .contact").css({display:'block'});
    }else if(index == '3'){
      $("#hh_content .content .recruit").css({display:'block'});
    }else if(index == '4'){
      $("#hh_content .content .problem").css({display:'block'});
    }else if(index == '5'){
      $("#hh_content .content .copyright").css({display:'block'});
    }else if(index == '6'){
      $("#hh_content .content .terms").css({display:'block'});
    }
  });
}
var search = window.location.search.split('?')[1];
$("#hh_content .content>div").css({display:'none'});
if(search == '1'){
  $("#hh_content .content .jj").css({display:'block'});
  $("#hh_content .tab li").eq(0).addClass("tabLi");
}else if(search == '2'){
  $("#hh_content .content .contact").css({display:'block'});
  $("#hh_content .tab li").eq(1).addClass("tabLi");
}else if(search == '3'){
  $("#hh_content .content .recruit").css({display:'block'});
  $("#hh_content .tab li").eq(2).addClass("tabLi");
}else if(search == '4'){
  $("#hh_content .content .problem").css({display:'block'});
  $("#hh_content .tab li").eq(3).addClass("tabLi");
}else if(search == '5'){
  $("#hh_content .content .copyright").css({display:'block'});
  $("#hh_content .tab li").eq(4).addClass("tabLi");
}else if(search == '6'){
  $("#hh_content .content .terms").css({display:'block'});
  $("#hh_content .tab li").eq(5).addClass("tabLi");
}
