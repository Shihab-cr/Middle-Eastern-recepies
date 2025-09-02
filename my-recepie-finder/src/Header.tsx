import { Link } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUser as farUser } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(faBars, farUser, fab);

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";
import { useNav } from "./NavContext";


const Header = () => {
    const [isShowingNavs , setIsShowingNavs] = useState(false);
    const handleBurger = ()=>{
        // setTimeout(()=>{
        // },300)
        setIsShowingNavs(!isShowingNavs);
    }
    const {isHome,isAbout,isBrowsing} = useNav();
    return ( 
    <div className="Header">
        <div className="header-container">
            <h4 className="web-title">Middle<span>-</span>Eastern Recepies</h4>
            <nav className="navs">
                <Link to="/" className={isHome? "current":"outside"}>Home</Link>
                <Link to="/about" className={isAbout? "current":"outside"}>About</Link>
                <Link to="/recepies" className={isBrowsing? "current":"outside"}>Recepies</Link>
            </nav>
            <Link to="/recepies"><button>Browse recepies</button></Link>
            
            <button onClick={handleBurger} className="burgerIcon"><FontAwesomeIcon icon={faBars} />
            </button>
            <div className="menu-border">
                <div className={isShowingNavs? "drop-down-menu": "close-menu"}>
                    <Link onClick={handleBurger} to="/" className={isHome? "current":"outside"}>Home</Link>
                    <Link onClick={handleBurger} to="/about" className={isAbout? "current":"outside"}>About</Link>
                    <Link onClick={handleBurger} to="/recepies" className={isBrowsing? "current":"outside"}>Recepies</Link>
                </div>
            </div>
            <div className={isShowingNavs? "menu-shadow-show":"menu-shadow-hide"} onClick={handleBurger}/>
            
        </div>
    </div> );
}

export default Header;