/* js는 무조건 document.ready를 써야함 */

$(document).ready(function(){

    console.log('테스트')

    let scrolling = $(window).scrollTop()
    console.log(scrolling);
    
    /* 브라우저가 스크롤이 조금이라도 되면 header에 fixed라는 클래스를 추가, 맨 위로 올라가면 fixed라는 클래스를 삭제*/

    function scroll_chk(){ //함수 선언
        //scrolling이라는 변수에 현재 스크롤 된 값을 저장
        scrolling = $(window).scrollTop()
        if(scrolling > 800){
            $('header').addClass('fixed')
        }else{
            $('header').removeClass('fixed')
        }
    }//function scroll_chk

    scroll_chk() //함수 호출

    $(window).scroll(function(){
        scroll_chk()
    })

    /* .tour .list ul li한테 오버한 li에게만 active 클래스 부여. 이전에 active를 가지고 있었던 li에서는  active클래스 삭제
        -무조건 li 하나만 active클래스 부여 */
    $('.tour .list ul li').on('mouseenter', function(){
        $('.tour .list ul li').removeClass('active')
        $(this).addClass('active')
    })

    /* footer .family button.btn_open 를 클릭하면 footer .family에 open 클래스를 줘야함.
        footer .family button.btn_close 를 클릭하면 open 클래스를 삭제해야함. */
        
    $('footer .family button.btn_open').on('click', function(){
        $('footer .family').addClass('open')
        $('footer .family .list').slideDown()
    })
    $('footer .family button.btn_close').on('click', function(){
        $('footer .family').removeClass('open')
        $('footer .family .list').slideUp()
    })



})//$(document).ready