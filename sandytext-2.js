document.addEventListener('DOMContentLoaded', function () {
    // 從 localStorage 獲取商品 ID
    const selectedProduct = localStorage.getItem('selectedProduct');

    // 定義商品資料
    const products = {
        A: {
            title: '商品 A',
            image: './images/productA.jpg',
            description: '這是商品 A 的描述內容'
        },
        B: {
            title: '商品 B',
            image: './images/productB.jpg',
            description: '這是商品 B 的描述內容'
        },
        C: {
            title: '商品 C',
            image: './images/productC.jpg',
            description: '這是商品 C 的描述內容'
        },
        D: {
            title: '商品 D',
            image: './images/productD.jpg',
            description: '這是商品 D 的描述內容'
        }
    };

    if (selectedProduct && products[selectedProduct]) {
        // 根據 selectedProduct 更新頁面中的商品資訊
        const product = products[selectedProduct];
        document.getElementById('productTitle').innerText = product.title;
        document.getElementById('productImage').src = product.image;
        document.getElementById('productDescription').innerText = product.description;
    } else {
        // 如果沒有找到商品資訊，顯示錯誤訊息
        document.getElementById('productInfo').innerText = '未選擇任何商品';
    }
});