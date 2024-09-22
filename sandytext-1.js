document.addEventListener('DOMContentLoaded', function () {
    const selectedProduct = localStorage.getItem('selectedProduct');
    const products = {
        A: {
            Color1:"黑",
            Color2:"黑",
            Color3:"display:none",
            Color4:"display:none"
        },
        B: {
            Color1:"黑",
            Color2:"display:none",
            Color3:"display:none",
            Color4:"display:none"
        },
        C: {
            Color1:"黑",
            Color2:"黑",
            Color3:"黑",
            Color4:"display:none"
        },
        D: {
            Color1:"黑",
            Color2:"display:none",
            Color3:"display:none",
            Color4:"display:none"
        },
        AA:{
            Color1:"黑",
            Color2:"display:none",
            Color3:"display:none",
            Color4:"display:none"
        }
    };
   
    if (selectedProduct && products[selectedProduct]) {
        // 根據 selectedProduct 更新頁面中的商品資訊
        const product = products[selectedProduct];

        document.getElementById('productColor4').style = product.Color4;

    } else {
        // 如果沒有找到商品資訊，顯示錯誤訊息
        document.getElementById('introduction').innerText = '還在努力設連結中><';
    }
 
});