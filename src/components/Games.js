import './Games.css'
import {gsap} from 'gsap'
import '../App'

function Games() {
    var index=0;

    function slideLeft() {
        if (index == 0) {
            index = 4;
        }
        else{
            index--;
        }
        
        gsap.to(".images",.3,{x: `${-index*100}%`});
    }

    function slideRight() {
        if (index == 4) {
            index=0;
        }
        else{
            index++;
        }
        
        gsap.to(".images",.3,{x: `${-index*100}%`});
    }

    function handle() {
        var elem = document.getElementsByClassName("GameTop");
        console.log(elem.clientHeight);
    }
    
    return(
        <div className="container-games" >
            <div className="games-top">
                <div className="info">GAMES <br /><span>Look what we have developed for you. Hope you will like them. </span></div>

                <div className="more"><a href=""><i className="fas fa-th fa-lg"  ></i></a></div>
            </div>
            <div className="sliderCon">
                <div className="slider-games">
                    <div id="arrow-left">
                        <img src={require('../images/arrow_left_fixed.png')} alt="" onClick={slideLeft}/>
                    </div>

                    <div className="imagesDiv">
                        <div className="images">
                            <img src={require('../images/GamesSlide1.png')} alt="" />
                            <img src={require('../images/GamesSlide2.jpg')} alt="" />
                            <img src={require('../images/GamesSlide3.png')} alt="" />
                            <img src={require('../images/GamesSlide4.png')} alt="" />
                            <img src={require('../images/GamesSlide5.png')} alt="" />

                        </div>
                        
                    </div>

                    <div id="arrow-right">
                        <img src={require('../images/arrow_right_fixed.png')} alt="" onClick={slideRight}  />
                    </div>

                    <div className="games-social">
                        <div className="logo"><img src={require('../images/Logo.png')} alt="" /></div>
                        <div className="social-icons">
                            <ul>
                                <li id='visit-website'><a href="">Visit Website</a></li>
                                <li><a href=""><i className="fab fa-facebook-f fa-lg"></i></a></li>
                                <li><a href=""><i className="fab fa-twitter fa-lg"></i></a></li>
                                <li><a href=""><i className="fab fa-linkedin-in fa-lg"></i></a></li>
                                <li><a href=""><i className="fab fa-instagram fa-lg"></i></a></li>
                                
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
        
        </div>

        
    );

    

}

export default Games;
