$(document).ready(function(){
    /* community 탭 */
    $('.community .news .tit .tab ul li').on('mouseenter', function(){
        $('.community .news .tit .tab ul li').removeClass('active')
        $(this).addClass('active')
   })
   $('.community .news .tit .tab ul li.notice').on('click', function(){
        $('.community .news ul').removeClass('active')
        $('.community .news .notice_list ul').addClass('active')
   })
   $('.community .news .tit .tab ul li.media').on('click', function(){
        $('.community .news ul').removeClass('active')
        $('.community .news .media_list ul').addClass('active')
    })

    /* schedule */

    let now = new Date();   //현재시간
    let year = now.getYear();  //년
    let month = now.getMonth()+1; //월
    let date = now.getDate(); //일
    let week;
    let last = new Date(year, month, 0);
    let lastDay = last.getDate(); //마지막 날짜
    let calendar = '';
    let setDate;
    let weekName = ['일','월','화','수','목','금','토'] // 요일명
    let eventDay = [3, 6, 10, 13, 14, 20, 21, 27, 28];
    let eventClass = 'event';
    let todayClass = 'today';  // 오늘 클래스명
    let sundayClass = 'sun';   // 일요일 클래스명
    let saturdayClass = 'sta';   // 토요일 클래스명
    let className;

    for(i = 1; i <= lastDay; i++){
        setDate = new Date(year, month, i);
        week = setDate.getDay();
        className = 'date' + i + ' ';  // 날짜에 들어가는 기본 클래스명 - date5 (추가가능)
        if(i == date) {
            className += todayClass + ' '
        }
        if(week == 0) {
            className += sundayClass + ' '
        }else if(week == 6) {
            className += saturdayClass + ' '
        }

        eventDay.forEach(e => {
            if(i == e) className += eventClass + '';
        });
        calendar += '<li class="swiper-slide '+ className +'"><div class="cal_day"><button class="cal_link"><strong class="date_num">'+ i +'</strong><span class="day_num">'+ weekName[week] +'</span></button></div></li>'  // html 문서의 구조
    }
    $('.schedule .calendar .swiper ul').html(calendar); // 날짜가 출력될 요소의 이름
    if(month < 10) month = '0'+month 
    $('.schedule .tit .month').text(month)

    const calendar_swiper = new Swiper('.schedule .calendar .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 15, /* li의 넓이 비율로 안함 - css에서 준 넓이대로 함 */
        spaceBetween: 0, /* li와 li사이 - 제일 작은 여백 */
        breakpoints: {
            768: {  /* 640px 이상이 되면 적용 */
                spaceBetween: 0, 
            }
        },
        navigation: {
            nextEl: '.schedule .calendar .btn_next',
            prevEl: '.schedule .calendar .btn_prev',
        }
    });

    $('.schedule .calendar .swiper ul li.event').on('click', function(){
        $('.schedule .calendar .event_txt').toggleClass('active')
    })
    $('.schedule .calendar .swiper ul li').on('click', function(){
        $('.schedule .calendar .swiper ul li').removeClass('on')
        $(this).addClass('on')
    })
})