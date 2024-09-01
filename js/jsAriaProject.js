// 使用jQuery
$(function () {
    // 共用
    // .arrow的互動
    // $('.arrow').click(function () {
    //     // .arrow旋轉
    //     $(this).toggleClass('beClick');
    //     // 新增.show類別
    //     $(this).closest('.table').find('table').toggleClass('show');
    //     $(this).closest('.tableCaption').toggleClass('show');
    // });

    $('.tableCaption').click(function () {
        // .arrow旋轉
        $(this).find('.arrow').toggleClass('beClick');
        // 新增.show類別
        $(this).closest('.table').find('table').toggleClass('show');
        $(this).closest('.tableCaption').toggleClass('show');
    });

    // table表格新增件數欄位的hover
    $('.tableFoot').hover(
        // 滑鼠移入時候
        function () {
            $(this).css('cursor', 'pointer');
            $('.addBtn').css('background-color', 'var(--Orange)');
            $('.tableFoot p').css('color', 'var(--Orange)');
        },
        // 滑鼠移出時候
        function () {
            // $(this).css('cursor', 'pointer');
            $('.addBtn').css('background-color', 'white');
            $('.tableFoot p').css('color', 'white');
        });

    // 當table表格新增件數欄位click時
    $('.tableFoot').click(function () {
        // 更改css樣式
        $('.addBtn').css('background-color', 'var(--Darkorange)');
        $('.tableFoot p').css('color', 'var(--Darkorange)');
        // 取得<table>和<tbody>
        let getTable = $(this).closest('table');
        let getTbody = $(getTable).find('tbody:last');
        // 複製<tbody> =>Chatgpt
        // 新增一個tbody
        let newTbody = $(getTbody).clone();
        // 清空<tobdy>的內容 =>Chatgpt
        $(newTbody).find('input').val('');
        $(newTbody).find('select').find('option').val('');
        $(newTbody).find('.itemNo').text('');
        // 不是tbody被appen，這樣的結果是tbody裡面有tbody
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
        // 變數存起來之後再刪除tbody
        $(this).closest('tbody').remove();
        updateItemNo(delClosestTable);
    });


    // 把「項次」隨著tbody變更獨立為一個待呼叫的函示
    function updateItemNo(thisTable) {
        $(thisTable).find('tbody').each(function (index) {
            $(this).find('.itemNo').text(index + 1)
        })
    }



    // 8/31 測試popupe功能
    // 當需要顯示彈出視窗時
    $('#addStyle').on('click', function () {
        $('#popup').fadeIn();
    });

    // 當需要關閉彈出視窗時
    $('#closePopup').on('click', function () {
        console.log('觸發成功')
        $('#popup').fadeOut();
    });


});

