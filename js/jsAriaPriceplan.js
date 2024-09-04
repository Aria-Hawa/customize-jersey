$(function () {
    // fixedTopbar 訂製專區下拉選單
    $('#RLbtn').click(function () {
        $('#pricePlanBtn').toggleClass('show');
        $('#customizeBtn').toggleClass('show');
        $('#RLbtn').toggleClass('show');
    });

    // click .content時候
    $('.content').click(function () {
        // .leftInfo縮到左邊
        let thisContent = $(this).closest('.item');
        $('.item').addClass('hide');
        // $(thisContent).addClass('bigsmall');
        $('.title').css({
            'left': 'calc(15% - 202px)',
            'transition': 'all .9s ease-in-out'
        });
        // $(thisContent).find('.content.origin').fadeOut(1200);
        $('.item.hide').animate({ opacity: "0" }, 800, function () {
            $('.rightInfo').fadeIn(1200);
            $('.item.hide').css('display', 'none');
            // 陸續顯示.content.act
            $(thisContent).find('.contentBox').css('display','flex').css('opacity','1');
        });



    });
});
