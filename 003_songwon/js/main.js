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
})