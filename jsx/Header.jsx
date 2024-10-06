function Header({ classname }) {
    useEffect(() => {
        $(function () {
            // fixedTopbar 訂製專區下拉選單
            $('#RLbtn').click(function () {
                $('#pricePlanBtn').toggleClass('show');
                $('#customizeBtn').toggleClass('show');
                $('#RLbtn').toggleClass('show');
            });

            // 漢堡按鈕三變X
            // $('.hamburger').click(function () {
            //     // 在.hamburger類別裡面 加入/刪除類別is-active
            //     $(this).toggleClass('is-active');
            //     $('.navigation').toggle(350);
            //     $('.navbar').toggleClass('fillColor');
            // })

            $(function () {
                // 漢堡按鈕三變X
                $('.hamburger').click(function () {
                    // 在.hamburger類別裡面 加入/刪除類別is-active
                    $(this).toggleClass('is-active');
                    
                    // 檢查.navigation是否已顯示
                    if ($('.navigation').css('display') === 'none') {
                        // 顯示 navigation 並設置 display: flex
                        $('.navigation').css('display', 'flex').hide().fadeIn(350);
                    } else {
                        // 隱藏 navigation
                        $('.navigation').fadeOut(350, function() {
                            $(this).css('display', 'none');
                        });
                    }
            
                    // 切換 navbar 的背景顏色
                    $('.navbar').toggleClass('fillColor');
                });
            });
        });
    }, [])
    return (
        <>
            <header id="fixedTopbar" className={classname}>
                <div className="topbar">
                    <h1><a href="./index.html"><img src="./images/logo.png" alt="VSER客製化球衣" /></a></h1>
                    <div className="menuList">
                        <nav className="menuItem">
                            <ul>
                                <li><a href="./brandConcept.html">品牌理念</a></li>
                                <li><a href="./pojectResults.html">專案成果</a></li>
                                <li><a href="./productBrowsing.html">商品瀏覽</a></li>
                                <li><a href="./Customization_process.html">訂購說明</a></li>
                            </ul>
                        </nav>
                        <div className="rightList">
                            <div className="dropdown">
                                <a href="#" id="RLbtn">訂製專區</a>
                                <a href="./priceplan.html" id="pricePlanBtn">價格方案</a>
                                <a href="./customize-React.html" id="customizeBtn">球衣模擬</a>
                            </div>
                            <a href="./chooseProject.html" className="cartBtn"></a>
                        </div>
                    </div>
                </div>
                <div id="burger">
                    {/* 三條槓漢堡按鈕 */}
                    <div className="navbar">
                        <div className="navbarBtn">
                            <button className="hamburger">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                        {/* 選單列 */}
                        <nav className="navigation">
                            <ul>
                                <li><a href="./brandConcept.html">品牌理念</a></li>
                                <li><a href="./pojectResults.html">專案成果</a></li>
                                <li><a href="./productBrowsing.html">商品瀏覽</a></li>
                                <li><a href="./Customization_process.html">訂購說明</a></li>
                                <li><a href="./priceplan.html">價格方案</a></li>
                                <li><a href="./customize-React.html">球衣模擬</a></li>
                            </ul>
                            <ul className="bottomIcon inNavbar">
                                <li><a href=""><img src="./images/icon-fb.png" alt="" /></a></li>
                                <li><a href=""><img src="./images/icon-ig.png" alt="" /></a></li>
                                <li><a href=""><img src="./images/icon-line.png" alt="" /></a></li>
                            </ul>
                            <div className="HLogo"><a href="./index.html"><img src="./images/logo.png" alt="VSER客製化球衣" /></a></div>
                            
                        </nav>
                    </div>
                </div>
            </header>

        </>
    );
}