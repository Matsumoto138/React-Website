import './Carrier.css';
import Header from './Header';

function Carrier() {
    
    
    
    function hover1() {
        if (document.getElementById('check').checked !== true) {
            const item1 = document.getElementsByClassName('item-text1')[0];
            item1.style.background = 'var(--dark)';
            item1.style.color = 'var(--primary)';
        }

        else{
            const item1 = document.getElementsByClassName('item-text1')[0];
            item1.style.background = 'var(--primary)';
            item1.style.color = 'var(--dark)';
        }

    }

    function hover1normal() {
        if (document.getElementById('check').checked !== true) {
            const item1 = document.getElementsByClassName('item-text1')[0];
            item1.style.background = 'var(--primary)';
            item1.style.color = 'var(--dark)';
        }

        else{
            const item1 = document.getElementsByClassName('item-text1')[0];
            item1.style.background = 'var(--dark)';
            item1.style.color = 'var(--primary)';
        }

    }

    function hover2() {
        if (document.getElementById('check').checked !== true) {
            const item1 = document.getElementsByClassName('item-text2')[0];
            item1.style.background = 'var(--dark)';
            item1.style.color = 'var(--primary)';
        }

        else{
            const item1 = document.getElementsByClassName('item-text2')[0];
            item1.style.background = 'var(--primary)';
            item1.style.color = 'var(--dark)';
        }

    }

    function hover2normal() {
        if (document.getElementById('check').checked !== true) {
            const item1 = document.getElementsByClassName('item-text2')[0];
            item1.style.background = 'var(--primary)';
            item1.style.color = 'var(--dark)';
        }

        else{
            const item1 = document.getElementsByClassName('item-text2')[0];
            item1.style.background = 'var(--dark)';
            item1.style.color = 'var(--primary)';
        }

    }

    return(
        <div className="container">
            <div className="carrier-top">
                <div className="info">CARRIER <br /> <span>Join the Anredo’s development team. Check available job post.</span></div>
                <div className="more"><a href=""><i className="fas fa-th fa-lg"  ></i></a></div>
            </div>
            
            <div className="carrier-grid">
                <div className="carrier-items">
                    <div className="carrier-item1" onMouseOver={hover1} onMouseOut={hover1normal}>
                        <div className="item-img"><img src={require("../images/career1.png")} alt="" /></div>
                        <div className="item-text item-text1"><h5>PEOPLE & ENVIRONMENT</h5></div>
                    </div>
                    <div className="carrier-item2" onMouseOver={hover2} onMouseOut={hover2normal}>
                        <div className="item-img"><img src={require("../images/career2.png")} alt="" /></div>
                        <div className="item-text item-text2"><h5>ANREDO RECUIRT</h5></div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Carrier;