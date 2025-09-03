import { useEffect } from 'react';
import Footer from './Footer'
import MyAction from './MyAction'
import {useNav} from './NavContext'
const About = () => {
    
    const {setIsHome, setIsAbout, setIsBrowsing} = useNav();
        useEffect(()=>{
            setIsHome(false);
            setIsAbout(true);
            setIsBrowsing(false);
        },[]);
    return ( 
        <div className="About-Page">
            <div className="about-container">
                <div className='mission'>
                    <div className='description'>
                        <p className='marked'>Our mission</p>
                        <h1>Help more people cook nourishing meals<span>,</span> more often<span>.</span></h1>
                        <p>Healthy Recipe Finder was created to prove that healthy eating can be convenient, affordable, and genuinely delicious.</p>
                        <p>We showcase quick, whole-food dishes that anyone can master—no fancy equipment, no ultra-processed shortcuts—just honest ingredients and straightforward steps.</p>
                    </div>
                    <img src="/imgs/landing3.png" alt="Landing image"/>
                </div>
                <div className='sections'>
                    <h1>Why we exist</h1>
                    <ul>
                        <li>
                            <h3>Cut throught the noise</h3>
                            <p>The internet is bursting with recipes, yet most busy cooks still default to take-away or packaged foods. We curate a tight collection of fool-proof dishes so you can skip the scrolling and start cooking.</p>
                        </li>
                        <li>
                            <h3>Empower home kitchens.</h3>
                            <p>
                                When you control what goes into your meals, you control how you feel. Every recipe is built around unrefined ingredients and ready in about half an hour of active prep.
                            </p>
                        </li>
                        <li>
                            <h3>Make healthy look good.</h3>
                            <p>
                                High-resolution imagery shows you exactly what success looks like—because we eat with our eyes first, and confidence matters.
                            </p>
                        </li>
                    </ul>
                </div>
                <div className='sections'>
                    <h1>
                        Our food philosophy
                    </h1>
                    <ul>
                        <li>
                            <h3>Whole ingredients first.</h3>
                            <p>Fresh produce, grains, legumes, herbs, and quality fats form the backbone of every recipe.</p>
                        </li>
                        <li>
                            <h3>Flavor without compromise.</h3>
                            <p>Spices, citrus, and natural sweetness replace excess salt, sugar, and additives.</p>
                        </li>
                        <li>
                            <h3>Respect for time.</h3>
                            <p>Weeknight meals should slot into real schedules; weekend cooking can be leisurely but never wasteful.</p>
                        </li>
                        <li>
                            <h3>Sustainable choices.</h3>
                            <p>Short ingredient lists cut down on food waste and carbon footprint, while plant-forward dishes keep things planet-friendly.</p>
                        </li>
                    </ul>

                </div>
                <div className='mission'>
                    <div className='description'>
                        
                        <h1>Beyond the plate</h1>
                        <p>We believe food is a catalyst for community and well-being. By sharing approachable recipes, we hope to:</p>
                        <ul>
                            <li>Encourage family dinners and social cooking.</li>
                            <li>Reduce reliance on single-use packaging and delivery waste.</li>
                            <li>Spark curiosity about seasonal produce and local agriculture.</li>
                        </ul>
                    </div>
                    <img src="/imgs/landing4.jpg" alt="Landing image"/>
                </div>
                <MyAction/>
                <Footer/>
            </div>
        </div>
     );
}
 
export default About;