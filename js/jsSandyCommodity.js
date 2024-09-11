document.addEventListener('DOMContentLoaded', function () {
    const selectedProduct = localStorage.getItem('selectedProduct');
    const products = {
        A: {
            Name: 'Style A',
            Introduction: '款式AAAAAAAAAAAAAA',
            Price: 'NT$1000',
            Color1: "綠黃",
            Color2: "丈青橘",
            Color3: "淺藍粉",
        },
        B: {
            Name: 'Style B',
            Introduction: '款式BBBBBBBBBBBBBB',
            Price: 'NT$1100',
            Color1: "髒橘黃",
            Color2: "暗紅黃",
            Color3: "亮紫黃",
        },
        C: {
            Name: 'Style C',
            Introduction: '款式CCCCCCCCCCCCCCC',
            Price: 'NT$900',
            Color1: "丈青橘",
            Color2: "暗紫橘",
            Color3: "深綠黃",
        },
        D: {
            Name: 'Style D',
            Introduction: '款式DDDDDDDDDDDDDDD',
            Price: 'NT$900',
            Color1: "全身紅",
            Color2: "純黑粉",
            Color3: "深綠黃",
        }
    };
    const productClasses = {
        A: ['svcA-1', 'svcA-1-back', 'svcA-2', 'svcA-2-back'],
        B: ['svcA-3', 'svcA-3-back', 'svcA-4', 'svcA-4-back'],
        C: ['svcA-5', 'svcA-5-back', 'svcA-6', 'svcA-6-back'],
        D: ['svcA-7', 'svcA-7-back', 'svcA-8', 'svcA-8-back'],
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
        
        document.getElementById('productColor1').addEventListener('click', function () {
            changeBorder(this);
            swap1(); // 切换大图
        });
        document.getElementById('productColor2').addEventListener('click', function () {
            changeBorder(this);
            swap3(); // 切换大图
        });
        document.getElementById('productColor3').addEventListener('click', function () {
            changeBorder(this);
            swap4(); // 切换大图
        });

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

// 初始化两个标志位，用于追踪是否点击了changeBorder和changeBorderB
let borderSelected = false; // 用于追踪颜色选择
let borderBSelected = false; // 用于追踪尺寸选择

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

    borderSelected = true;
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

    borderBSelected = true;
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

    $('#shoppingCart').on('click', function () {
        // 检查是否同时选择了颜色和尺寸
        if (borderSelected && borderBSelected) {
            $('#shoppingSuccess').fadeIn();
            
            // 视窗3秒自动关闭
            setTimeout(function () {
                $('#shoppingSuccess').fadeOut();
            }, 2000);
        } else {
            // 提示用户需要选择颜色和尺寸
            $('#failWindow').fadeIn();
            
            // 视窗3秒自动关闭
            setTimeout(function () {
                $('#failWindow').fadeOut();
            }, 2000);
        }
    });

    $('#buyNowBtn').on('click', function () {
        // 检查是否同时选择了颜色和尺寸
        if (borderSelected && borderBSelected) {
            window.location.href = './chooseProject.html';
        } else {
            // 提示用户需要选择颜色和尺寸
            $('#failWindow').fadeIn();
            
            // 视窗3秒自动关闭
            setTimeout(function () {
                $('#failWindow').fadeOut();
            }, 2000);
        }
    });
});
// 下方推薦商品BTN顯示
let pbTBtnDiv = '';
function getDiv(curNum) {
	pbTBtnDiv = document.getElementById('pb' + curNum);
	console.log(pbTBtnDiv);
	// pbTBtnDiv = document.querySelector('.pbTBtn');

}
function showBtn(pbNum) {
	getDiv(pbNum);

	pbTBtnDiv.style.display = "flex";

}
function turnoffBtn(pbNum) {
	getDiv(pbNum);
	pbTBtnDiv.style.display = "none";
}

$(document).ready(function(){
    $('.pbTBtn').click(function(e){
        e.preventDefault();
        const productId = $(this).data('product'); // 獲取點擊商品的 data-product 屬性
        localStorage.setItem('selectedProduct', productId); // 將商品資訊保存到 localStorage
        window.location.href = './commodity_text.html'; // 跳轉到內頁
    });
});
