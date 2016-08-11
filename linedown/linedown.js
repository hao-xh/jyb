var nav = '全部', //分类
    sort = '默认'; //排序
classAjax(nav,sort); //进入页面时发送ajax请求获取数据
  //导航栏点击事件
  for(var i=0; i<$("#content .nav li").length; i++){
    $("#content .nav li").eq(i).click(function(){
      $("#content .nav li").removeClass("hoverColor");
      $(this).addClass("hoverColor");
      nav = $(this).html();
      sort = '默认';
      $("#content .sorting li").removeClass("clickBorder hoverColor");
      $("#content .sorting li").eq(0).addClass("clickBorder hoverColor");
      classAjax(nav,sort);
    })
  }
  //排序点击事件
  for(var j=0; j<$("#content .sorting li").length; j++){
    $("#content .sorting li").eq(j).click(function(){
      $("#content .sorting li").removeClass("clickBorder hoverColor");
      $(this).addClass("clickBorder hoverColor");
      sort = $(this).html().split('<')[0];
      classAjax(nav,sort);
    })
  }
//获取全部信息的ajax
function classAjax(species,sorting){
var sortType = '';
var type = '';
if(species == '全部'){
type = 'all';
}else if(species == 'iOS'){
type = 'ios';
}else if(species == 'Android'){
type = 'android';
}else if(species == 'HTML5'){
type = 'html5';
}else if(species == 'Unity-3D'){
type = 'u3d';
}else if(species == '产品经理'){
type = 'manager';
}else{
type = '';
}
if(sorting == '默认'){
sortType = '';
}else if(sorting == '销量'){
sortType = 'soldnum';
}else if(sorting == '价格'){
sortType = 'price';
}else if(sorting == '评分'){
sortType = 'schoolm2';
}else{
sortType = '';
}
$.ajax({
url : "linedown.php",
data : {
type : type
},
success : function(res){
res = JSON.parse(res);
for(var i = 0; i<res.length; i++){
  res.sort(function(a,b){
    return (b[sortType] ? b[sortType] : b) - (a[sortType] ? a[sortType] : a);
  });
}
paging(res);
}
});
}
//分页
function paging(num){
var paging = 10; //每页数量
var number = num.length; //数据的总数量
var pagingNum = Math.ceil(number/paging); //页数
var pagData = num.slice(0,paging);//进入页面时取出的数量
var curPag = 1; //当前页
$("#content .paging .pagingNum").html('');
for(var i=0; i<pagingNum; i++){
  $("#content .paging .pagingNum").append('<span>'+(i+1)+'</span>'); //页数的生成
}
$("#content .paging .pagingNum span").eq(0).addClass("pagingLi");
for(var i=0; i<$("#content .paging .pagingNum span").length; i++){
  $("#content .paging .pagingNum span").eq(i).click(function(){
    $("#content .paging .pagingNum span").removeClass("pagingLi");
    $(this).addClass("pagingLi");
    curPag = $(this).html();
    pagData = num.slice((curPag-1)*paging,curPag*paging); //从数据中取出10个
    bianli(pagData);
  });
}
 //上一页的点击事件
$("#content .paging .upPaging").click(function(){
  curPag --; //这里是判断数字页的class在谁身上
  if(curPag <= 1){
    curPag = 1;
  }
  $("#content .paging .pagingNum span").removeClass("pagingLi");
  $("#content .paging .pagingNum span").eq(curPag-1).addClass("pagingLi");
  pagData = num.slice((curPag-1)*paging,curPag*paging); //从数据中取出10个
  bianli(pagData);
});
 //下一页的点击事件
$("#content .paging .downPaging").click(function(){
  curPag ++; //这里是判断数字页的class在谁身上
  if(curPag >= $("#content .paging .pagingNum span").length){
    curPag = $("#content .paging .pagingNum span").length;
  }
  $("#content .paging .pagingNum span").removeClass("pagingLi");
  $("#content .paging .pagingNum span").eq(curPag-1).addClass("pagingLi");
  pagData = num.slice((curPag-1)*paging,curPag*paging); //从数据中取出10个
  bianli(pagData);
});
bianli(pagData); //进入页面时就取出10条
}
//循环从后台取出的信息
function bianli(obj){
$("#content .goods").html('');
for(var i=0; i<obj.length; i++){
createContent(obj[i]);
}
}
//添加商品信息
function createContent(obj){
$("#content .goods").append('<div class="goodsBox"><img src="img/gx.png" alt="" /><strong>'+obj.lessonname+'</strong><p>'+obj.school+'</p><span><em>￥</em>'+obj.price+'</span> <span class="right">已售'+obj.soldnum+'</span></div>');
}
