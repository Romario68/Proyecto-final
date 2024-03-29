import { Link } from "react-router-dom"
import {ItemList} from "../ItemList/ItemList"
import { useCarritoContext } from "../../context/CarritoContext"

export const Cart = () =>{
    const {carrito, totalPrice, emptyCart } = useCarritoContext()
    return(
        <>
        {carrito.length===0
            ?
                <div className="container" style={{marginTop:"50px", marginBottom: "20px", width:"500px", border:"1px solid", borderRadius: "5px", textAlign:"center"}}>
                    <h2>Cart empty</h2>
                    <br/>
                    <Link className="nav-link" to={"/"}>
                        <button className="btn btn-dark" >Continue shopping</button>
                    </Link>
                    <br/>
                </div>
            :
                <div className="container cartContainer">
                    {
                        <ItemList products={carrito} template={'itemCart'}/>
                    }
                    <div className="divButtons">
                        <p>
                            Summary of purchase: $ {new Intl.NumberFormat(undefined, {style: 'currency', currency:'USD'}).format(totalPrice())}
                        </p>
                        <p>
                            <button className="btn btn-danger" onClick={() => emptyCart()}>Empty cart</button>
                            &nbsp;<button className="btn btn-dark"><Link className="nav-link" to={'/'}>Continue buying</Link></button> 
                            &nbsp;<button className="btn btn-dark"><Link className="nav-link" to={'/checkout'}>Finish buying</Link></button> 
                        </p>
                    </div>
                </div>
        }
        </>
    )
}
