document.addEventListener('DOMContentLoaded', function () {
    const selectedProduct = localStorage.getItem('selectedProduct');
    const products = {
        A: {
            Name: 'Style A',
            Introduction: '款式AAAAAAAAAAAAAA',
            Price: 'NT$1000',
            Color1: "綠",
            Color2: "藍",
            Color3: "綠",
        },
        B: {
            Name: 'Style B',
            Introduction: '款式BBBBBBBBBBBBBB',
            Price: 'NT$1100',
            Color1: "橘",
            Color2: "紅",
            Color3: "橘",
        },
        C: {
            Name: 'Style C',
            Introduction: '款式CCCCCCCCCCCCCCC',
            Price: 'NT$900',
            Color1: "藍",
            Color2: "紫",
            Color3: "藍",
        }
    };
    const productClasses = {
        A: ['svcA-1', 'svcA-1-back', 'svcA-2', 'svcA-2-back'],
        B: ['svcA-3', 'svcA-3-back', 'svcA-4', 'svcA-4-back'],
        C: ['svcA-5', 'svcA-5-back', 'svcA-6', 'svcA-6-back'],
        D: ['svcA-5', 'svcA-5-back', 'svcA-6', 'svcA-1-back'],
    };
    if (selectedProduct && products[selectedProduct]) {
        // 根據 selectedProduct 更新頁面中的商品資訊
        const product = products[selectedProduct];
        document.getElementById('productName').innerText = product.Name;
        document.getElementById('productIntroduction').innerText = product.Introduction;
        document.getElementById('productPrice').innerText = product.Price;
        document.getElementById('productColor1').innerText = product.Color1;
        document.getElementById('productColor2').innerText = product.Color2;
        document.getElementById('productColor3').innerText = product.Color3;

        const smallPictureDivs = document.querySelectorAll('.smallPicture .small');
        const selectedClasses = productClasses[selectedProduct];
        smallPictureDivs.forEach((div, index) => {
            div.classList.add(selectedClasses[index]);
        });

        // 動態更新換大圖的功能
        function swap1() {
            document.getElementById('picL').className = `bigPicture ${selectedClasses[0]}`;
        }
        function swap2() {
            document.getElementById('picL').className = `bigPicture ${selectedClasses[1]}`;
        }
        function swap3() {
            document.getElementById('picL').className = `bigPicture ${selectedClasses[2]}`;
        }
        function swap4() {
            document.getElementById('picL').className = `bigPicture ${selectedClasses[3]}`;
        }

        // 如果小圖有事件綁定，則可以將上述 swap 函數與小圖點擊事件關聯起來
        smallPictureDivs[0].addEventListener('mouseover', swap1);
        smallPictureDivs[1].addEventListener('mouseover', swap2);
        smallPictureDivs[2].addEventListener('mouseover', swap3);
        smallPictureDivs[3].addEventListener('mouseover', swap4);

        swap1();
    } else {
        // 如果沒有找到商品資訊，顯示錯誤訊息
        document.getElementById('introduction').innerText = '未選擇任何商品';
    }
 
});
// 按鈕點擊變色
function changeBorder(selectedElement) {
    // 先获取所有具有 "size" 类的元素
    let colorElements = document.querySelectorAll('.color');

    // 遍历所有元素，将它们的边框颜色重置为白色
    colorElements.forEach(function (element) {
        element.style.borderColor = '#ffffff';
        element.style.backgroundColor = '#013B63';
        element.style.color = '#ffffff';
    });

    // 将选中的元素的边框颜色设置为黑色
    selectedElement.style.borderColor = '#FEB75D';
    selectedElement.style.backgroundColor = '#FEB75D';
    selectedElement.style.color = '#013B63';
}
function changeBorderB(selectedElementB) {
    // 先获取所有具有 "size" 类的元素
    let sizeElements = document.querySelectorAll('.size');

    // 遍历所有元素，将它们的边框颜色重置为白色
    sizeElements.forEach(function (element) {
        element.style.borderColor = '#ffffff';
        element.style.backgroundColor = '#013B63';
        element.style.color = '#ffffff';
    });

    // 将选中的元素的边框颜色设置为黑色
    selectedElementB.style.borderColor = '#FEB75D';
    selectedElementB.style.backgroundColor = '#FEB75D';
    selectedElementB.style.color = '#013B63';

    document.getElementById("changeBorderB").innerText = "尺寸: " + size;
}

// 購物車數量+-
// 宣告執行變數
let num = 1
let btn_1 = document.getElementById("btn_1");
let btn1 = document.getElementById("btn1");
let quantityNum = document.getElementById("quantityNum");

btn_1.addEventListener("click", () => {
    if (num > 1) {
        num--;
        quantityNum.textContent = num;
    };

});

btn1.addEventListener("click", () => {
    num++;
    quantityNum.textContent = num;
});

document.getElementById('buyNowBtn').addEventListener('click', function () {
    window.location.href = './chooseProject_text.html';
});

$(document).ready(function () {
    // 尺寸表彈出
    // 當需要顯示彈出視窗時
    $('#showPopup').on('click', function () {
      $('#popup').fadeIn();
    });

    // 當需要關閉彈出視窗時
    $('#closePopup').on('click', function () {
      console.log('觸發成功')
      $('#popup').fadeOut();
    });

    // 成功加入購物車
    // 當需要顯示彈出視窗時
    $('#shoppingCart').on('click', function () {
        $('#shoppingSuccess').fadeIn();
  
        //  視窗3秒自動關閉
        setTimeout(function () {
          $('#shoppingSuccess').fadeOut();
        }, 2000);
      });

  });

