//sjdata
function newsjdate(){
    return new Date($.ajax({async: false}).getResponseHeader("Date"));
}

//mm
var key = '';
function yzm(){
    var arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'];
    key="";
    for(var i = 0 ; i < 4 ; i ++ )
        key += ''+arr[Math.floor(Math.random() * arr.length)];
    return key;
}
yzm();
//yx
function yx1(x){
    if(x=="旋转"){
        //alert(1);
        $(".fenxiang").css({"transform":"rotate(720deg)"});
    }else if (x=="放大"){
        $(".fenxiang").css({"transform":"scale(2.0)"});
        setTimeout(function(){$(".fenxiang").css({"transform":"scale(1)"})},2000)
    }
}
