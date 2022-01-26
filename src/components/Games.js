import './Games.css'
import {gsap} from 'gsap'
import '../App'
import {Carousel, CarouselItem} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function Games() {
    // var index=0;

    // function slideLeft() {
    //     if (index == 0) {
    //         index = 4;
    //     }
    //     else{
    //         index--;
    //     }
        
    //     gsap.to(".images",.3,{x: `${-index*100}%`});
    // }

    // function slideRight() {
    //     if (index == 4) {
    //         index=0;
    //     }
    //     else{
    //         index++;
    //     }
        
    //     gsap.to(".images",.3,{x: `${-index*100}%`});
    // }

    // function handle() {
    //     var elem = document.getElementsByClassName("GameTop");
    //     console.log(elem.clientHeight);
    // }
    
    return(
        <div className="container-games" >
            <div className="games-top">
                <div className="info">GAMES <br /><span>Look what we have developed for you. Hope you will like them. </span></div>

                <div className="more"><a href=""><i className="fas fa-th fa-lg"  ></i></a></div>
            </div>
            <div className="sliderCon">
                <div className="slider-games">
                   

                    <div className="imagesDiv">
                        <div className="images">
                        <Carousel>
                                <CarouselItem interval={2000}>
                                <img src="https://www.riotgames.com/darkroom/1440/d0807e131a84f2e42c7a303bda672789:3d02afa7e0bfb75f645d97467765b24c/valorant-offwhitelaunch-keyart.jpg" alt="" />
                                </CarouselItem>
                                <CarouselItem interval={2000}>
                                <img src="https://www.duysende.com/wp-content/uploads/2021/09/CSGO-Maus-ile-ziplama.jpg" alt="" />
                                </CarouselItem>
                                <CarouselItem interval={2000}>
                                <img src="https://cdn.bolgegundem.com/d/news/1071905.jpg" alt="" />
                                </CarouselItem>
                                <CarouselItem interval={2000}>
                                <img src="https://cdn2.unrealengine.com/7up-v2-3840x2160-e11fc91a84d6.jpg" alt="" />
                                </CarouselItem>
                                <CarouselItem interval={2000}>
                                <img src="https://sm.ign.com/ign_tr/screenshot/default/maxresdefault_59sh.jpg" alt="" />
                                </CarouselItem>
                          
                            </Carousel>

                        </div>
                        
                    </div>

                    

                    <div className="games-social">
                        <div className="logo"><img src={require('../images/Logo.png')} alt="" /></div>
                        <div className="social-icons">
                            <ul>
                                <li  id='visit-website'><a href="" className='white-links'>Visit Website</a></li>
                                <li  id='facebook'><a href="" className='white-links'><i className="fab fa-facebook-f fa-lg" ></i></a></li>
                                <li  id='twitter'><a href="" className='white-links'><i className="fab fa-twitter fa-lg" ></i></a></li>
                                <li  id='linkedin'><a href="" className='white-links'><i className="fab fa-linkedin-in fa-lg" ></i></a></li>
                                <li  id='instagram'><a href="" className='white-links'><i className="fab fa-instagram fa-lg" ></i></a></li>
                                
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
        
        </div>

        
    );

    

}

export default Games;
