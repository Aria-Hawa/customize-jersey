// 讀取上一頁商品資訊
// 從localStorage抓取
document.addEventListener('DOMContentLoaded', function () {
    // 從 localStorage 取得 shape 的值
    const shapeValue = localStorage.getItem('shape');
    const priceValue = localStorage.getItem('price');
    const IntroductionValue = localStorage.getItem('introduce');

    // 檢查 shape 是否存在且有值
    if (shapeValue) {
        // 將 shapeValue 設定為 #productName 的文字
        document.getElementById('productName').textContent = shapeValue;
    }
    if (priceValue) {
        // 將 shapeValue 設定為 #productName 的文字
        document.getElementById('productPrice').textContent = priceValue;
    }
    if (IntroductionValue) {
        // 將 shapeValue 設定為 #productName 的文字
        document.getElementById('productIntroduction').textContent = IntroductionValue;
    }

    const productNameNEW = document.querySelector("#productName")
    const selectedProduct = localStorage.getItem('selectedProduct');
    const products = {
        A1: {
            Color1: "綠黃",
            Color2: "丈青橘",
            Color3: "淺藍粉",
            Color4: "display:none"
        },
        A2: {
            Color1: "髒橘黃",
            Color2: "暗紅黃",
            Color3: "亮紫黃",
            Color4: "display:none"
        },
        A3: {
            Color1: "丈青橘",
            Color2: "暗紫橘",
            Color3: "深綠黃",
            Color4: "display:none"
        },
        A4: {
            Color1: "全身紅",
            Color2: "純黑粉",
            Color3: "深綠黃",
            Color4: "display:none"
        },
        B1: {
            Color1: "活力橘",
            Color2: "爵士黑",
            Color3: "海軍藍",
            Color4: "森林綠",
        },
        B2: {
            Color1: "戀愛粉",
            Color2: "亮橘黃",
            Color3: "神秘紫",
            Color4: "螢光綠",
        },
        B3: {
            Color1: "蘋果紅",
            Color2: "薄荷藍",
            Color3: "神秘灰",
            Color4: "青草綠",
        },
        C1: {
            Color1: "丈青藍",
            Color2: "神秘黑",
            Color3: "display:none",
            Color4: "display:none",
        },
        C2: {
            Color1: "深墨綠",
            Color2: "海軍藍",
            Color3: "display:none",
            Color4: "display:none",
        },
        C3: {
            Color1: "焦糖棕",
            Color2: "神秘黑",
            Color3: "display:none",
            Color4: "display:none",
        }
    };

    const productClasses = {
        A1: ['svcA-1', 'svcA-2', 'svcA-2-back', 'svcA-1-back'],
        A2: ['svcA-3', 'svcA-4', 'svcA-4-back', 'svcA-3-back'],
        A3: ['svcA-5', 'svcA-6', 'svcA-6-back', 'svcA-5-back'],
        A4: ['svcA-7', 'svcA-8', 'svcA-8-back', 'svcA-7-back'],
        B1: ['svcB-1-1', 'svcB-1-2', 'svcB-1-3', 'svcB-1-4'],
        B2: ['svcB-2-1', 'svcB-2-2', 'svcB-2-3', 'svcB-2-4'],
        B3: ['svcB-3-1', 'svcB-3-2', 'svcB-3-3', 'svcB-3-4'],
        C1: ['svcC-1', 'svcC-1-2'],
        C2: ['svcC-2', 'svcC-2-1'],
        C3: ['svcC-3', 'svcC-3-1'],
    };


    // 檢查 localStorage 中是否有之前儲存的 picL className，並恢復
    const savedClassName = localStorage.getItem('picLClassName');
    if (savedClassName) {
        document.getElementById('picL').className = savedClassName;
    }

    if (selectedProduct && products[selectedProduct]) {
        // 根據 selectedProduct 更新頁面中的商品資訊
        const product = products[selectedProduct];
        document.getElementById('productColor1').innerText = product.Color1;
        document.getElementById('productColor2').innerText = product.Color2;
        document.getElementById('productColor3').innerText = product.Color3;

        // 定義顏色的陣列
        const color = ['Color4', 'Color3'];

        // 迴圈遍歷每個顏色屬性
        color.forEach(color => {
            const element = document.getElementById(`product${color}`);
            if (product[color] === "display:none") {
                element.style.display = 'none';
            } else {
                element.innerText = product[color];
                element.style.display = 'block'; // 確保顯示
            }
        });
        // if (product.Color4 === "display:none") {
        //     // 更改 CSS
        //     document.getElementById('productColor4').style.display = 'none';
        // } else {
        //     // 更改 HTML
        //     document.getElementById('productColor4').innerText = product.Color4;
        //     document.getElementById('productColor4').style.display = 'block'; // 確保顯示
        // }


        // 將商品名稱儲存到 localStorage
        localStorage.setItem('selectedProductName', productName.innerText);

        const smallPictureDivs = document.querySelectorAll('.smallPicture .small');
        const selectedClasses = productClasses[selectedProduct];
        smallPictureDivs.forEach((div, index) => {
            div.classList.add(selectedClasses[index]);
        });

        // 儲存 #picL 的 className 到 localStorage 的函數
        function saveClassNameToLocalStorage() {
            const picLClassName = document.getElementById('picL').className;
            localStorage.setItem('picLClassName', picLClassName);
        }

        // 動態更新換大圖的功能
        function swap1() {
            document.getElementById('picL').className = `bigPicture ${selectedClasses[0]}`;
            saveClassNameToLocalStorage()
        }
        function swap2() {
            document.getElementById('picL').className = `bigPicture ${selectedClasses[1]}`;
            saveClassNameToLocalStorage()
        }
        function swap3() {
            document.getElementById('picL').className = `bigPicture ${selectedClasses[2]}`;
            saveClassNameToLocalStorage()
        }
        function swap4() {
            document.getElementById('picL').className = `bigPicture ${selectedClasses[3]}`;
            saveClassNameToLocalStorage()
        }

        document.getElementById('productColor1').addEventListener('click', function () {
            changeBorder(this);
            swap1(); // 切换大图
        });
        document.getElementById('productColor2').addEventListener('click', function () {
            changeBorder(this);
            swap2(); // 切换大图
        });
        document.getElementById('productColor3').addEventListener('click', function () {
            changeBorder(this);
            swap3(); // 切换大图
        });
        document.getElementById('productColor4').addEventListener('click', function () {
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

    // 儲存點擊尺寸資料
    localStorage.setItem('selectedColor', selectedElement.innerText); // 修正變數名稱

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

    // 儲存點擊顏色資料
    localStorage.setItem('selectedSize', selectedElementB.innerText);
}

// 購物車數量+-
// 宣告執行變數
let btn_1 = document.getElementById("btn_1");
let btn1 = document.getElementById("btn1");
let quantityNum = document.getElementById("quantityNum");

let num = 1 ;
localStorage.setItem('selectedNum', num); // 將 localStorage 的值設為 1
// 將頁面上的數量顯示設置為讀取到的數量
quantityNum.textContent = num;

// 更新 localStorage 的函數
function updateLocalStorage() {
    localStorage.setItem('selectedNum', num);
}

btn_1.addEventListener("click", () => {
    if (num > 1) {
        num--;
        quantityNum.textContent = num;
        updateLocalStorage(); // 更新 localStorage
    };

});

btn1.addEventListener("click", () => {
    num++;
    quantityNum.textContent = num;
    updateLocalStorage(); // 更新 localStorage
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
            window.location.href = './doubleCheck.html';
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

// 下方三個的
$(document).ready(function () {
    $('.pbTBtn').click(function (e) {
        e.preventDefault();
        const productId = $(this).data('product'); // 獲取點擊商品的 data-product 屬性
        localStorage.setItem('selectedProduct', productId); // 將商品資訊保存到 localStorage
        window.location.href = './commodity_text.html'; // 跳轉到內頁
    });
});



