function changemenu1(){
    // 按下menu-1顯示物件
    document.querySelector('.projectTheme').style.zIndex = '2';
    document.querySelector('.projectTheme1').style.zIndex = '1';
    document.querySelector('.projectTheme').style.display = 'block';
    document.querySelector('.textWatermark').style.display='block';
    document.querySelector('.pjWord').style.display='block';
    document.querySelector('#projectjJersey').style.display='block';
    document.querySelector('.pjBox__list').style.display='flex';
    // 按下menu-1顯示隱藏
    // document.querySelector('.projectTheme1').style.display='none';
    document.querySelector('.textWatermark1').style.display='none';
    document.querySelector('.textWatermark2').style.display='none';
    document.querySelector('.pjWord1').style.display='none'
    document.querySelector('.pjWord2').style.display='none'
    document.querySelector('.pjBox__list1').style.display='none'
}

function changemenu2(){
    document.querySelector('.projectTheme1').style.zIndex = '2';
    document.querySelector('.projectTheme').style.zIndex = '1';
    document.querySelector('.projectTheme1').style.display = 'block';
    document.querySelector('.textWatermark1').style.display='block';
    document.querySelector('.pjWord1').style.display='block';
    document.querySelector('#projectjJersey').style.display='block';
    document.querySelector('.pjBox__list1').style.display='flex';

    // document.querySelector('.projectTheme').style.display='none';
    document.querySelector('.textWatermark').style.display='none';
    document.querySelector('.textWatermark2').style.display='none';
    document.querySelector('.pjWord').style.display='none'
    document.querySelector('.pjWord2').style.display='none'
    document.querySelector('.pjBox__list').style.display='none'
}
$(document).ready(function () {
    let arrow_flag=false;
// 一開始.arrow不顯示
// $(".arrow").hide();
    
$(window).scroll(function() {
    checkArrowVisibility(); 
});
// 點擊#menu
$('#menu-1').click(function () {
    arrow_flag=true;
    changemenu1();
    // 如果頁面置頂時 .arrow才顯示反之則隱藏
    if ($(window).scrollTop() === 0) {
        $(".arrow").show();
    } else {
        $(".arrow").hide();
    }
});
$('#menu-2').click(function () {
    arrow_flag=true;
    changemenu2();
    if ($(window).scrollTop() === 0) {
        $(".arrow").show();
    } else {
        $(".arrow").hide();
    }
});

// 點擊.arrow 頁面自動滑到指定位置顯示3個球衣照
$(".arrow").click(function() {
var scrollPosition = $(document).height() * 0.4;  // 要用百分比才符合RWD 不然1920無法全部顯示3個球衣照
// 使用動畫將頁面滑動到計算的百分比位置
$('html, body').animate({scrollTop: scrollPosition}, 1000);
// 點擊後隱藏 .arrow 按鈕
$(this).hide();
});

// 檢查頁面是否置頂 如置頂不顯示.arrow
function checkArrowVisibility() {
    if ($(window).scrollTop() === 0) {
        $(".arrow").hide(); // 顯示 .arrow
    } else {
        if(arrow_flag==true){
            $(".arrow").hide();
        }
         // 隱藏 .arrow
    }
}
});

