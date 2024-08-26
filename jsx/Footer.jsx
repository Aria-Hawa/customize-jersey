function Header() {
    return(
    <header id="fixedTopbar">
        <div className="topbar">
            <h1><a href="./index.html"><img src="./images/logo.png" alt="VSER客製化球衣" /></a></h1>
            <div className="menuList">
                <nav className="menuItem">
                    <ul>
                        <li><a href="#">品牌理念</a></li>
                        <li><a href="#">專案成果</a></li>
                        <li><a href="#">商品瀏覽</a></li>
                        <li><a href="#">訂購說明</a></li>
                        <li><a href="#">會員專區</a></li>
                    </ul>
                </nav>
                <div className="rightList">
                    <a href="#" className="customizeBtn">訂製專區</a>
                    <a href="#" className="cartBtn"></a>
                </div>
            </div>
        </div>
    </header>
);
}