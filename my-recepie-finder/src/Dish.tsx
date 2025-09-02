import { Link } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAlarmClock, faBars, faBellConcierge, faUser } from '@fortawesome/free-solid-svg-icons';
import { faUser as farUser } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(faBars, farUser, fab);

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { JSX } from "react";
type Recepie ={
        name: string,
        id: number | string,
        img: string,
        description: string,
        servings: number,
        prepTime: string,
        cookTime: string,
        ingredients: string[],
        instructions: string[]
    };

type dishProps = {
    data: Recepie[],
    error: string | null,
    isLoading: boolean
}
const goTop = ()=>{scrollTo({top:0, behavior: "smooth"})};
const Dish = ({data, error, isLoading}: dishProps) : JSX.Element => {
    return (
        <div className="recepies-grid">
            
            {error && <div className="Error-Message">Error: {error}</div>}
                        {isLoading && <div className="Loading-Message">Loading...</div>}
                        
                        {data && data.map((recepie: Recepie, index: number)=>{
                            return (
                            <div className="box" key={index}>
                                <div className="img-holder">
                                    <img src={recepie.img} alt="recepie-dish"/>
                                </div>
                                <h2>{recepie.name}</h2>
                                <p>{recepie.description}</p>
                                <div className="simple-grid">
                                    <div className="stats">
                                        <FontAwesomeIcon icon={faUser} />
                                        <p>Servings: {recepie.servings}</p>
                                    </div>
                                    <div className="stats">
                                        <FontAwesomeIcon icon={faAlarmClock} />
                                        <p>Prep: {recepie.prepTime}</p>
                                    </div>
                                    <div className="stats">
                                        <FontAwesomeIcon icon={faBellConcierge} />
                                        <p>Cook: {recepie.cookTime}</p>
                                    </div>
                                </div>
                                <Link to={`/recepies/${recepie.id}`}><button onClick={goTop}>View Recepie</button></Link>
                            </div>)
                        })}
                        {(!data || data.length===0) && <div className="not-found">This dish is currently not available</div>}
        </div> 
        );
}
 
export default Dish;