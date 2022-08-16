import Pagination from '../components/pagination';
import Card from "../components/card";
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Data from "../components/dummy";
import { auth, db } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

const Products = () => {
    const [user, loading] = useAuthState(auth);
    const [cart, setCart] = useState([]);
    const [category, setCategory] = useState("Fabrics");
    const [id, setID] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if(user) {
                const fetchData = async () => {
                    const q = query(collection(db, "users"), where("uid", "==", user?.uid));
                    const doc = await getDocs(q);
                    const data = doc.docs[0].data();
                    setID(doc.docs[0].id);
                    if(data.cart) setCart(data.cart);
                }
                if (loading) return;
                fetchData();
        }
    }, [user, loading, navigate]);
    const fetchCategory = (e) => {
        const category = e
        setCategory(category)
    }
        return (
            <div className='products'>
                <NavBar />
                <h1>Our {category}</h1>
                <div className='main-products'>
                    <div className='categories'>
                        <h2>Categories</h2>
                        <table>
                            <tr onClick={() => fetchCategory('Fabrics')}>
                                <td>Fabrics</td>
                            </tr>
                            <tr onClick={() => fetchCategory('Zero-Waste Fashion')}>
                                <td>Zero-Waste Fashion</td>
                            </tr>
                            <tr onClick={() => fetchCategory('Thrift')}>
                                <td>Thrift</td>
                            </tr>
                        </table>
                    </div>
                    <Pagination
                        data={Data}
                        RenderComponent={Card}
                        title="Posts"
                        pageLimit={2}
                        dataLimit={6}
                        cart={cart}
                        updateCart={setCart} 
                        doc={id}
                        category={category}
                    />
                </div>
                <Footer />
            </div>
        )
}

export default Products;