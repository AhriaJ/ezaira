$(document).ready(function(){
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 5000000000000,
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

    });
    const go_swiper = new Swiper('.go .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 3, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            480: {
                slidesPerView: 4,
                spaceBetween: 16,
            },
            768: {    /* 768px 이상일때 적용 */
                slidesPerView: 5,
                spaceBetween: 16,
            },
            1024: {   /* 1024px 이상일때 적용 */
                slidesPerView: 6,
                spaceBetween: 24,
            },
            1260: {    /* 1280px 이상일때 적용 */
                slidesPerView: 8,
                spaceBetween: 30,
            },
        },
        navigation: {
            nextEl: '.go .btn_next',
            prevEl: '.go .btn_prev',
        }
    });

    let n_tap_btn = $('.community .news .tab .tab_btn ul li')
    let n_tap_name 
    let n_tap_cnt = $('.community .news .tab .tab_cont div[role="tabpanel"]')
    let n_tap_cnt_parent = $('.community .news .tab .tab_cont')

    n_tap_btn.on('click', function(){
        n_tap_btn.removeClass('active')
        $(this).addClass('active')
        n_tap_btn.attr('aria-selected', 'false')
        $(this).attr('aria-selected', 'true')
        n_tap_name = $(this).attr('aria-controls')
        n_tap_name = '#'+n_tap_name //id 선택자를 추가로 삽입
        console.log(n_tap_name)
        n_tap_cnt.removeClass('active')
        n_tap_cnt_parent.find(n_tap_name).addClass('active')        
    })
    let s_tap_btn = $('.community .schedule .tab .tab_btn ul li')
    let s_tap_name 
    let s_tap_cnt = $('.community .schedule .tab .tab_cont div[role="tabpanel"]')
    let s_tap_cnt_parent = $('.community .schedule .tab .tab_cont')

    s_tap_btn.on('click', function(){
        s_tap_btn.removeClass('active')
        $(this).addClass('active')
        s_tap_btn.attr('aria-selected', 'false')
        $(this).attr('aria-selected', 'true')
        s_tap_name = $(this).attr('aria-controls')
        s_tap_name = '#'+s_tap_name //id 선택자를 추가로 삽입
        console.log(s_tap_name)
        s_tap_cnt.removeClass('active')
        s_tap_cnt_parent.find(s_tap_name).addClass('active')        
    })

    // 클래스가 "counter"인 모든 요소를 선택합니다.
    const $counters = $(".number .counter");

    // 노출 비율(%)과 애니메이션 속도(ms)을 설정합니다.
    const exposurePercentage = 100; // ex) 스크롤 했을 때 $counters 컨텐츠가 화면에 100% 노출되면 숫자가 올라갑니다.
    const duration = 1000; // ex) 1000 = 1초
    
    // 숫자에 쉼표를 추가할지 여부를 설정합니다.
    const addCommas = true; // ex) true = 1,000 / false = 1000
    
    // 숫자를 업데이트하고 애니메이션하는 함수 정의
    function updateCounter($el, start, end) {
        let startTime;
        function animateCounter(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = (timestamp - startTime) / duration;
            const current = Math.round(start + progress * (end - start));
            const formattedNumber = addCommas ? current.toLocaleString() : current;
            $el.text(formattedNumber);
            
            if (progress < 1) {
                requestAnimationFrame(animateCounter);
            } else {
                $el.text(addCommas ? end.toLocaleString() : end);
            }
        }
        requestAnimationFrame(animateCounter);
    }

    // 윈도우의 스크롤 이벤트를 모니터링합니다.
    $(window).on('scroll', function() {
        // 각 "counter" 요소에 대해 반복합니다.
        $counters.each(function() {
            const $el = $(this);
            // 요소가 아직 스크롤되지 않았다면 처리합니다.
            if (!$el.data('scrolled')) {
                // 요소의 위치 정보를 가져옵니다.
                const rect = $el[0].getBoundingClientRect();
                const winHeight = window.innerHeight;
                const contentHeight = rect.bottom - rect.top;
                
                // 요소가 화면에 특정 비율만큼 노출될 때 처리합니다.
                if (rect.top <= winHeight - (contentHeight * exposurePercentage / 100) && rect.bottom >= (contentHeight * exposurePercentage / 100)) {
                    const start = parseInt($el.data("start"));
                    const end = parseInt($el.data("end"));
                    // 숫자를 업데이트하고 애니메이션을 시작합니다.
                    updateCounter($el, start, end);
                    $el.data('scrolled', true);
                }
            }
        });
    }).scroll();

    const media_swiper = new Swiper('.media .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: "auto", /* li의 넓이 비율로 안함 - css에서 준 넓이대로 함 */
        spaceBetween: 16, /* li와 li사이 - 제일 작은 여백 */
        breakpoints: {
            769: { 
                spaceBetween: 24, 
            },
        },
        autoplay: {  /* 팝업 자동 실행 */
            delay: 2500,
            disableOnInteraction: true,
        },
        navigation: {
            nextEl: '.media .btn_wrap .btn_next',
            prevEl: '.media .btn_wrap .btn_prev',
        },
    });
    media_swiper.autoplay.stop();  /* 일시정지 기능 */
    media_swiper.autoplay.start();  /* 재생 기능 */
    $('.media .btn_wrap .btn_stop').on('click', function(){
        media_swiper.autoplay.stop();
        $(this).hide() // 숨김
        $('.media .btn_wrap .btn_play').show() //보임
    })
    $('.media .btn_wrap .btn_play').on('click', function(){
        media_swiper.autoplay.start();
        $(this).hide() // 숨김
        $('.media .btn_wrap .btn_stop').show() //보임
    })

    const onair_swiper = new Swiper('.onair .swiper', { /* 팝업을 감싼는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 2500,
            disableOnInteraction: true,
        },
    
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
    
        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.onair .paging', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
    });

    const banner_swiper = new Swiper('.banner .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 3, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            768: {    /* 768px 이상일때 적용 */
                slidesPerView: 4,
                spaceBetween: 24,
            },
            1024: {   /* 1024px 이상일때 적용 */
                slidesPerView: 5,
                spaceBetween: 24,
            },
        },
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        autoplay: {  /* 팝업 자동 실행 */
            delay: 2000,
            disableOnInteraction: true,
        },
        navigation: {
            nextEl: '.banner .btn_next',
            prevEl: '.banner .btn_prev',
        },
    });
    banner_swiper.autoplay.stop();  /* 일시정지 기능 */
    banner_swiper.autoplay.start();  /* 재생 기능 */
    $('.banner .btn_wrap .btn_stop').on('click', function(){
        banner_swiper.autoplay.stop();
        $(this).hide() // 숨김
        $('.banner .btn_wrap .btn_play').show() //보임
    })
    $('.banner .btn_wrap .btn_play').on('click', function(){
        banner_swiper.autoplay.start();
        $(this).hide() // 숨김
        $('.banner .btn_wrap .btn_stop').show() //보임
    })
})