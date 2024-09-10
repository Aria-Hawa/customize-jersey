$(document).ready(function(){
    $('.viewProduct').click(function(e){
        e.preventDefault();
        const productId = $(this).data('product'); // 獲取點擊商品的 data-product 屬性
        localStorage.setItem('selectedProduct', productId); // 將商品資訊保存到 localStorage
        window.location.href = './sandytext-2.html'; // 跳轉到內頁
    });
});