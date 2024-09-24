

// productBrowsing 
// 宣告三個背景變數
let bgsvc_1 = "";
let bgsvc_2 = "";
let bgsvc_3 = "";
// 宣告三個換圖輪播變數
let templatesA = '';
let templatesB = '';
let templatesC = '';

// 宣告點選到輪播的templates變數
let templatesDIV = '';

function getTemplatesDiv() {
	// 1.先取得操作的標籤div
	templatesADiv = document.querySelector('.templatesA');
	templatesBDiv = document.querySelector('.templatesB');
	templatesCDiv = document.querySelector('.templatesC');
	bgsvc_1Div = document.querySelector('.bgsvc_1');
	bgsvc_2Div = document.querySelector('.bgsvc_2');
	bgsvc_3Div = document.querySelector('.bgsvc_3');

	// 2.再對標籤div操作
	templatesADiv.style.display = "none";
	templatesBDiv.style.display = "none";
	templatesCDiv.style.display = "none";
	bgsvc_1Div.style.display = "none";
	bgsvc_2Div.style.display = "none";
	bgsvc_3Div.style.display = "none";
}

function changeJersey() {
	getTemplatesDiv();
	templatesDIV = $('.templatesA');
	templatesADiv.style.display = "flex";
	bgsvc_1Div.style.display = "flex";
}

function changeSweat() {
	getTemplatesDiv();
	templatesDIV = $('.templatesB');
	templatesBDiv.style.display = "flex";
	bgsvc_2Div.style.display = "flex";
}
function changeShorts() {
	getTemplatesDiv();
	templatesDIV = $('.templatesC');
	templatesCDiv.style.display = "flex";
	bgsvc_3Div.style.display = "flex";
}

// 以下是按鈕
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

// 下面為換圖輪播
function slideCarousel(direction) {
	var templateSize = 369 // technically 192px, but accounting for 16px margin
	var templates = templatesDIV
	// create variable for width
	var templateWidth = 0
	// add width of each template tile
	templates.each(function () {
		templateWidth += $(this).outerWidth(true);
	});
	// the amount we want to scroll the templates
	var paginationSize = templates.parent().width();

	// for sliding right
	if (direction == "right") {

		// get the current position of the templates
		var currentTemplatePos = parseInt(templates.css('left'))
		// the new position of the templates after shifting
		var newTemplatePos = currentTemplatePos - paginationSize

		// if the arrow is visible
		if ($('#carousel-right').hasClass('showing')) {
			// if the templates are at zer state
			if (currentTemplatePos == 0) {
				// move them a little farther than pagination so they're not covered by the arrows
				newTemplatePos = currentTemplatePos - paginationSize
			}
			// move templates to the newly defined position
			templates.css("left", newTemplatePos + "px");
			// if templates have been moved
			if (newTemplatePos < 0) {
				// show the left arrow
				$('#carousel-left').addClass('showing');
			}
			// if we're on the last "page" of templates
			if (-(newTemplatePos) > (templateWidth - paginationSize)) {
				// hide the right arrow
				$('#carousel-right').removeClass('showing');
			}
			// if the arrow isn't visible
		} else {
			// dont' do anything
			return
		}
	}

	// for sliding left
	if (direction == "left") {

		var currentTemplatePos = parseInt(templates.css('left'))
		var newTemplatePos = currentTemplatePos + templates.parent().width();

		// if left arrow is visible
		if ($('#carousel-left').hasClass('showing')) {
			// if the template "page" is close to zero state
			if (currentTemplatePos > -templates.parent().width()) {
				// set it to zero state
				templates.css("left", 0 + "px");
			} else {
				// otherwise navigate to new position
				templates.css("left", newTemplatePos + "px");
			}
			// if the templates are at zero state
			if (newTemplatePos >= 0) {
				// show the right arrow
				$('#carousel-right').addClass('showing');
				// hide the left arrow
				$('#carousel-left').removeClass('showing');
			}
			// if not on the last "page" of the templates
			if (-(newTemplatePos) < (templateWidth - paginationSize)) {
				// show the right arrow again
				$('#carousel-right').addClass('showing');
			}
			// if left arrow isn't visible
		} else {
			// do nothing
			return
		}
	}

};

$(document).ready(function () {
	$('#carousel-left').click(function () {
		slideCarousel("left");
	});

	$('#carousel-right').click(function () {
		slideCarousel("right");
	});

	changeJersey();
});

// 在这里添加初始化代码
$(document).ready(function () {
	changeJersey(); // 或 changeSweat(); 根据你的默认显示需求
});

$(document).ready(function () {

	// 使用事件委託，將事件處理器綁定到已存在的父級元素
	$('body').on('click', '.collection', function () {
		$('#collectionWindow').fadeIn();

		//  視窗3秒自動關閉
		setTimeout(function () {
			$('#collectionWindow').fadeOut();
		}, 3000);
	});

});


