import { createContext, useContext, useState, useEffect } from "react"
import type { JSX, ReactNode} from 'react'
type NavContextType ={
    isHome: boolean;
    isAbout: boolean;
    isBrowsing: boolean;
    setIsHome: React.Dispatch<React.SetStateAction<boolean>>;
    setIsAbout: React.Dispatch<React.SetStateAction<boolean>>;
    setIsBrowsing: React.Dispatch<React.SetStateAction<boolean>>;
    
}
// eslint-disable-next-line react-refresh/only-export-components
const NavContext = createContext<NavContextType | undefined>(undefined);
type NavProviderProps ={
    children: ReactNode
}
const NavProvider = ({children}: NavProviderProps): JSX.Element =>{
     useEffect(() => { 
        // console.log("NavProvider mounted"); 
    }, []);
    const [isHome, setIsHome] = useState(true);
    const [isAbout, setIsAbout] = useState(false);
    const [isBrowsing, setIsBrowsing] = useState(false);

    return(
        <NavContext.Provider value={{isHome, setIsHome, isAbout, setIsAbout, isBrowsing, setIsBrowsing}}>
            {children}
        </NavContext.Provider>
    );
}
// eslint-disable-next-line react-refresh/only-export-components
export function useNav(){
    const myNav: NavContextType | undefined = useContext(NavContext);
    // console.log("useNav myNav", myNav);
    if(!myNav) throw new Error("useNav must be used within NavProvider");
    
    return myNav;
}
export default NavProvider