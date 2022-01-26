import './Navbar.css'
function Navbar() {
    
    // function responsive() {
    //     const navbar = document.getElementsByClassName("navbar")[0];
    //     if (window.innerWidth < 400) {
    //         navbar.style.display='none';
    //     }

    //     console.log(responsive);
    // }

    return(
        <div className="navbar" >
                
                <ul>
                    <li><a id='navbar-item' href="">HOME</a></li>
                    <li><a id='navbar-item' href="">NEWS</a></li>
                    <li><a id='navbar-item' href="">GAMES</a></li>
                    <li><a id='navbar-item' href="">CAREER</a></li>
                </ul>
            </div>

            

    );


}    



    
export default Navbar;
