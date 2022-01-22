import './News.css';

function News() {
    return(

        <div className="container">
            <div className="news-top">
            <div className="info">OUR LATEST UPDATES <br /> <span>All new information and news about our games.</span></div>
            <div className="more"><a href=""><i className="fas fa-th fa-lg"  ></i></a></div>
            </div>
            
            <div className="news-grid">
                <div className="news-item">
                    <div className="news-img"><img src={require("../images/news-img1.png")} alt="" /></div>
                    <div className="news-paragraph">THE WORLD BIGGEST ESPORT AND PEACEFUL PLAY ON THE...</div>
                    <a href="">READ MORE . .</a>
                </div>
                <div className="news-item">
                    <div className="news-img"><img src={require( "../images/news-img2.png")} alt="" /></div>
                    <div className="news-paragraph">WANT TO PLAY SOMETHING WHICH FEELS UNIQUE? THE...</div>
                    <a href="">READ MORE . .</a>
                </div>
                <div className="news-item">
                    <div className="news-img"><img src={require("../images/news-img3.png")} alt="" /></div>
                    <div className="news-paragraph">JOIN THE WAR AND CREATE YOUR OWN SQUAD TO CON...</div>
                    <a href="">READ MORE . .</a>
                </div>
                
            </div>
        </div>

    );
}

export default News