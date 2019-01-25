/*
    원칙1. JS는 변수 선언부, HTML 태그 생성부, 이벤트 선언부, 함수 선언부 등의 4가지 영역으로 나누어 작성한다.
    원칙2. '모든 화면에서' 또는 '대부분의 화면에서' 공통으로 사용되는 부분은 같은 4가지 영역으로 새로이 JS 파일을 따로 작성하여 HTML 문서상의 가장 먼저 로드되도록 한다.
*/

'use strict';
$(document).ready(function() {
/************ 시작 ****************/
    
/************
	변수 선언부
************/
var FAVICON_LIST= ['img/logi-favicon_32x32_blue.png', 'img/logi-favicon_32x32_ciano.png', 'img/logi-favicon_32x32_red.png', 'img/logi-favicon_32x32_yellow.png'];
var FAVICON_INTERVAL_TIME_SC = 30 * 1000;    
var gFaviconInterval = 0;
    
/*****************
    HTML 태그 생성부
*****************/
// 'FAVICON_INTERVAL_TIME_SC' 상수에 설정된 시간('초')마다 파비콘을 변경    
gFaviconInterval = setInterval(function() {
    var randomNum = Math.floor((Math.random() * FAVICON_LIST.length));
    $('link[rel="shortcut icon"]').attr('href', FAVICON_LIST[randomNum]);
}, FAVICON_INTERVAL_TIME_SC);

    
    
/*************
    이벤트 선언부
*************/    
$('div.btn-menu a').on('click', function() {
    var wrap = $('div.wrap');
    wrap.toggleClass('on');
    
    if(wrap.hasClass('on')) {
        $(this).find('i').attr('class', 'fa fa-times');
        $('body').css({'overflow':'hidden'});
        $('div.depth1 a').focus();
    } else {
        $(this).find('i').attr('class', 'fa fa-bars');
        $('body').css({'overflow':'auto'});
    }
        
});
    
$('div.page-wrap').on('click', function() {
//    $('div.wrap').removeClass('on');
//    $('div.btn-menu a').find('i').attr('class', 'fa fa-bars');
//    $('body').css({'overflow':'auto'});
});
    
$('div.depth').eq(0).find('a').on('click', function() {
//    $('div.depth1').css({'left':'-300px'});
//    $('div.depth2').css({'left':'0px'});
//    $('div.depth3').css({'left':'300px'});
    $('div.depth-wrap').css({'left':'-300px'});
    
});
    
$('div.depth').eq(1).find('a').eq(0).on('click', function() {
//    $('div.depth1').css({'left':'0px'});
//    $('div.depth2').css({'left':'300px'});
//    $('div.depth3').css({'left':'600px'});
    $('div.depth-wrap').css({'left':'0px'});
    
});
    
$('div.depth').eq(1).find('a').eq(1).on('click', function() {
//    $('div.depth1').css({'left':'-600px'});
//    $('div.depth2').css({'left':'-300px'});
//    $('div.depth3').css({'left':'0px'});
    $('div.depth-wrap').css({'left':'-600px'});
    
});

    
$('div.depth').eq(2).on('click', function() {
//    $('div.depth1').css({'left':'-300px'});
//    $('div.depth2').css({'left':'0px'});
//    $('div.depth3').css({'left':'300px'});
    $('div.depth-wrap').css({'left':'-300px'});
    
});
    
    

/************
	함수 선언부
************/
    

    
/***************** 종료 ***************/
});