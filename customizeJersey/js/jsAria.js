
// 使用jQuery
$(function(){

    // 按下#lblForTextFonts的.arrow 
    // 1.新增.arrow的.beClick類別
    // 2.新增#chooseTextFonts的.show類別
    $('#lblForTextFonts .arrow').click(function () {
        $('#lblForTextFonts .arrow').toggleClass('beClick');
        $('#chooseTextFonts').toggleClass('show');
    })

    // 按下#lblForTextColor的.arrow
    // 1. 新增.arrow的.beClick類別
    // 2. 新增#chooseTextFonts的.show類別
    $('#lblForTextColor .arrow').click(function () {
        $('#chooseTextColor').toggleClass('show');
        $('#lblForTextColor .arrow').toggleClass('beClick');
    })




















})















//styleInfo區域動態顯示
let shapeAreaDiv = document.querySelector('#shapeArea');
let designAreaDiv = document.querySelector('#designArea');
let textAreaDiv = document.querySelector('#textArea');
// let colorAreaDiv = document.querySelector('#colorArea');
// let pictureAreaDiv = document.querySelector('#pictureArea');
// let numberAreaDiv = document.querySelector('#numberArea');

function displayNone() {
    shapeAreaDiv = document.querySelector('#shapeArea');
    designAreaDiv = document.querySelector('#designArea');
    textAreaDiv = document.querySelector('#textArea');
    // colorAreaDiv = document.querySelector('#colorArea');
    // pictureAreaDiv = document.querySelector('#pictureArea');
    // numberAreaDiv = document.querySelector('#numberArea');

    shapeAreaDiv.style.display = 'none';
    designAreaDiv.style.display = 'none';
    textAreaDiv.style.display = 'none';
    // preColorDiv.style.display = 'none';
    // prePictureDiv.style.display = 'none';
    // preNumberDiv.style.display = 'none';
}

function displayShape() {
    displayNone();
    shapeAreaDiv.style.display = 'flex';
}

function displayDesign() {
    displayNone();
    designAreaDiv.style.display = 'flex';
}

function displayText() {
    displayNone();
    textAreaDiv.style.display = 'flex';
    // textArea2nd.style.display = 'none';
    // textArea3rd.style.display = 'none';
}

//textArea步驟動態顯示
let textArea1st = document.querySelector('#textArea-1st');
let textArea2nd = document.querySelector('#textArea-2nd');
let textArea3rd = document.querySelector('#textArea-3rd');

function textStepDisplayNone() {
    textArea1st = document.querySelector('#textArea-1st');
    textArea2nd = document.querySelector('#textArea-2nd');
    textArea3rd = document.querySelector('#textArea-3rd');

    textArea1st.style.display = 'none';
    textArea2nd.style.display = 'none';
    textArea3rd.style.display = 'none';
}

function display1stStep() {
    textStepDisplayNone();
    textArea1st.style.display = 'flex';
}

function display2ndStep() {
    textStepDisplayNone();
    textArea2nd.style.display = 'flex';
}

function display3rdStep() {
    textStepDisplayNone();
    textArea3rd.style.display = 'flex';
}

// 讓用戶在textArea-1st 輸入的文字呈現在textArea-3rd的文字方塊內
let getTextStyleInput = document.getElementById('textStyle');
let getTextWordsValue = document.getElementById('textWords');
function showTextStyleInputValue() {
    getTextStyleInput = getTextStyleInput.value
    getTextWordsValue = document.getElementById('textWords');
    getTextWordsValue.value = getTextStyleInput;
    console.log(getTextWordsValue);
}

