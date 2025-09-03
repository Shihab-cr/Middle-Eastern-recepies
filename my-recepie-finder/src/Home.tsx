import { library } from '@fortawesome/fontawesome-svg-core';
import { faBolt, faCarrot, faCoffee, faHome, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser as farUser } from '@fortawesome/free-regular-svg-icons';
import { fab} from '@fortawesome/free-brands-svg-icons';

library.add(faCoffee, faHome, farUser, fab);

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Link } from 'react-router-dom';
import Footer from './Footer';
import { useNav } from './NavContext';
import { useEffect} from 'react'
import MyAction from './MyAction';
import { Link } from 'react-router-dom';

const Home = () => {
    const {setIsHome, setIsAbout, setIsBrowsing} = useNav();
    const goTop = ()=>{window.scrollTo({top: 0 , behavior: "smooth"})};
    useEffect(()=>{
        setIsHome(true);
        setIsAbout(false);
        setIsBrowsing(false);
    },[])
    return ( 
        <div className="Home">
            <div className="home-container">
                <div className="title">
                    <h1><span>Middle<b id='dashes'>-</b>Eastern</span> Dishes<b id='dashes'>,</b> taste the real culture</h1>
                    <p>Where age-old recipes meet generations of expert craftsmanship, and the past meets the future</p>
                    <Link to="/recepies"><button onClick={goTop}>Start exploring</button></Link>
                    <img src="/imgs/landing2.png" alt="Landing img"/>
                </div>
                <div className="what-you-get">
                    <h2>What you<span>'</span>ll get</h2>
                    <div className="container">
                        <div className="box">
                            <FontAwesomeIcon icon={faCarrot} />
                            <h3>Whole-food recepies</h3>
                            <p>Each dish uses a combination of special spices</p>
                        </div>
                        <div className="box">
                            <FontAwesomeIcon icon={faBolt} />
                            <h3>Whole-food recepies</h3>
                            <p>Each dish is designed to fill an empty stomach with all the valuable nutrients</p>
                        </div>
                        <div className="box">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                            <h3>Search in seconds</h3>
                            <p>Filter by name or ingredient and jump straight to the recpie you need</p>
                        </div>
                        
                    </div>
                </div>
                <div className='for-life'>
                    <div className='description'>
                        <h2>Built for real life</h2>
                        <p>Cooking is an art. And art requires balance and control to achieve <span>mastery</span>, these recepies are written with details from real food masters. Each dish has its own story</p>
                        <p>Whether you are new to the kitchen or just need a new taste in your life, we've got you covered</p>
                    </div>
                    <img src="/imgs/landing1.jpg" alt="landing img"/>
                </div>
                <MyAction/>
                <Footer/>
            </div>
        </div>
    );
}

export default Home;