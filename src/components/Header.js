import './Header.css'


function Header() {
    return(
        <div className="header">
         <div className="lang-tape">
            <div className="tape-message">
                <p>Ready to be inspired - Any announcement  or something special</p>
            </div>
            <div className="lang-list">
                <ul>
                    <li className="mode-toggle">
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                          </label>
                    </li>
                    <li><a href="">KO</a></li>
                    <li><a href="">EN</a></li>
                    <li><a href="">CN</a></li>
                </ul>
            </div>
        </div>
        <div className="menu">
            <div className="logo"> LOGO </div>
            <span className="open-slide">
                <button onClick={openSideMenu}><i className="fas fa-th fa-lg"  ></i></button>
               
            </span>
            <div className="navbar">
                
                <ul>
                    <li><a href="">HOME</a></li>
                    <li><a href="">NEWS</a></li>
                    <li><a href="">GAMES</a></li>
                    <li><a href="">CAREER</a></li>
                </ul>
            </div>
            
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
            <a href="#" className="sidebar-close-btn" onClick={closeSideMenu}><i className="far fa-window-close fa-lg"></i></a>
            <input type="text" id="sidebar-search" placeholder="Search type here.." />
            
            <a href="">HOME</a>
            <a href="">NEWS</a>
            <a href="">GAMES</a>
            <a href="">CAREER</a>
            <a href="">ABOUT</a>
            <ul id="sidebar-lang">
                <li><a href="">KO</a></li>
                <li><a href="">EN</a></li>
                <li><a href="">CN</a></li>
            </ul>
            <ul id="sidebar-icons">

                <li><a href=""><i className="fab fa-facebook-f fa-lg"></i></a></li>
                <li><a href=""><i className="fab fa-twitter fa-lg"></i></a></li>
                <li><a href=""><i className="fab fa-linkedin-in fa-lg"></i></a></li>
                <li><a href=""><i className="fab fa-instagram fa-lg"></i></a></li>

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