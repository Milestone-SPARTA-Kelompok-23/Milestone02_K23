import { useParams } from "react-router-dom";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/product.css";
import { db } from "../firebase";
import { doc, updateDoc} from "firebase/firestore";

const Product = (props) => {
    const {id} = useParams();
    const data = props.data.data.filter(item => item.id === id)[0];
    console.log(data)
    const updateCart = async () => {
        let cart = {
            id:data.id,
            image:data.image,
            name:data.name,
            price:data.price
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
        <div>
            <NavBar />
            <div className="product">
                <div className="back">
                    <a href="/products">&#8592;</a>
                </div>
                <div className="main-product">
                    <div>
                        <div className="product-image">
                            <img src={data.image} alt="product" />
                        </div>
                    </div>
                    <div className="product-details">
                        <h1>{data.name}</h1>
                        <hr></hr>
                        <p>Description :</p>
                        <p>{data.description}</p>
                        <p className="price-product">Price:<br></br><span>Rp.{data.price}/kg</span></p>
                        <button onClick={updateCart}>Add to cart</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Product;