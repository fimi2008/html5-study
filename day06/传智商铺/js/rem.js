/**
 * Created by lionxxw on 2017/3/27.
 */
var h_width = 540;
var h_size = 40;
var min_width = 320;
var oHtml = document.documentElement;
//页面上来就执行一次
getSize();

// 将动态改变html的font-size封装一下
function getSize(){
    // 获取这个屏幕的宽度
    var screenWidth = oHtml.clientWidth;

    if(screenWidth >= h_width){

        oHtml.style.fontSize = h_size+'px';

    }else if(screenWidth <= min_width){

        oHtml.style.fontSize = min_width/h_size+'px';

    }else{

        oHtml.style.fontSize = screenWidth/h_width*h_size + 'px';

    }

}

// 当浏览器发生窗口改变就会被触发的事件
window.onresize = function(){
    // 重新调用
    getSize();

}
