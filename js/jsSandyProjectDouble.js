
// sandy_開始
// 讀取上一頁購物車資訊
document.addEventListener('DOMContentLoaded', function () {
    // 從 localStorage 中讀取 selectedName 和 selectedColor
    const selectedName = localStorage.getItem('selectedProductName');
    const selectedColor = localStorage.getItem('selectedColor');

    // 組合成顯示字串，如果有值才顯示，否則顯示預設訊息
    const displayText = (selectedName && selectedColor) ? `${selectedName}_${selectedColor}` : '商品名稱_顏色';

    // 更新 .captionLeft 的 <p> 標籤內容
    const captionLeftParagraph = document.querySelector('.captionLeft p');
    if (captionLeftParagraph) {
        captionLeftParagraph.innerText = displayText;
    }
    const picLClassName = localStorage.getItem('picLClassName');
    if (picLClassName) {
        // 拆分 className 並取最後一個值
        const classList = picLClassName.split(' ');
        console.log(classList.length);
        const lastClass = classList[classList.length - 1]; // 取得最後一個 class 值

        // 將最後一個 class 值新增到 <figure> 標籤中
        const figureElement = document.querySelector('.captionLeft figure');
        if (figureElement) {
            figureElement.classList.add(lastClass);
        }}
});



