$(document).ready(function(){

     /* 브라우저 넓이가 1024이하면 모바일, 이상이면 pc */
    let pc_mobile //현재상태가 pc인지 모바일인지를 저장
    let window_w //브라우저 넓이 저장 
     
    function resize_chk(){
        window_w = $(window).width()
        if(window_w > 1024){ /* 1024보다 크면 (pc라면) */
            pc_mobile = 'pc'
        }else{ /* 모바일이면 */
            pc_mobile = 'mobile'
        }
        console.log(pc_mobile)
    }
     //처음에 로딩 됐을때 실행
     resize_chk()
     //브라우저가 리사이즈 될때마다 실행
    $(window).resize(function(){
        resize_chk()
    })

    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */
        effect: "fade",
        autoplay: {  /* 팝업 자동 실행 */
            delay: 15000,
            disableOnInteraction: true,
        },

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        
        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.visual .btn_next',  /* 다음 버튼의 클래스명 */
            prevEl: '.visual .btn_prev',  
        },

    });//visual_swiper
    visual_swiper.autoplay.stop();  /* 일시정지 기능 */
    visual_swiper.autoplay.start();  /* 재생 기능 */

    /* 일시정지 버튼을 클릭하면 팝업은 일시정지, 버튼은 재생버튼으로 바뀜 */

    $('.visual .btn_wrap button.btn_stop').on('click', function(){
        visual_swiper.autoplay.stop();
        $(this).hide()
        $('.visual .btn_wrap button.btn_play').show()
    })
    $('.visual .btn_wrap button.btn_play').on('click', function(){
        visual_swiper.autoplay.start();
        $(this).hide()
        $('.visual .btn_wrap button.btn_stop').show()
    })

    /* 스크롤되면 header에 fixed클래스를 추가, 다시 맨 위로 올라가면 클래스 삭제 */
    let scrolling
    function scroll_chk(){
        scrolling = $(window).scrollTop()
        console.log(scrolling)
        if(scrolling > 0){
            $('header').addClass('fixed')
        }else{
            $('header').removeClass('fixed')
        }
    }//function
    //문서가 처음 로딩되었을때 1번실행

    scroll_chk()

    $(window).scroll(function(){
        //브라우저가 스크롤 될 때마다
        scroll_chk()
    })//window.scroll

    /* 메뉴에 마우스를 올리면 header에 menu_over라는 클래스를 추가
        마우스를 오버한 li에만 on이라는 클래스 추가
        메뉴 : header .gnb .gnb_wrap ul.depth1 > li 
        -> 다른 메뉴(li)에 마우스를 오버하면 이전에 오버한 메뉴에서 on클래스 삭제 
        -> header에서 마우스를 아웃하면 mouse_over 클래스 삭제, 모든 메뉴에서 on 클래스 삭제 */

    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter', function(){
        if(pc_mobile == 'pc'){ //pc일 경우에만 실행
            $('header').addClass('menu_over')
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
            $(this).addClass('on') //마우스를 오버한 li=this
        }//if
    })
    $('header').on('mouseleave', function(){
        if(pc_mobile == 'pc'){
            $('header').removeClass('menu_over')
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
        }//if
    })
    $('header .gnb .gnb_open').on('click', function(){
        if(pc_mobile == 'mobile'){//모바일일 경우에만 실행
            $('header').addClass('mobile_open')
        }
    })
    $('header .gnb .gnb_close').on('click', function(){
        if(pc_mobile == 'mobile'){//모바일일 경우에만 실행
            $('header').removeClass('mobile_open')
        }
    })

})//document