// 使用jQuery
$(function () {

    // .tableCaption click時改變arrow即展開下表
    $(document).on('click', '.tableCaption', function () {
        // .arrow旋轉
        $(this).find('.arrow').toggleClass('beClick');
        // 新增.show類別
        $(this).closest('.table').find('table').toggleClass('show');
        $(this).closest('.tableCaption').toggleClass('show');
    });

    // 當table表格新增件數欄位click時
    $(document).on('click', '.tableFoot', function () {
        // 取得<table>和<tbody>
        let getTable = $(this).closest('table');
        let getTbody = $(getTable).find('tbody:last');
        // 建立變數儲存 複製後的<tbody>
        let newTbody = $(getTbody).clone();
        // 清空<tobdy>的內容 =>Chatgpt
        $(newTbody).find('input').val('');
        $(newTbody).find('select').find('option').val('');
        $(newTbody).find('.itemNo').text('');
        // 不是tbody被append，這樣的結果是tbody裡面有tbody
        // impossible!!!是因為我有設定tfoot，所以就算tbody放在tfoot下面也不會跑版?!
        $(getTable).append(newTbody);
        updateItemNo(getTable);
    });

    // 按下delBtn刪除tbody
    // $('.delBtn').click(function () {});
    // 失敗原因: 寫在addTbody外面的話，會找不到動態生成的delBtn
    // 事件委託: 將click事件，委託給document
    $(document).on('click', '.delBtn', function () {
        // 在刪除之前先儲存del的table
        let delClosestTable = $(this).closest('table');
        let projectImg = $(delClosestTable).closest('.table').find('svg').prop('outerHTML');
        let projectName = $(delClosestTable).closest('.table').find('.captionLeft p').text();
        let projectPrice = $(delClosestTable).closest('.table').find('span').text();
        if ($(delClosestTable).find('tbody').length == 1) {
            if (confirm(`確定要刪除<${projectName}>項目嗎?`) == true) {
                let newUserDesign = $('#emptyUserDesign').clone();
                $(newUserDesign).attr('id', '');
                $(newUserDesign).find('figure').append(projectImg);
                $(newUserDesign).find('h3').text(projectName);
                $(newUserDesign).find('span').text(projectPrice);
                $('#innerContent').find('.userDesign:last').after(newUserDesign);
                $(newUserDesign).css('display', 'flex');
                $(this).closest('tbody').closest('.table').remove();
            } else {
                alert(`取消刪除<${projectName}>項目`);
            };
        } else {
            // 變數存起來之後再刪除tbody
            $(this).closest('tbody').remove();
            updateItemNo(delClosestTable);
        };
    });
    // 把「項次」隨著tbody變更獨立為一個待呼叫的函示
    function updateItemNo(thisTable) {
        $(thisTable).find('tbody').each(function (index) {
            $(this).find('.itemNo').text(index + 1)
        })
    }

    // 8/31 測試popup功能
    // 當需要顯示彈出視窗時
    $('#addStyle').on('click', function () {
        $('#popup').fadeIn();
    });

    // 當需要關閉彈出視窗時
    $('#closePopup').on('click', function () {
        $('#popup').fadeOut();
    });

    // popup內的userDesign click時，標記selected
    $(document).on('click', '.userDesign', function () {
        $('.userDesign').removeClass('selected');
        $(this).addClass('selected');
    });

    // 從 localStorage 中取出 svgArray
    let svgArray = JSON.parse(localStorage.getItem('svgArray'));
    if (svgArray && svgArray.length > 0) {
        svgArray.forEach(function (element, index, array) {
            let newUserDesign = $('#emptyUserDesign').clone();
            $(newUserDesign).attr('id', '');
            $(newUserDesign).find('figure').html(element.img);
            $(newUserDesign).find('h3').text(element.name);
            $(newUserDesign).find('span').text(`NT$${element.price}`);
            $('#chekBtn').before(newUserDesign);
            $(newUserDesign).css('display', 'flex');
        });
        // 按下確認鍵後
        $('#chekBtn').click(function () {
            if ($('.userDesign.selected').length > 0) {
                // 取得projectname
                let projectName = $('.userDesign.selected').find('h3').text();
                // 取得SVG
                let svgImg = $('.userDesign.selected').find('svg').prop('outerHTML');
                // 取得單價
                let unitPrice = $('.userDesign.selected').find('span').text();
                // clone .table
                let newProject = $('#project').clone();
                $(newProject).attr('id', '');
                $(newProject).find('.captionLeft p').text(projectName);
                $(newProject).find('.captionRight span').text(unitPrice);
                $(newProject).find('.captionLeft figure').append(svgImg);
                $(newProject).css('display', 'block');
                $(newProject).attr('id', '');
                $('.table:last').after(newProject);
                // 被選取的project要移除
                $('.userDesign.selected').remove();
            }

        });
    } else {
        $('#chekBtn').before('<h4>並無儲存的設計樣式</h4>');
        $(document).find('#innerContent h4').css('margin', '20px 0px');
        $(document).find('#chekBtn').text('開始第一個設計').attr('href', './customize-React.html');
        $('#popup-content').css('height', '30vh');
    };


    // 從localStorage取出 orderItObject
    let orderItObject = JSON.parse(localStorage.getItem('orderItObj'));
    if (orderItObject != '') {
        let newordProject = $('#project').clone();
        newordProject.find('.captionLeft figure').append(orderItObject.img);
        newordProject.find('.captionLeft p').text(orderItObject.name);
        newordProject.find('.unitPrice').text(`單件價格: NT$ ${orderItObject.price}`);
        newordProject.attr('id', '').css('display', 'block');
        $('#project').after(newordProject);
    }
});




// sandy_開始
// 讀取上一頁購物車資訊
document.addEventListener('DOMContentLoaded', function () {
    // 從 localStorage 中讀取 selectedName 和 selectedColor
    const selectedName = localStorage.getItem('selectedProductName');
    const selectedColor = localStorage.getItem('selectedColor');

    // 組合成顯示字串，如果有值才顯示，否則顯示預設訊息
    const displayText = (selectedName && selectedColor) ? `${selectedName}_${selectedColor}` : '商品名稱_顏色';

    // 更新 .captionLeft 的 <p> 標籤內容
    const captionLeftParagraph = document.querySelector('.captionLeft p');
    if (captionLeftParagraph) {
        captionLeftParagraph.innerText = displayText;
    }
    const picLClassName = localStorage.getItem('picLClassName');
    if (picLClassName) {
        // 拆分 className 並取最後一個值
        const classList = picLClassName.split(' ');
        const lastClass = classList[classList.length - 1]; // 取得最後一個 class 值

        // 將最後一個 class 值新增到 <figure> 標籤中
        const figureElement = document.querySelector('.captionLeft figure');
        if (figureElement) {
            figureElement.classList.add(lastClass);
        }}
});



