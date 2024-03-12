import "./card.css"
import { IoIosArrowDown , IoIosArrowUp} from "react-icons/io";
import image1 from './assets/phone-1.png'
import { useState } from "react";
function Card({image , phoneName , price , cardSetValue , catrValue ,  products , setTotal , total , setProduscts , id }){
    const [productBtn , productSetbtn] = useState(1);

    function increase(id){
        console.log("id" , products)
        const updateddata = products.map((data)=>{
            if(data.id === id){
                setTotal(parseInt(data.price) + total);
                productSetbtn(productBtn+1)
                cardSetValue(catrValue+1)
            }
            return data;
        })
        
        setProduscts(updateddata);
    }

    //decreasing

    function decreasing(id ){
        if(productBtn>0){
            const updateProduct = products.map((data)=>{
                if(data.id === id){
                    setTotal(total - data.price); 
                    productSetbtn(productBtn-1);
                    cardSetValue((previous)=>{
                        previous-1;
                    });
                }
                return data;
            })
            setProduscts(updateProduct);
        }
        
    }

     //remove
     function removeData(id){
        const updateProduct = products.filter((data , index)=>{
            if(data.id === id){
                // products.splice(index , 1);
                // console.log("id" , id)
                return false

            }
            return true;
        })
       
        setProduscts(updateProduct);
    }



    return(
        <>
            <div className="mainContainer">
                <div className="innerContainer">
                    <div className="left">
                        <div className="image">
                            <figure>
                                <img src={image} alt="phone"></img>
                            </figure>
                        </div>
                        <div className="aboutImage">
                            <h1>{phoneName}</h1>
                            <p className="price">
                               {price}
                            </p>
                            <span className="del" onClick={()=>{
                                removeData(id)
                            }}>
                                Remove
                            </span>
                        </div>
                    </div>
                    <div className="right">
                        <div className="rightInnerContainer">
                            <IoIosArrowUp className="arrow" onClick={()=>{
                               increase(id);
                                 
                            }}/>
                            <h5 className="quantity">{productBtn}</h5>
                            <IoIosArrowDown className="arrow" onClick={()=>{
                                decreasing(id);
                            }}/>
                        </div>
                        </div>
                </div>
            </div>
           
        </>
    );
}
export default Card;