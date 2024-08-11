
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

function display3rdStep () {
    textStepDisplayNone();
    textArea3rd.style.display = 'flex';
}