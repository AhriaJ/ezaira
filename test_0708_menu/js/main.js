$(document).ready(function(){
    /* 1025까지 - pc
       1024이하 - 모바일 */
    let pc_mobile //현재 pc인지 mobile인지 상태를 저장하는 변수
    let window_w //브라우저 넓이

    function resize_chk(){
        window_w = $(window).width()
        if(window_w > 1024){ //1024초과 - pc
            pc_mobile = 'pc'
        }else{
            pc_mobile = 'mobile'
        }//if
        console.log(pc_mobile)
    }//function

    resize_chk() //html이 로딩된 이후 단 1번 실행
    $(window).resize(function(){ // 브라우저가 리사이즈될때마다
        resize_chk()
    })
    
    /* pc에서 메뉴에 마우스를 오버하면 header에 menu_over 클래스 추가, header .gnb .gnb_wrap ul.depth1 > li에 on클래스 추가 */
    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function(){
        /* pc일때만 작동되어야 함 */
        if(pc_mobile == 'pc'){
            $('header').addClass('menu_over')
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
            $(this).addClass('on')
        }//if
    })//on
    $('header').on('mouseleave', function(){
        /* pc일때만 작동되어야 함 */
        if(pc_mobile == 'pc'){
            $('header').removeClass('menu_over')
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
        }//if
    })//on
    $('header .gnb .gnb_wrap ul.depth1 > li:last-child > ul.depth2 > li:last-child').on('focusout', function(){
        if(pc_mobile == 'pc'){
            $('header').removeClass('menu_over')
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
        }//if
    })

    /* 모바일에서 1차 메뉴를 클릭하면 
        - 1차 메뉴에 걸려있는 링크가 작동되면 X
        - 하위메뉴가 열려야함 (li에 open클래스 추가) 닫힌 1차메뉴를 클릭하면 열리고 열린 1차메뉴를 클릭하면 닫힘. */

    $("header .gnb .gnb_wrap ul.depth1 > li > a").on("click", function(e){
        if(pc_mobile == 'mobile'){
            e.preventDefault();	/* a 태그의 href를 작동 시키지 않음 */
            $(this).parent().toggleClass('open')
        }
    });

    /* 
        메뉴 열기(header .gnb button.gnb_open)를 클릭하면 header에 menu_open클래스 추가 
        메뉴 닫기(header .gnb button.gnb_close)를 클릭하면 header에 menu_open클래스 삭제

    */
    $('header .gnb button.gnb_open').on('click', function(){
        $('header').addClass('menu_open')
        /* 모바일 메뉴에서 스크롤금지 */
        $("html, body").css({overflow : "hidden", height : $(window).height()}).bind("scroll touchmove mousewheel", function(e){e.preventDefault();e.stopPropagation();return false;},function(){passive:false});
    })
    $('header .gnb button.gnb_close').on('click', function(){
        /* 모바일 메뉴 닫을때 스크롤금지 해제 */
        $('header').removeClass('menu_open')
        $("html, body").css({overflow : "visible", height : "auto"}).unbind('scroll touchmove mousewheel');
    })
    
})