// 使用jQuery
$(function () {
    // 共用
    // .arrow的互動
    $('.arrow').click(function () {
        // .arrow旋轉
        $(this).toggleClass('beClick');
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
        // length 是一個屬性而不是一個方法，因此不需要加上括號
        var countTbody = $(getTable).find('tbody').length;
        // 讓「項次」隨著新增而變更
        $(newTbody).find('.itemNo').append(countTbody)
    });




});



// let tableFoot = document.querySelector('.tableFoot');
// tableFoot.addEventListener('click', function (e) {
//     // console.log(e.target.offsetParent.offsetParent)可以取得table;
//     let getTable = e.target.offsetParent.offsetParent;
//     console.log(getTable);
//     console.log(getTable.childNodes);
//     console.log(getTable.childNodes[3]);
    
// })
