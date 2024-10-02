
const slider = document.querySelector('.slider');
let autoSwitchInterval;

// 定義一個函數來啟動自動切換
function startAutoSwitch() {
  autoSwitchInterval = setInterval(() => {
    const items = document.querySelectorAll('.itemImg');
    slider.append(items[0]); // 自動向右切換圖片
  }, 5000);
}

// 停止自動切換
function stopAutoSwitch() {
  clearInterval(autoSwitchInterval);
}

// 點擊處理函數
function activate(e) {
  const items = document.querySelectorAll('.itemImg');

  // 如果點擊的是右邊的控制
  if (e.target.matches('.right')) {
    slider.append(items[0]);
  } 
  // 如果點擊的是左邊的控制
  else if (e.target.matches('.left')) {
    slider.prepend(items[items.length - 1]);
  }

  // 每次點擊後重新計算自動切換的秒數
  stopAutoSwitch();
  startAutoSwitch();
}

// 監聽點擊事件，當點擊 .right 或 .left 時觸發
document.addEventListener('click', activate, false);

// 初次啟動自動切換
startAutoSwitch();

document.addEventListener("DOMContentLoaded", function() {
  const btnA = document.querySelector('.btnA');
  const btnB = document.querySelector('.btnB');
  let toggle = true; // 用於切換狀態

  // // 初次延遲 4 秒後啟動
  // setTimeout(() => {
  //   setInterval(() => {
  //     if (toggle) {
  //       simulateHover(btnA);
  //     } else {
  //       simulateHover(btnB);
  //     }
  //     toggle = !toggle; // 切換按鈕
  //   }, 4000);
  // }, 4000);
});