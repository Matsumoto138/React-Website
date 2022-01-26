import './Team.css';
function Team() {
    return(

        <div className="container">
            <div className="Team-top">
                <div className="info">ANREDO Team <br /><span>Meet our development team and know more about how we work.</span></div>
                <div className="more"><a href=""><i className="fas fa-th fa-lg"  ></i></a></div>
            </div>

            <div className="team-grid">
                <div className="team-items">
                    <div className="team-item1">
                        <div className="item-img"><img src={require('../images/team1.png')} alt="" /></div>
                        <div className="item-text-white">NARESH KUMAR  <br /> <span>Director</span> </div>
                            <div className="item-icons">
                                <ul>
                                    <li><a href="" className='white-links'><i className="fab fa-facebook-f fa-sm"></i></a></li>
                                    <li><a href="" className='white-links'><i className="fab fa-twitter fa-sm"></i></a></li>
                                    <li><a href="" className='white-links'><i className="fab fa-linkedin-in fa-sm"></i></a></li>
                                    <li><a href="" className='white-links'><i className="fab fa-instagram fa-sm"></i></a></li>
                                </ul>
                            </div>
                        
                    </div>
                    <div className="team-item2">
                    <div className="item-img"><img src={require('../images/team2.png')} alt="" /></div>
                        <div className="item-text-white">ANAS<br /><span>Administrative Assistant</span></div>
                            <div className="item-icons">
                                <ul>
                                    <li><a href="" className='white-links'><i className="fab fa-facebook-f fa-md"></i></a></li>
                                    <li><a href="" className='white-links'><i className="fab fa-twitter fa-md"></i></a></li>
                                    <li><a href="" className='white-links'><i className="fab fa-linkedin-in fa-md"></i></a></li>
                                    <li><a href="" className='white-links'><i className="fab fa-instagram fa-md"></i></a></li>
                                </ul>
                            </div>
                    </div>
                    <div className="team-item3">
                    <div className="item-img"><img src={require('../images/team3.png')} alt="" /></div>
                        <div className="item-text-white">ALINK <br /> <span>Lead Programmer</span> </div>
                            <div className="item-icons">
                                <ul>
                                    <li><a href="" className='white-links'><i className="fab fa-facebook-f fa-md"></i></a></li>
                                    <li><a href="" className='white-links'><i className="fab fa-twitter fa-md"></i></a></li>
                                    <li><a href="" className='white-links'><i className="fab fa-linkedin-in fa-md"></i></a></li>
                                    <li><a href="" className='white-links'><i className="fab fa-instagram fa-md"></i></a></li>
                                </ul>
                            </div>
                    </div>
                    <div className="team-item4">
                    <div className="item-img"><img src={require('../images/team4.png')} alt="" /></div>
                        <div className="item-text-white">ERIK <br /> <span>BP Programmer</span> </div>
                            <div className="item-icons">
                                <ul>
                                    <li><a href="" className='white-links'><i className="fab fa-facebook-f fa-md"></i></a></li>
                                    <li><a href="" className='white-links'><i className="fab fa-twitter fa-md"></i></a></li>
                                    <li><a href="" className='white-links'><i className="fab fa-linkedin-in fa-md"></i></a></li>
                                    <li><a href="" className='white-links'><i className="fab fa-instagram fa-md"></i></a></li>
                                </ul>
                            </div>
                    </div>
                    <div className="team-item5">
                    <div className="item-img"><img src={require('../images/team5.png')} alt="" /></div>
                        <div className="item-text-white">ZAIRA <br /> <span>Voice Artist</span> </div>
                            <div className="item-icons">
                                <ul>
                                    <li><a href="" className='white-links'><i className="fab fa-facebook-f fa-md"></i></a></li>
                                    <li><a href="" className='white-links'><i className="fab fa-twitter fa-md"></i></a></li>
                                    <li><a href="" className='white-links'><i className="fab fa-linkedin-in fa-md"></i></a></li>
                                    <li><a href="" className='white-links'><i className="fab fa-instagram fa-md"></i></a></li>
                                </ul>
                            </div>
                    </div>
                </div>
            </div>
        </div>

       
    );
}

export default Team;