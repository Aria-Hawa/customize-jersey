function Header({ classname }) {
    useEffect(() => {
        $(function () {
            // fixedTopbar 訂製專區下拉選單
            $('#RLbtn').click(function () {
                $('#pricePlanBtn').toggleClass('show');
                $('#customizeBtn').toggleClass('show');
                $('#RLbtn').toggleClass('show');
            });
        });
    }, [])
    return (
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
                            <li><a href="#">會員專區</a></li>
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
        </header>
    );
}