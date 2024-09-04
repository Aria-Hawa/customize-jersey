const slider = document.querySelector('.slider');



function activate(e) {
  const items = document.querySelectorAll('.itemImg');
  e.target.matches('.right') && slider.append(items[0])
  e.target.matches('.left') && slider.prepend(items[items.length-1]);
}

document.addEventListener('click',activate,false);

setInterval(() => {
  const items = document.querySelectorAll('.itemImg');
  slider.append(items[0]); // 自動向右切換圖片
}, 4000);