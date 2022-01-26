import './Header.css';
import News from './News';
import Carrier from './Carrier';
import Navbar from './Navbar';


function Header() {
    
    function toggleBody() {
    
        const checkBox = document.getElementById('check');
        const sBody = document.getElementsByClassName("App")[0];
        const sHeader = document.getElementsByClassName("header")[0];
        const sNavbar = document.getElementsByTagName('a');
        const sInfo = document.getElementsByClassName('info');
        const sNews = document.getElementsByClassName('news-paragraph');
        const sCarrier = document.getElementsByClassName('item-text');
        const whiteLinks = document.getElementsByClassName('white-links');
        const whiteText = document.getElementsByClassName('item-text-white');
        const sideLinks = document.getElementsByClassName('side-link');
        
        if (checkBox.checked === true ) {
            
            sBody.style.background = 'var(--dark)';
            sHeader.style.color = 'var(--primary)';
            for (let i = 0; i < sNavbar.length; i++) {
                sNavbar[i].style.color = 'var(--primary)';
                
            }

            for (let i = 0; i < sInfo.length; i++) {
                sInfo[i].style.color = 'var(--primary)';
                
            }

            for (let i = 0; i < sNews.length; i++) {
                sNews[i].style.color = 'var(--primary)';
                sNews[i].style.background = 'var(--dark)'
                sNews[i].style.borderColor = 'var(--primary)';
            }

            for (let i = 0; i < sCarrier.length; i++) {
                sCarrier[i].style.color = 'var(--primary)';
                sCarrier[i].style.background = 'var(--dark)';
                sCarrier[i].style.borderColor = 'white';
            }

            for (let i = 0; i < whiteLinks.length; i++) {
                whiteLinks[i].style.color = 'var(--primary)';
                
            }

           
        }
    
        else{
            sBody.style.background = 'var(--primary)';
            sHeader.style.color = 'var(--dark)';
            for (let i = 0; i < sNavbar.length; i++) {
                sNavbar[i].style.color = 'var(--dark)';
                
            }

            for (let i = 0; i < sInfo.length; i++) {
                sInfo[i].style.color = 'var(--dark)';
                
            }

            for (let i = 0; i < sNews.length; i++) {
                sNews[i].style.color = 'var(--dark)';
                sNews[i].style.background = 'var(--primary)';
                sNews[i].style.borderColor = 'var(--dark)';
            }

            for (let i = 0; i < sCarrier.length; i++) {
                sCarrier[i].style.color = 'var(--dark)';
                sCarrier[i].style.background = 'var(--primary)';
                sCarrier[i].style.borderColor = 'var(--dark)';
            }

            for (let i = 0; i < whiteLinks.length; i++) {
                whiteLinks[i].style.color = 'var(--primary)';
                
            }

            
        }
        
        for (let i = 0; i < whiteLinks.length; i++) {
            whiteLinks[i].style.color = 'var(--primary)';
            
        }

        for (let i = 0; i < whiteText.length; i++) {
            whiteText[i].style.color = 'var(--primary)';
            
        }

        const navbar = document.getElementsByClassName("navbar")[0];
        if (window.innerWidth < 1000) {
            navbar.style.display='none';
        }

        for (let i = 0; i < sideLinks.length; i++) {
            sideLinks[i].style.color='var(--primary)';
            
        }

    }

    return(
        <div className="header" onLoad={toggleBody}>
         <div className="lang-tape">
            <div className="tape-message">
                <p>Ready to be inspired - Any announcement  or something special</p>
            </div>
            <div className="lang-list">
                <ul>
                    <li className="mode-toggle">
                        <p>Light</p>
                        <label className="switch">
                            <input id='check' type="checkbox" onClick={toggleBody} ref={News, Carrier}/>
                            <span className="slider round"></span>
                          </label>
                         <p>Dark</p>
                    </li>
                    <li><a href="">KO</a></li>
                    <li><a href="">EN</a></li>
                    <li><a href="">CN</a></li>
                </ul>
            </div>
        </div>
        <div className="menu">
            <div className="logo"> <img src={require('../images/logo_dark.png')} alt="" /> </div>
            <div className="open-slide">
                <button onClick={openSideMenu}><i className="fas fa-th fa-lg"  ></i></button>
               
            </div>
            <Navbar></Navbar>
            
            <div className="social-icons">
                <ul>
                    <li><a href=""><i className="fab fa-facebook-f fa-lg"></i></a></li>
                    <li><a href=""><i className="fab fa-twitter fa-lg"></i></a></li>
                    <li><a href=""><i className="fab fa-linkedin-in fa-lg"></i></a></li>
                    <li><a href=""><i className="fab fa-instagram fa-lg"></i></a></li>
                </ul>
            </div>
        </div>

        <div id="side-menu" className="side-nav">
            <a href="#" className="sidebar-close-btn side-link" onClick={closeSideMenu}><i className="far fa-window-close fa-lg"></i></a>
            <input type="text" id="sidebar-search" placeholder="Search type here.." />
            
            <a className='side-link' href="">HOME</a>
            <a className='side-link' href="">NEWS</a>
            <a className='side-link' href="">GAMES</a>
            <a className='side-link' href="">CAREER</a>
            <a className='side-link' href="">ABOUT</a>
            <ul id="sidebar-lang">
                <li><a className="side-link" href="">KO</a></li>
                <li><a className="side-link" href="">EN</a></li>  
                <li><a className="side-link" href="">CN</a></li>
            </ul>
            <ul id="sidebar-icons">

                <li><a className='side-link' href=""><i className="fab fa-facebook-f fa-lg"></i></a></li>
                <li><a className='side-link' href=""><i className="fab fa-twitter fa-lg"></i></a></li>
                <li><a className='side-link' href=""><i className="fab fa-linkedin-in fa-lg"></i></a></li>
                <li><a className='side-link' href=""><i className="fab fa-instagram fa-lg"></i></a></li>

            </ul>
        </div>
        </div>



    );

    
}

function closeSideMenu() {
            
    document.getElementById("side-menu").style.width = '0'; 
}

function openSideMenu() {
    
    document.getElementById("side-menu").style.width='100%';
}




export default Header;