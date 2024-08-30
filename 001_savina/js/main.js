$(document).ready(function(){
    let swiper_tit = ['HuskMitNavn<br>The Big Picture<br>한국-덴마크 문화교류 특별전', '《예술 입은 한복》<br>카자흐스탄 순회전', 'Jordan Matter<br>우리 삶의 빛나는 순간들'];
    let swiper_space = ['2024-07-25 ~ 2024-10-27<br>SAVINA MUSEUM 2,3F', '2024-05-17 ~ 2024-06-23<br>카자흐스탄 아스타나 초대대통령박물관', '2024-03-29 ~ 2024-05-19<br>논산시 연산문화창고'];
    let swiper_tit_name = $('.visual .tit h2 a');
    let swiper_space_name = $('.visual .tit .visual_info p')
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 5000,
            disableOnInteraction: true,
        },

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.visual .paging', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
        on: {
            slideChange: function(){
                swiper_tit_name.html(swiper_tit[this.realIndex]);
                swiper_tit_name.css('top','100%')
                swiper_tit_name.animate({
                    top: 0
                }, 500)
                swiper_space_name.html(swiper_space[this.realIndex])
            }
	    }
    });

    let window_h
    let scrolling
    let slogan_top

    function scroll_chk(){
        window_h = $(window).height() //브라우저 높이
        scrolling = $(window).scrollTop() //스크롤 된 값
        slogan_top = $('.slogan').offset().top

        if(scrolling > (slogan_top - window_h + (window_h/5))){
            $('.slogan').addClass('active')
        }
    }
    scroll_chk()//로딩된 이후 1번
    $(window).scroll(function(){//스크롤 될때마다
        scroll_chk()
    })
    $(window).resize(function(){//브라우저가 리사이즈 될때마다
        scroll_chk()
    })
})