import './Banner.css'

function Banner() {
    return(

        <div className="banner">
            
            <div className="banner-image-items">
                <div className="banner-image-text">
                    <h1>ALPHA X</h1>
                    <h2>BELIEVE IN FAITH</h2>
                    <h6>ANREDO will further expand our original IPs and build immersive, virtual worlds, where our fans play together and share fun moments. We will meet everyone in the world we are building.</h6>
                </div>
                <div className="banner-image-button">
                    <button className="banner-button">WATCH IT &nbsp;<i className="fas fa-play fa-sm" ></i></button>
                </div>
                <div className="banner-image-extra-items">
                    <div className="grid-card" id="extra-items">
                        <div className="item-1">
                            <div className="item1-content">
                                <h1>ALPHA X: <br/> CALLING WAR</h1>
                                <h6 >war begins with a call</h6>
                                <h6>description about the game and how that works, position if that game is trending or not.....etc.</h6>
                            
                            </div>

                           
                        </div>
                        <div className="item-2">
                            <div className="item2-content">
                                <h6 >war begins with a call</h6>
                                <h1>ALPHA X: <br/> CALLING WAR</h1>
                            </div>
                            
                        </div>
                        <div className="item-3">
                            <div className="item3-content">
                                <h6 >sieze down the main</h6>
                                <h1>ALPHA X: <br/> SIEZE FIRE</h1>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner-img">
                <div className="filter"></div>
            </div>

           
            
        </div>

   

    );
}



export default Banner;