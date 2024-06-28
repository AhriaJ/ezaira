$(document).ready(function(){
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
})//document