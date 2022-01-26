import './News.css';
import Header from './Header';
import toggleBody from './Header';

function News() {
 
    
    function hover1() {
        
        if (document.getElementById('check').checked !== true) {
            const par1 = document.getElementsByClassName('news-paragraph1')[0];
            const aTag = document.getElementById('parlink1');
            par1.style.background = 'var(--dark)';
            par1.style.color = 'var(--primary)';
    
            aTag.style.color = 'white';
        }

        else{
            const par1 = document.getElementsByClassName('news-paragraph1')[0];
            const aTag = document.getElementById('parlink1');
            par1.style.background = 'var(--primary)';
            par1.style.color = 'var(--dark)';
    
            aTag.style.color = 'var(--dark)';
        }


    }

    function hover1normal() {
        if (document.getElementById('check').checked !== true) {
            const par1 = document.getElementsByClassName('news-paragraph1')[0];
            const aTag = document.getElementById('parlink1');
            par1.style.background = 'var(--primary)';
            par1.style.color = 'var(--dark)';
    
            aTag.style.color = 'var(--dark)';
        }

        else{
            const par1 = document.getElementsByClassName('news-paragraph1')[0];
            const aTag = document.getElementById('parlink1');
            par1.style.background = 'var(--dark)';
            par1.style.color = 'var(--primary)';
    
            aTag.style.color = 'var(--primary)';
        }


    }

    function hover2() {
        if (document.getElementById('check').checked !== true) {
            const par2 = document.getElementsByClassName('news-paragraph2')[0];
            const aTag = document.getElementById('parlink2');
            par2.style.background = 'var(--dark)';
            par2.style.color = 'var(--primary)';
    
            aTag.style.color = 'var(--primary)';
        }

        else{
            const par2 = document.getElementsByClassName('news-paragraph2')[0];
            const aTag = document.getElementById('parlink2');
            par2.style.background = 'var(--primary)';
            par2.style.color = 'var(--dark)';
    
            aTag.style.color = 'var(--dark)';
        }
    }



    function hover2normal() {
        if (document.getElementById('check').checked !== true) {
            const par2 = document.getElementsByClassName('news-paragraph2')[0];
            const aTag = document.getElementById('parlink2');
            par2.style.background = 'var(--primary)';
            par2.style.color = 'var(--dark)';
    
            aTag.style.color = 'var(--dark)';
        }

        else{
            const par2 = document.getElementsByClassName('news-paragraph2')[0];
            const aTag = document.getElementById('parlink2');
            par2.style.background = 'var(--dark)';
            par2.style.color = 'var(--primary)';
    
            aTag.style.color = 'var(--primary)';
        }


    }

    function hover3() {
        if (document.getElementById('check').checked !== true) {
            const par3 = document.getElementsByClassName('news-paragraph3')[0];
            const aTag = document.getElementById('parlink3');
            par3.style.background = 'var(--dark)';
            par3.style.color = 'var(--primary)';
    
            aTag.style.color = 'var(--primary)';
        }

        else{
            const par3 = document.getElementsByClassName('news-paragraph3')[0];
            const aTag = document.getElementById('parlink3');
            par3.style.background = 'var(--primary)';
            par3.style.color = 'var(--dark)';
    
            aTag.style.color = 'var(--dark)';
        }


    }

    function hover3normal() {
        if (document.getElementById('check').checked !== true) {
            
        const par3 = document.getElementsByClassName('news-paragraph3')[0];
        const aTag = document.getElementById('parlink3');
        par3.style.background = 'var(--primary)';
        par3.style.color = 'var(--dark)';

        aTag.style.color = 'var(--dark)';
        }

        else{
            const par3 = document.getElementsByClassName('news-paragraph3')[0];
            const aTag = document.getElementById('parlink3');
            par3.style.background = 'var(--dark)';
            par3.style.color = 'var(--primary)';
    
            aTag.style.color = 'var(--primary)';
        }

    }

    return(

        <div className="container">
            <div className="news-top">
            <div className="info">OUR LATEST UPDATES <br /> <span>All new information and news about our games.</span></div>
            <div className="more"><a href=""><i className="fas fa-th fa-lg"  ></i></a></div>
            </div>
            
            <div className="news-grid">
                <div className="news-item" onMouseOver={hover1} onMouseOut={hover1normal}>
                    <div className="news-img"><img src={require("../images/news-img1.png")} alt="" /></div>
                    <div className="news-paragraph news-paragraph1">THE WORLD BIGGEST ESPORT AND PEACEFUL PLAY ON THE...</div>
                    <a href="" id='parlink1'>READ MORE . .</a>
                </div>
                <div className="news-item" onMouseOver={hover2} onMouseOut={hover2normal}>
                    <div className="news-img"><img src={require( "../images/news-img2.png")} alt="" /></div>
                    <div className="news-paragraph news-paragraph2">WANT TO PLAY SOMETHING WHICH FEELS UNIQUE? THE...</div>
                    <a href="" id='parlink2'>READ MORE . .</a>
                </div>
                <div className="news-item" onMouseOver={hover3} onMouseOut={hover3normal}>
                    <div className="news-img"><img src={require("../images/news-img3.png")} alt="" /></div>
                    <div className="news-paragraph news-paragraph3">JOIN THE WAR AND CREATE YOUR OWN SQUAD TO CON...</div>
                    <a href="" id='parlink3'>READ MORE . .</a>
                </div>
                
            </div>
        </div>

    );
}

export default News