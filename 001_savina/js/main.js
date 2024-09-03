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
    
    $('.dm .list ul li').on('mouseenter', function(){
        $('.dm .list ul li').removeClass('on')
        $('.dm .list ul li').addClass('off')
        $(this).removeClass('off')
        $(this).addClass('on')
    })
    $('.dm .list').on('mouseleave', function(){
        $('.dm .list ul li').removeClass('on')
        $('.dm .list ul li').removeClass('off')
    })

    const program_swiper = new Swiper('.program .list .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: "auto", /* li의 넓이 비율로 안함 - css에서 준 넓이대로 함 */
        spaceBetween: 0, /* li와 li사이 - 제일 작은 여백 */
        centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        autoplay: {  /* 팝업 자동 실행 */
            delay: 250000,
            disableOnInteraction: true,
        },
        navigation: {
            nextEl: '.program .list .next',
            prevEl: '.program .list .prev',
        },
        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.program .list .paging', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
        },
    });



    /*
        news 탭메뉴
    */
   $('.news .txt .tab li').on('mouseenter', function(){
        $('.news .txt .tab li').removeClass('on')
        $(this).addClass('on')
   })
   $('.news .txt .tab li.notice').on('click', function(){
        $('.news .list ul').removeClass('on')
        $('.news .list .notice_list ul').addClass('on')
   })
   $('.news .txt .tab li.media').on('click', function(){
        $('.news .list ul').removeClass('on')
        $('.news .list .media_list ul').addClass('on')
    })

    const archive_swiper = new Swiper('.archive .mo_list .swiper', { /* 팝업을 감싼는 요소의 class명 */
	slidesPerView: "auto", /* li의 넓이 비율로 안함 - css에서 준 넓이대로 함 */
	spaceBetween: 16, /* li와 li사이 - 제일 작은 여백 */
	breakpoints: {
		768: {  
			spaceBetween: 16, 
		},
		1024: { 
			spaceBetween: 24,
		},
	},

	scrollbar: {
        el: ".archive .mo_list .swiper-scrollbar",
        hide: false,
        draggable: true,
    },
});

})