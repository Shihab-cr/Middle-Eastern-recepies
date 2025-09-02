import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faHeart, faHome, faKiwiBird} from '@fortawesome/free-solid-svg-icons';
import { faUser as farUser } from '@fortawesome/free-regular-svg-icons';
import { fab,  faInstagram, faTiktok,  faYoutube } from '@fortawesome/free-brands-svg-icons';

library.add(faCoffee, faHome, farUser, fab);

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Footer = () => {
    return ( 
        <footer>
                    <p>Made with <FontAwesomeIcon icon={faHeart}/> and <FontAwesomeIcon icon={faKiwiBird}/></p>
                    <div className='socialMedia'>
                        <Link to="https://instgram.com"><FontAwesomeIcon icon={faInstagram}/></Link>
                        <Link to=""><FontAwesomeIcon icon={faTiktok}/></Link>
                        <Link to="https://youtube.com"><FontAwesomeIcon icon={faYoutube}/></Link>
                    </div>
        </footer>
     );
}

export default Footer;