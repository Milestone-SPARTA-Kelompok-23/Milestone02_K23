import NavBar from "../components/navbar";
import Footer from "../components/footer";
import '../styles/cart.css';
import CartProduct from "../components/cartProduct";
import { query, collection, getDocs, where } from "firebase/firestore";
import { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Cart = () => {
    const [user] = useAuthState(auth);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        if(user) {
            const fetchData = async () => {
                const q = query(collection(db, "users"), where("uid", "==", user?.uid));
                const doc = await getDocs(q);
                const data = doc.docs[0].data();
                if(data.cart) setCart(data.cart);
            }
            fetchData();
        }
    }, [user]);
    const quantity = () =>{
        const check = (id) => {
            for(let idx of idCart){
                if(idx === id){
                    return true;
                }
            }
            return false;
        }
        let newCart = []
        let idCart = []
        for(let item of cart){
            if (check(item.id)) {
                for(let idx of newCart){
                    if(idx.id === item.id) {
                        idx.quantity++;
                        break;
                    }
                }
            }
            else {
                idCart.push(item.id)
                newCart.push({
                    ...item,
                    quantity : 1
                })
            }
        }
        for(let item of newCart){
            item.price = item.price * item.quantity
        }
        return newCart
    }
    const newCart = quantity();
    
    if(cart.length === 0) {
        return (
            <>
                <NavBar />
                <div className="cart-kosong">
                    <div className="back">
                            <a href="/">&#8592;</a>
                    </div>
                    <div className="main-cart-kosong">
                        <h1>Keranjang Kosong</h1>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
    else {
        return (
            <>
                <NavBar />
                <div className="cart">
                    <div className="back">
                            <a href="/">&#8592;</a>
                    </div>
                    <div className="main-cart">
                        <p>{newCart.length} item(s) in your shopping cart :</p>
                        {newCart.map((item) => 
                            <CartProduct image={item.image} name={item.name} price={item.price} quantity={item.quantity}/>
                        )}  
                        <div style={{margin:"0 auto", display:"flex"}}>
                            <a href="/checkout" className="checkout-button"><button>Checkout</button></a> 
                        </div>    
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}

export default Cart;