document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.product');
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    const productInfo = document.getElementById('product-info');
    const otherProducts = document.getElementById('other-products');
    const backButton = document.getElementById('back');

    products.forEach(product => {
        product.addEventListener('click', () => {
            const selectedProduct = product.getAttribute('data-product');
            showProductDetails(selectedProduct);
        });
    });

    backButton.addEventListener('click', () => {
        page2.classList.add('hidden');
        page1.classList.remove('hidden');
    });

    function showProductDetails(selectedProduct) {
        // 切換頁面顯示
        page1.classList.add('hidden');
        page2.classList.remove('hidden');

        // 顯示被選中商品的介紹
        productInfo.textContent = `商品${selectedProduct}的詳細介紹`;

        // 顯示其他商品
        otherProducts.innerHTML = ''; // 清空先前顯示的商品
        products.forEach(product => {
            const productName = product.getAttribute('data-product');
            if (productName !== selectedProduct) {
                const otherProductDiv = document.createElement('div');
                otherProductDiv.textContent = `商品${productName}`;
                otherProducts.appendChild(otherProductDiv);
            }
        });
    }
});