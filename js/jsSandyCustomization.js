function sizeMune_T(){
  document.querySelector('.sizeMune_T').style.display = 'table';
  document.querySelector('.sizeMune_S').style.display = 'none';
  document.querySelector('.sizeMune_Timg').style.display = 'flex';
  document.querySelector('.sizeMune_Simg').style.display = 'none';
}
function sizeMune_S(){
  document.querySelector('.sizeMune_T').style.display = 'none';
  document.querySelector('.sizeMune_S').style.display = 'table';
  document.querySelector('.sizeMune_Timg').style.display ='none';
  document.querySelector('.sizeMune_Simg').style.display = 'flex';
}

$(function () {
    // 啟用 JQ ui tabs 頁籤效果
    $("#tabs").tabs();
  });