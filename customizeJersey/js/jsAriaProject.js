// 使用jQuery
$(function () {
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
    });



});



let tableFoot = document.querySelector('.tableFoot');
tableFoot.addEventListener('click', function (e) {
    // console.log(e.target.offsetParent.offsetParent)可以取得table;
    let getTable = e.target.offsetParent.offsetParent;
    console.log(getTable);
    console.log(getTable.childNodes);
    console.log(getTable.childNodes[3]);
    
})
