$(document).ready(function(){
    /* 
        header .gnb .gnb_wrap ul.depth1 > li
        pc 일때 메뉴에 마우스오버하면 
        1. header에 menu_over 클래스 추가
        2. 마우스를 오버한 li에 on클래스 추가 > pc에서만 구현
    */
    let win_W
    let pc_mobile
    let scrolling

    function resize_chk(){
        win_W = $(window).width()
        if(win_W > 1024){
            pc_mobile = 'pc'
        }else{
            pc_mobile = 'mobile'
        }
        console.log(pc_mobile)
    }//function
    
    //브라우저가 로디외었을때 단 한번 실행
    resize_chk()
    $(window).resize(function(){
        resize_chk()
    })//$(window).resize

    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function(){
        if(pc_mobile == 'pc'){
            $('header').addClass('menu_over')
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
            $(this).addClass('on')
        }
    })
    $('header').on('mouseleave', function(){
        if(pc_mobile == 'pc'){
            $('header').removeClass('menu_over')
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
        }
    })
    $('header .gnb .gnb_wrap ul.depth1 > li:last-child > ul.depth2 > li:last-child > a').on('focusout', function(){
        if(pc_mobile == 'pc'){
            $('header').removeClass('menu_over')
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
        }
    })

    /* 모바일 메뉴 */
    $('header .gnb .gnb_wrap ul.depth1 > li > a').on("click", function(e){
        if(pc_mobile == 'mobile'){
            e.preventDefault();		/* a 태그의 href를 작동 시키지 않음 */
            $(this).parent().toggleClass('open')
        }
	});

    /* 메뉴열기header .gnb .gnb_open를 클릭하면 header에 menu_open 클래스 추가
        메뉴 닫기header .gnb .gnb_close를 클릭하면 header에 mennu_open 클래스 삭제 */
    $('header .gnb .gnb_open').on('click', function(){
        $('header').addClass('menu_open')
    })
    $('header .gnb .gnb_close').on('click', function(){
        $('header').removeClass('menu_open')
    })
    $("html, body").css({overflow : "hidden", height : $(window).height()}).bind("scroll touchmove mousewheel", function(e){e.preventDefault();e.stopPropagation();return false;},function(){passive:false});
    $("html, body").css({overflow : "visible", height : "auto"}).unbind('scroll touchmove mousewheel');

    
})