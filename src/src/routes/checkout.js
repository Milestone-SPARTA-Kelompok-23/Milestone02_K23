import CheckoutProduct from '../components/checkoutProduct';
import '../styles/checkout.css'
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore"; 
const Checkout = (props) => {
    const navigate = useNavigate();
    const updateCart = async () => {
        const washingtonRef = doc(db, "users", props.doc);
        await updateDoc(washingtonRef, {
            cart : []
        });
        navigate("/", { replace: true });
        window.alert("Checkout berhasil. Terima kasih sudah belanja di toko kami :).")
    }
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
        for(let item of props.cart){
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
    const TotalPrice = () => {
        let totalPrice = 0
        for(let item of newCart){
            totalPrice += item.price
        }
        return totalPrice
    }
    if(newCart.length === 0) return navigate("/");
    return (
        <>
        <NavBar />
            <div className="checkout">
                <div className='main-checkout'>
                    <div className='checkout-details'>
                        <h2>Checkout</h2>
                        {newCart.map((item) => 
                            <CheckoutProduct image={item.image} name={item.name} price={item.price} quantity={item.quantity}/>
                        )}
                        <p className="cart-price-total">Total:<br></br><span>Rp.{TotalPrice()}</span></p>
                    </div>
                    <div className='checkout-note'>
                        <span>Note :</span>
                        <textarea></textarea>
                    </div>
                    <div className='place-order'>
                        <p>Total Payment: Rp.{TotalPrice()}</p>
                        <button onClick={updateCart}>Place Order</button>
                    </div>
                </div>
            </div>
        <Footer />
        </>
    )
}

export default Checkout;