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
})