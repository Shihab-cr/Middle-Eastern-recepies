import { Link } from "react-router-dom";

const MyAction = () => {
    const goTop = ()=>{scrollTo({top: 0, behavior: "smooth"})};
    
    return ( 
        
            <div className="call-to-action">
                    <div className='box'>
                        <h2>Ready to taste culture<span>?</span></h2>
                        <p>Hit the button, pick a recipe, and get dinner on the table--fast.</p>
                        <Link to="/recepies"><button onClick={goTop}>Browse recipes</button></Link>
                    </div>
                </div>
        
     );
}
 
export default MyAction;