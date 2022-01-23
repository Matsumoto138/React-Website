import './Footer.css';

function Footer() {
    return(
        <div className="container-footer">
            <div className="footer-top">
                <div className="footer-links">
                    <ul>
                        <li><a href="">Mail Us</a></li>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Terms of Service</a></li>
                        <li><a href="">Help Center</a></li>
                        <li><a href="">Speak Up</a></li>
                    </ul>
                </div>

            </div>
            <div className="footer-bottom">
                <div className="footer-copyright">
                    <div className="copyright-logo"><img src={require('../images/logo_dark.png')} alt="" /></div>
                    <div className="copyright-text">© 2021 ANREDO, Inc. All rights reserved. <br /> <span>ANREDO IS REGISTERED TRADEMARKS, TRADEMARKS OR SERVICE MARKS OF ANREDO PRIVATE LIMITED.</span></div>
                </div>
                <div className="footer-social-icons">
                    <ul>
                        <li><a href=""><i className="fab fa-facebook-f fa-lg"></i></a></li>
                        <li><a href=""><i className="fab fa-twitter fa-lg"></i></a></li>
                        <li><a href=""><i className="fab fa-linkedin-in fa-lg"></i></a></li>
                        <li><a href=""><i className="fab fa-instagram fa-lg"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default Footer;
