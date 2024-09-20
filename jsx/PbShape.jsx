function PbShape() {
    // 滑鼠滑入pbShape才會顯示pbTBtn
    const [isHovered, setIsHovered] = useState(false);
    return <>
        <li className="pbShape"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <div className="frame"></div>
            <div className="smallBox">
                <div id="collection" className="smallBoxIcon"></div>
            </div>
            <div className="pbshapeimg">
                <div className={props.svcA}></div>
                <div className={props.svcB}></div>
            </div>
            <div className="pbBescribe">
                <div className="pbText">
                    <h4>{props.shape}</h4>
                    <h5>{props.price}</h5>
                </div>
                <div className="pbText">
                    <p>{props.introduce}</p>
                    <h5>{props.star}</h5>
                </div>
                <div id={props.pbNum} className="pbTBtn" data-product={props.dataNum} style={{ display: isHovered ? 'flex' : 'none' }}>
                    詳細介紹
                </div>
            </div>
        </li>
    </>
}
