import './Carrier.css';

function Carrier() {
    return(
        <div className="container">
            <div className="carrier-top">
                <div className="info">CARRIER <br /> <span>Join the Anredo’s development team. Check available job post.</span></div>
                <div className="more"><a href=""><i className="fas fa-th fa-lg"  ></i></a></div>
            </div>
            
            <div className="carrier-grid">
                <div className="carrier-items">
                    <div className="carrier-item1">
                        <div className="item-img"><img src={require("../images/career1.png")} alt="" /></div>
                        <div className="item-text"><h5>PEOPLE & ENVIRONMENT</h5></div>
                    </div>
                    <div className="carrier-item2">
                        <div className="item-img"><img src={require("../images/career2.png")} alt="" /></div>
                        <div className="item-text"><h5>ANREDO RECUIRT</h5></div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Carrier;