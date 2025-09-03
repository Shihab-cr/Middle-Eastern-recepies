
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { useNav } from "./NavContext";
import Footer from "./Footer";
import useFetch from "./useFetch";
import Dish from "./Dish";

const Recepies = ()=>{
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
    const {data, error, isLoading, refetch} = useFetch<Recepie[]>("/db.json");
    const { setIsHome, setIsAbout, setIsBrowsing} = useNav();
    useEffect(()=>{
        setIsHome(false);
        setIsAbout(false);
        setIsBrowsing(true);
        refetch();
    },[]);

        const recipesList: Recepie[] = (() => {
    if (!data) return []; // nothing yet
    if (Array.isArray(data)) return data as Recepie[];
    // handle common wrappers like { recepies: [...] } or { data: [...] }
    const maybeObj = data as { recepies?: Recepie[]; data?: Recepie[] } | null;
    if (maybeObj?.recepies && Array.isArray(maybeObj.recepies)) return maybeObj.recepies;
    if (maybeObj?.data && Array.isArray(maybeObj.data)) return maybeObj.data;
    return []; // fallback
    })();

    const [prepTimeFilter, setPrepTimeFilter] = useState("");
    const [cookTimeFilter, setCookTimeFilter] = useState("");
    const [searchInput, setSearchInput] = useState("");

    const [searchResult, setSearchResult] = useState<Recepie[]>([]);
    const [displayResult, setDisplayResult] = useState<Recepie[]>([]);

    const handleSearch = ()=>{
        
    if(searchInput !== ""){
        const temp1 = recipesList.filter((res)=>{
        return (
            res.ingredients.join().trim().toLowerCase().includes(searchInput.trim().toLowerCase()) ||
            res.name.toLowerCase().trim().includes(searchInput.trim().toLowerCase())
        );
        });
        setSearchResult(temp1);
    } else {
        setSearchResult(recipesList);
    }

    }
    const handleFilters = ()=>{
        if(prepTimeFilter !== "" && cookTimeFilter === ""){
            const temp1 = searchResult.filter((res)=>{
                return(res.prepTime.trim().includes(prepTimeFilter.trim()));
            })
            setDisplayResult(temp1);
        }
        else if(prepTimeFilter === "" && cookTimeFilter !== ""){
            const temp = searchResult.filter((res)=>{
                return(res.cookTime.trim().includes(cookTimeFilter.trim()));
            })
            setDisplayResult(temp);
        }
        else if(prepTimeFilter === "" && cookTimeFilter === ""){
            setDisplayResult(searchResult);
        }
        else{
            const temp = searchResult.filter((res)=>{
                return(res.cookTime.trim().includes(cookTimeFilter.trim()) && res.prepTime.trim().includes(prepTimeFilter.trim()));
            })
            setDisplayResult(temp);
        }
        
    }
    useEffect(()=>{
        setDisplayResult(recipesList);
        setSearchResult(recipesList);
    },[recipesList]);

    useEffect(()=>{
        handleSearch();
    }, [searchInput, recipesList]);
    useEffect(()=>{
        handleFilters();
    }, [searchResult, prepTimeFilter, cookTimeFilter]);

    return(
        <div className="Recepies-Browser">
            <div className="recepies-container">
                <div className="title">
                    <h1>Explore our awesome<span>,</span> tasty and healthy recipes</h1>
                    <p>Discover quick<span>,</span> whole-food dishes that fit real-life schedules and taste amazing. Use the search bar to find a recipe by name or ingredient, or simply scroll the list and let something delicious catch your eye.</p>
                </div>
                <div className="controls">
                    <div className="filters">
                        <select onChange={(e)=>{setPrepTimeFilter(e.target.value)}}>
                            <option value={""}>Max Prep Time</option>
                            <option value={"5 mins"}>5 mins</option>
                            <option value={"10 mins"}>10 mins</option>
                            <option value={"15 mins"}>15 mins</option>
                            <option value={"20 mins"}>20 mins</option>
                            <option value={"25 mins"}>25 mins</option>
                        </select>

                        <select onChange={(e)=>{setCookTimeFilter(e.target.value)}}>
                            <option value={""}>Max Cook Time</option>
                            <option value={"5 mins"}>5 mins</option>
                            <option value={"10 mins"}>10 mins</option>
                            <option value={"15 mins"}>15 mins</option>
                            <option value={"20 mins"}>20 mins</option>
                            <option value={"25 mins"}>25 mins</option>
                        </select>
                    </div>
                    <input type="text" placeholder={"Search by name or ingredients"} value={searchInput} onChange={(e)=>setSearchInput(e.target.value)}></input>
                </div>
                <Dish data={displayResult} error={error} isLoading={isLoading}/>
                
                <Footer/>
            </div>
        </div>
    );
}

export default Recepies;