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
        // 儲存click的資料
        let thisContent = $(this).closest('.item');
        let contentImg = $(thisContent).find('.infoImg').attr('src');
        // 位移PRICE PLAN標題
        $('.title').css({
            'left': 'calc(50% - 202px - 33%)',
            'transition': 'all .9s ease-in-out'
        });
        // 三個item透明->displayNone
        $('.item').addClass('hide');
        $('.item.hide').animate({ opacity: "0" }, 800, function () {
            $('.item.hide').css('display', 'none');
            // 儲存的img資料放入lefInfo裡面
            $('.leftInfo').find('.infoImg').attr('src', contentImg);
            // 顯示leftInfo
            $('.leftInfo').fadeIn(1200);
            // 條件顯示rightInfo內容
            let itemId = $(thisContent).attr('id');
            let clothe = '';
            let short = '';
            let textShadow = '';
            let priceTxt = '';
            if (itemId == 'price-1') {
                clothe = './images/pricePlan_yelloClothe.png';
                short = './images/productBrowsing_pbShapeC_2.png';
                textShadow = 'BASIC';
                priceTxt = '<small>$</small>700';
                showRightInfo(clothe, short, textShadow, priceTxt);
            }
            if (itemId == 'price-2') {
                clothe = './images/pricePlan_pinkClothe.png';
                short = './images/productBrowsing_pbShapeC_3.png';
                textShadow = 'ADVANCED';
                priceTxt = '<small>$</small>800';
                showRightInfo(clothe, short, textShadow, priceTxt);
            }
            if (itemId == 'price-3') {
                clothe = './images/pricePlan_orangeClothe.png';
                short = './images/pricePlan_orangeShort.png';
                textShadow = 'PRO+++';
                priceTxt = '<small>$</small>1100';
                showRightInfo(clothe, short, textShadow, priceTxt);
            }
            $('.rightInfo').fadeIn(1200);
            // 陸續顯示.content
            $('.contentBox').css('display', 'flex');
            $('.content#act1').animate({ opacity: '1' }, 800, function () {
                $('.content#act2').animate({ opacity: '1' }, 800, function () {
                    $('.content#act3').animate({ opacity: '1' }, 800)
                });
            });
        });

        // 把showRightInfo獨立出來
        function showRightInfo(clothe, short, textShadow, priceTxt) {
            $('.clothe').attr('src', clothe);
            $('.short').attr('src', short);
            $('.textShadow').text(textShadow);
            $('.priceTxt').html(priceTxt);
        };

        $(document).on('click','.content.act',function () {
            let contentId = $(this).attr('id');
            if (contentId == 'act1') {
                $('.leftInfo').find('.infoImg').attr('src', './images/price1.png');
                clothe = './images/pricePlan_yelloClothe.png';
                short = './images/productBrowsing_pbShapeC_2.png';
                textShadow = 'BASIC';
                priceTxt = '<small>$</small>700';
                showRightInfo(clothe, short, textShadow, priceTxt);
            }
            if (contentId == 'act2') {
                $('.leftInfo').find('.infoImg').attr('src', './images/price2.png');
                clothe = './images/pricePlan_pinkClothe.png';
                short = './images/productBrowsing_pbShapeC_3.png';
                textShadow = 'ADVANCED';
                priceTxt = '<small>$</small>800';
                showRightInfo(clothe, short, textShadow, priceTxt);
            }
            if (contentId == 'act3') {
                $('.leftInfo').find('.infoImg').attr('src', './images/price3.png');
                clothe = './images/pricePlan_orangeClothe.png';
                short = './images/pricePlan_orangeShort.png';
                textShadow = 'PRO+++';
                priceTxt = '<small>$</small>1100';
                showRightInfo(clothe, short, textShadow, priceTxt);
            }
        });


    });
});
