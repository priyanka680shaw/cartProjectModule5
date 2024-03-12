import Card from "./Card";
import img1 from './assets/phone-1.png';
import img2 from './assets//phone-2.png'
import img3 from './assets/phone-3.png'
import img4 from './assets//phone-4.png'
import { useState } from "react";
import Navbar from "./Navbar"
import Footer from "./Footer";
function CardDisplay(){


    const [products , setProduscts] = useState( [
        {
            id : "1",
            image : img1,
            phoneName : "Samsung Galaxy S8",
            price : 500
        },

        {
            id : "2",
            image : img2,
            phoneName : "Google Pixel",
            price : 499.99
        },

        {
            id : "3",
            image : img3,
            phoneName : "Xiaomi Redmi Note 2",
            price : 699.99
        },

        {
            id : "4",
            image : img4,
            phoneName : "Samsung Galaxy S7",
            price : 599.99
        },
    ])

    const p = {
        fontSize: "30px",
        background : "#645CFF",
        padding : "10px",
        borderRadius : "10px",
        border : "none"
    }
//navbarCart
    const [catrValue , cardSetValue] = useState(4);
//total price
    const [total , setTotal] = useState(2299.88)
    return(
        <>
            <Navbar catrValue = {catrValue}/>  
        <div>
            {
                products.length===0 && <p style={{
                    fontSize :"50px",
                    fontWeight : "bolder",
                    color : "green",
                    textAlign : "center"
                }}>Your card is Empty</p>
            }

            {
                products.map((data , index)=>{
                    return(
                        <Card image ={data.image} phoneName = {data.phoneName} price ={data.price} key = {index} cardSetValue = {cardSetValue} catrValue={catrValue} products ={products} setTotal = {setTotal} total = {total} setProduscts={setProduscts} id = {data.id}/>
                    )
                })
            }
        </div>
        <section>
        <Footer cardSetValue = {cardSetValue}  setProduscts = {setProduscts} total={total} setTotal ={setTotal}/>
        </section>
        </>
    );
}
export default CardDisplay;