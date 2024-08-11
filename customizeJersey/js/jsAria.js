
//styleInfo區域動態顯示
let shapeAreaDiv = document.querySelector('#shapeArea');
let designAreaDiv = document.querySelector('#designArea');
// let textAreaDiv = document.querySelector('#textArea');
// let colorAreaDiv = document.querySelector('#colorArea');
// let pictureAreaDiv = document.querySelector('#pictureArea');
// let numberAreaDiv = document.querySelector('#numberArea');

function displayNone() {
    shapeAreaDiv = document.querySelector('#shapeArea');
    designAreaDiv = document.querySelector('#designArea');
    // textAreaDiv = document.querySelector('#textArea');
    // colorAreaDiv = document.querySelector('#colorArea');
    // pictureAreaDiv = document.querySelector('#pictureArea');
    // numberAreaDiv = document.querySelector('#numberArea');

    shapeAreaDiv.style.display = 'none';
    designAreaDiv.style.display = 'none';
    // preTextDiv.style.display = 'none';
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