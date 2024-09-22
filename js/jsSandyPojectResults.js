function changemenu1() {
    // 按下menu-1顯示物件
    document.querySelector('.projectTheme').style.zIndex = '2';
    document.querySelector('.projectTheme1').style.zIndex = '1';
    document.querySelector('.projectTheme').style.display = 'block';
    document.querySelector('.textWatermark').style.display = 'block';
    document.querySelector('.pjWord').style.display = 'block';
    document.querySelector('#projectjJersey').style.display = 'block';
    document.querySelector('.pjBox__list').style.display = 'flex';
    // 按下menu-1顯示隱藏
    // document.querySelector('.projectTheme1').style.display='none';
    document.querySelector('.textWatermark1').style.display = 'none';
    document.querySelector('.textWatermark2').style.display = 'none';
    document.querySelector('.pjWord1').style.display = 'none'
    document.querySelector('.pjWord2').style.display = 'none'
    document.querySelector('.pjBox__list1').style.display = 'none'
}

function changemenu2() {
    document.querySelector('.projectTheme1').style.zIndex = '2';
    document.querySelector('.projectTheme').style.zIndex = '1';
    document.querySelector('.projectTheme1').style.display = 'block';
    document.querySelector('.textWatermark1').style.display = 'block';
    document.querySelector('.pjWord1').style.display = 'block';
    document.querySelector('#projectjJersey').style.display = 'block';
    document.querySelector('.pjBox__list1').style.display = 'flex';

    // document.querySelector('.projectTheme').style.display='none';
    document.querySelector('.textWatermark').style.display = 'none';
    document.querySelector('.textWatermark2').style.display = 'none';
    document.querySelector('.pjWord').style.display = 'none'
    document.querySelector('.pjWord2').style.display = 'none'
    document.querySelector('.pjBox__list').style.display = 'none'
}

