$(document).ready(function(){
    /*
        1. 탭버튼을 클릭하면 active 클래스 추가 (클릭한 li에만)
            .cts_history .tab_area .tab_btn ul li
        2. 클릭한 li만 aria-selected="true" 나머지는 aria-selected="false"
        3. 클릭한 li에서 aria-controls값을 가져와서 하단콘텐츠 중에서 같은 이름의 id를 가진 요소에만 active클래스 추가
            .cts_history .tab_area .tab_cnt div[role="tabpanel"]

            find라는 명령으로 id가 aria-controls값과 같은 요소를 찾아야함.
            find는 하위요소를 검색하는 기능.
            선택자가 tabpanel을 직접 선택하는게 아니라 그 요소의 부모요소를 선택해서 하위요로를 검색하게 해야함.
    */
    let tap_btn = $('.cts_history .tab_area .tab_btn ul li')
    let tap_name 
    let tap_cnt = $('.cts_history .tab_area .tab_cnt div[role="tabpanel"]')
    let tap_cnt_parent = $('.cts_history .tab_area .tab_cnt')

    tap_btn.on('click', function(){
        tap_btn.removeClass('active')
        $(this).addClass('active')
        tap_btn.attr('aria-selected', 'false')
        $(this).attr('aria-selected', 'true')
        tap_name = $(this).attr('aria-controls')
        tap_name = '#'+tap_name //id 선택자를 추가로 삽입
        console.log(tap_name)
        tap_cnt.removeClass('active')
        tap_cnt_parent.find(tap_name).addClass('active')
        
    })

})//document