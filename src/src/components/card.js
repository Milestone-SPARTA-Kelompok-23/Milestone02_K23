import { db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore"; 

const Card = (props) => {   
    const updateCart = async () => {
        let cart = {
            id:props.id,
            image: props.image,
            name:props.name,
            price:props.price,
            quantity: 1
        }
        let newCart = props.cart
        newCart.push(cart)
        try { 
            const washingtonRef = doc(db, "users", props.doc);
            await updateDoc(washingtonRef, {
                cart : newCart
            });
            window.alert("Produk berhasil ditambahkan ke cart.")
        } catch(err) {
            window.alert("Silahkan login terlebih dahulu.")
        }
    }   
    return (
            <div className="card">
            <a href={`/products/${props.id}`}><img src={props.image} alt="fabric" className="card-image"/></a>
            <p style={{fontSize:"20px"}}>{props.name}</p>
            <div className="card-bottom">
                <div className="card-price">
                    <span style={{fontSize:"12px"}}>Price</span>
                    <span>Rp{props.price.toLocaleString()}</span>
                </div>
                <button onClick={updateCart}>Add to cart</button>
            </div>
            </div>
    )
}

export default Card;