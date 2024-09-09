// 使用jQuery
$(function () {
    // fixedTopbar 訂製專區下拉選單
    $('#RLbtn').click(function () {
        $('#pricePlanBtn').toggleClass('show');
        $('#customizeBtn').toggleClass('show');
        $('#RLbtn').toggleClass('show');
    });

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
        let projectImg = $(delClosestTable).closest('.table').find('.captionLeft figure').css('background-image').match(/url\(["']?([^"']*)["']?\)/)[1];
        let projectName = $(delClosestTable).closest('.table').find('.captionLeft p').text();
        let projectPrice = $(delClosestTable).closest('.table').find('.price').text();
        if ($(delClosestTable).find('tbody').length == 1) {
            if (confirm(`確定要刪除<${projectName}>項目嗎?`) == true) {
                let newUserDesign = $('#emptyUserDesign').clone();
                $(newUserDesign).find('img').attr('src', projectImg);
                $(newUserDesign).find('h3').text(projectName);
                $(newUserDesign).find('span').text(projectPrice);
                $(newUserDesign).attr('id', '');
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

    // 按下確認鍵後
    $('#chekBtn').click(function () {
        // 取得projectname
        let projectName = $('.userDesign.selected').find('h3').text();
        // 取得img路徑
        let ImgSrc = $('.userDesign.selected').find('img').attr('src');
        // 取得單價
        let unitPrice = $('.userDesign.selected').find('span').text();
        // clone .table
        let newProject = $('#project').clone();
        $(newProject).find('.captionLeft p').text(projectName);
        $(newProject).find('.captionRight span').text(unitPrice);
        $(newProject).find('.captionLeft figure').css('background-image', `url(${ImgSrc})`);
        $(newProject).css('display', 'block');
        $(newProject).attr('id', '');
        $('.table:last').after(newProject);
        // 被選取的project要移除
        $('.userDesign.selected').remove();
    });

    // 整筆總額隨project變更
    // $(document).find('.price').each((index, price) => {
    //     console.log(price.innerText);
    // });

    // 從 localStorage 中取出 svgArray
    let svgArray = JSON.parse(localStorage.getItem('svgArray'));
    if (svgArray && svgArray.length > 0) {

        svgArray.forEach(function(element,index,array){
            // console.log(element.img);
            // console.log(index);
            // console.log(array);
            let newUserDesign = $('#emptyUserDesign').clone();
            $(newUserDesign).find('figure').html(element.img);
            $('#chekBtn').before(newUserDesign);
            $(newUserDesign).css('display','flex');
        });
    } else {
        console.log('無儲存的 SVG 資料');
    }

});

