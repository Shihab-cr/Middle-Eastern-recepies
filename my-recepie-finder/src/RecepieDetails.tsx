import { Link, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import { useNav } from "./NavContext";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faAlarmClock, faBars, faBellConcierge, faUser } from '@fortawesome/free-solid-svg-icons';
import { faUser as farUser } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(faBars, farUser, fab);

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dish from "./Dish";

const RecepieDetails = () => {
    const url: string = "/db.json";
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
    const {setIsBrowsing, setIsHome, setIsAbout} = useNav();
    useEffect(()=>{
        setIsBrowsing(false);
        setIsHome(false);
        setIsAbout(false);
    },[]);
    const {id} = useParams();
    const {data: allRecepies, error, isLoading} = useFetch<Recepie[]>(url);
    const [myRecepie, setMyRecepie] = useState<Recepie | undefined>(undefined);
    const [recomendations, setRecomendations] = useState<Recepie[]>(allRecepies);

    const AssignMyRecepie = ()=>{
        return allRecepies?.find((res)=>{
            return res.id.toString() === id;
        });
        
    }
    const AssignRecomendations = ()=>{
        let temp : Recepie[] | undefined= allRecepies.filter((recepie:Recepie)=>{
            if(myRecepie)
            return recepie.prepTime.trim().toLowerCase().includes(myRecepie?.prepTime.trim().toLocaleLowerCase());
            else
                return undefined;
        })
        if(temp){
            temp =temp.filter((res: Recepie)=>{
                return res.id.toString() !== id;
            })
            setRecomendations(temp);
        }
        else{
            setRecomendations([]);
        }
    }
    useEffect(()=>{
        setMyRecepie(AssignMyRecepie());
    },[allRecepies, id])
    useEffect(()=>{
        AssignRecomendations();
    },[allRecepies, id, myRecepie])
    return ( 
    <div className="Recepie-Details">
        <div className="details-container">
            {isLoading && <div className="Loading-Message">Loading...</div>}
            {error && <div className="Error-Message">Error: {error}</div>}
            {myRecepie && 
                <div className="details-body">
                    
                    <div className="nested-path"><Link to="/recepies"><p>Recepies</p></Link><p>/ { myRecepie.name}</p></div>
                    <div className="selected-recepie">
                        <div className="img-holder">
                            <img src={ myRecepie.img} alt="selected recepie img"/>
                        </div>
                        <div className="description">
                            <h1>{myRecepie.name}</h1>
                            <p>{myRecepie.description}</p>
                            <div className="simple-grid">
                                    <div className="stats">
                                        <FontAwesomeIcon icon={faUser} />
                                        <p>Servings: {myRecepie.servings}</p>
                                    </div>
                                    <div className="stats">
                                        <FontAwesomeIcon icon={faAlarmClock} />
                                        <p>Prep: {myRecepie.prepTime}</p>
                                    </div>
                                    <div className="stats">
                                        <FontAwesomeIcon icon={faBellConcierge} />
                                        <p>Cook: {myRecepie.cookTime}</p>
                                    </div>
                            </div>
                            <div className="ingrediants-instructions">
                                <h2>Ingredients</h2>
                                <ul>
                                    {
                                        myRecepie.ingredients.map((item: string, index: number)=>{
                                            return <li key={index}><p>{item}</p></li>
                                        })
                                    }
                                </ul>
                                <h2>Instructions</h2>
                                <ul>
                                    {
                                        myRecepie.instructions.map((item:string, index: number)=>{
                                            return <li key={index}><p>{item}</p></li>
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {!myRecepie && <div className="not-found"><p>Recepie {id} could not be found</p></div>}
            <div className="recomendations">
                <h2>Recomended Recepies</h2>
                <div className="recomended-recepies-grid">
                    <Dish data={recomendations} error={error} isLoading={isLoading}/>
                </div>
            </div>
            <Footer/>
        </div>
    </div> );
}

export default RecepieDetails;