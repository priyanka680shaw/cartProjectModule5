import './footer.css'
function Footer({cardSetValue , setProduscts , total , setTotal}){


    const totalPrice = {
        width : "60%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // background : "wheat",
        padding : "0px 20px",
       
    }

    const p = {
        fontSize: "30px",
        background : "#645CFF",
        padding : "10px 15px",
        borderRadius : "10px",
        border : "none",
        color : "white"
    }  



    return(
        <>
           <footer>
                        {/* footer */}
                <div>
                    <hr/>
                    <div className="footerOuterContainer" style={{
                        width :  "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}> 
                    <div className="totalPrice" style={totalPrice}>
                        <p style={p}>Total Amount :  ${total}</p>
                    </div>
                    </div>
                </div>
                <div>
                    <div className="clearCart" style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop  : "20px",
                    }}>
                        <button style={{
                            fontSize : "25px",
                            background : "green",
                            color : "white",
                            padding :"10px",
                            border : "none",
                            borderRadius : "10px",
                            cursor : "pointer"
                        }} onClick={()=>{
                            setProduscts([])
                            cardSetValue(0);
                            setTotal(0);
                        }}>Clear Cart</button>
                    </div>
                </div>
            </footer>
        </>
    );
}
export default Footer;