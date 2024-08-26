function Footer() {
    return(
        <footer>
        <ul className="footerList">
            <li className="footerItem">About
                <ul>
                    <li>關於VSER</li>
                </ul>
            </li>
            <li className="footerItem">SERVICE
                <ul>
                    <li>條款與細則</li>
                    <li>隱私權政策</li>
                    <li>客製化政策</li>
                </ul>
            </li>
            <li className="footerItem">CONTACT
                <ul>
                    <li>新北市汐止區新台五路二段77號15樓之3</li>
                    <li>vser.tw@gmail.com</li>
                    <li>02-86482203</li>
                </ul>
            </li>
        </ul>
        <div>
            <figure><img src="./images/logo-2.svg" alt=""/></figure>
            <small>&copy;2024 VSER, Inc. 版權所有</small>
        </div>
    </footer>
);
}