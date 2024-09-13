$(document).ready(function(){
    let scrolling
    let scroll_top //header 고정 시작값
    let window_w
    let mobile_size = 1259
    let pc_mobile

    function scroll_chk(){
        if(pc_mobile == 'pc'){
            scroll_top = 40
        }else{
            scroll_top = 0
        }
        scrolling = $(window).scrollTop()
        console.log(scrolling)
        if(scrolling > scroll_top) {
            $('header').addClass('fixed')
        }else{  
            $('header').removeClass('fixed')
        }
    }
    function resize_chk(){
        window_w = $(window).width()
        console.log(window_w)
        if(window_w > mobile_size){ //모바일 사이즈보다 클때 (=pc일때)
            pc_mobile = 'pc'
        }else{//모바일일때
            pc_mobile = 'mo'
        }
        console.log(pc_mobile)
    }
    resize_chk()
    $(window).resize(function(){
        resize_chk()
    })

    scroll_chk() //로딩되었을때 1번 실핼
    $(window).scroll(function(){
        scroll_chk()
    })
    $('header .header_sub .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function(){
        if(pc_mobile == 'pc'){
            $('header').addClass('menu_over')
            $('header .header_sub .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
            $(this).addClass('on')
        }
    })
    $('header').on('mouseleave', function(){
        $('header').removeClass('menu_over')
        $('header .header_sub .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
    })
    $('header .header_sub .gnb .gnb_wrap ul.depth1 > li:last-child ul.depth2 > li:last-child').on('focusout', function(){
        $('header').removeClass('menu_over')
        $('header .header_sub .gnb .gnb_wrap ul.depth1 > li').removeClass('on') 
    })
    
    $('header .header_sub .gnb .gnb_wrap .depth1 > li > a').on('click', function(e){
        if(pc_mobile == 'mo'){
            e.preventDefault();
            $(this).parent().toggleClass('open')
            $()
        }
    })
    $('header .header_sub .sub_left .gnb .gnb_wrap .depth2 > li > a').on('click', function(e){
        if(pc_mobile == 'mo'){
            e.preventDefault();
            $(this).parent().toggleClass('open2')
            $()
        }
    })
    $('header .header_sub .gnb .gnb_open').on('click', function(){
        $('header').addClass('menu_open')
        //하단 스크롤 금지
        $("html, body").css({overflow : "hidden", height : $(window).height()}).bind("scroll touchmove mousewheel", function(e){e.preventDefault();e.stopPropagation();return false;},function(){passive:false});
    })
    $('header .header_sub .gnb .gnb_close').on('click', function(){
        $('header').removeClass('menu_open')
        //하단 스크롤 금지 해제
        $("html, body").css({overflow : "visible", height : "auto"}).unbind('scroll touchmove mousewheel');
    })
})