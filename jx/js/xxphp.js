window.onload=function(){
document.onkeydown=function(){
var e=window.event||arguments[0];
if(e.keyCode==123){
alert("小样你想干嘛？");
return false;
}else if((e.ctrlKey)&&(e.shiftKey)&&(e.keyCode==73)){
alert("还是不给你看。。");
return false;
}
};
document.oncontextmenu=function(){
alert("小样不给你看");
return false;
}
}
$(document).ready(function () {
    $('.OK-jiexi').click(function () {
      $('.panel').slideToggle('slow');
    });
     $('.panel a').click(function () {
      $('.panel').slideToggle('slow');
    });
  });
    	var url_adress = (GetQueryString("url"));
    function GetQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
   
     var r = window.location.search.substr(1).match(reg);
        if (r != null)return unescape(r[2]);
        return null;
    }
 
   function play(url) {
     loadad();
        $('#WANG').attr('src', decodeURIComponent(decodeURIComponent(url))).show();
        
    }
   
  function loadad() {
		var a = document.getElementById("playad");
		a.innerHTML = '<iframe  width="100%" height="100%" src="" frameborder="0" border="0" marginwidth="0" marginheight="0" scrolling="no"   ></iframe>';
		$("#playad").show()
	setTimeout("$('#playad').empty().hide();$('#WANG').show();", 0 * 1000)
}

//PC端显示播放器logo
function is_mobile() {
  var regex_match = /(nokia|iphone|android|motorola|^mot-|softbank|foma|docomo|kddi|up.browser|up.link|htc|dopod|blazer|netfront|helio|hosin|huawei|novarra|CoolPad|webos|techfaith|palmsource|blackberry|alcatel|amoi|ktouch|nexian|samsung|^sam-|s[cg]h|^lge|ericsson|philips|sagem|wellcom|bunjalloo|maui|symbian|smartphone|midp|wap|phone|windows ce|iemobile|^spice|^bird|^zte-|longcos|pantech|gionee|^sie-|portalmmm|jigs browser|hiptop|^benq|haier|^lct|operas*mobi|opera*mini|320x320|240x320|176x220)/i;
  var u = navigator.userAgent;
  if (null == u) {
   return true;
  }
  var result = regex_match.exec(u);
 
  if (null == result) {
   return false
  } else {
   return true
  }
 }
 if (is_mobile()) {
 // document.writeln("移动端");
 }else{

document.writeln('<div class="player-logo"> <img src="http://www.wpsseo.cn/jx/playerlogo.png"></div>');
 }
