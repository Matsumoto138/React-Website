import './Newslatter.css';

function Newslatter() {
    return(
        <div className="newsletter-registration">
        <h4>JOIN OUR NEWSLETTER NOW</h4>
        <div className="input">
            <input type="text" placeholder="Your email address" />
            <button type="button">SIGN UP</button>
            
        </div>
        <h6>Will be used in accordance with our Privacy Policy</h6>
    </div>

    );
}

export default Newslatter;