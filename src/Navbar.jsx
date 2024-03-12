import { FaCartPlus } from "react-icons/fa";
import './navbar.css';
function Navbar({catrValue}){
    return(
        <>
            <nav>
                <div className="navOuterContainer">
                    <div className="navInnerContainer">
                        <h1 style={{color : "white" , fontSize : "30px"}}>Cart</h1>
                        <div className="cart">
                        <FaCartPlus />
                       <span>{catrValue}</span>
                        </div>
                        
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Navbar;