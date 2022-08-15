import NavBar from "../components/navbar";
import "../styles/home.css"
import Footer from "../components/footer";
import Logo from "../images/logo.png";
import Card from "../components/card";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Data from "../components/dummy";
import { auth, db } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
const Home = () => {
    const [user, loading] = useAuthState(auth);
    const [cart, setCart] = useState([]);
    const [id, setID] = useState("");
    useEffect(() => {
            const fetchData = async () => {
                const q = query(collection(db, "users"), where("uid", "==", user?.uid));
                const doc = await getDocs(q);
                const data = doc.docs[0].data();
                setID(doc.docs[0].id);
                if(data.cart) setCart(data.cart);
            }
            if (loading) return;
            fetchData();
    }, [user, loading]);
        return (
            <>
                <NavBar />
                <div className="home">
                    <div className="header-home">
                        <div className="header-logo">
                            <img src={Logo} alt="logo" />
                            <a href="/products"><button>SHOP NOW</button></a>
                        </div>
                        <div className="header-text">
                            <h2>Who are we?</h2>
                            <p>
                                We are a platform that connects fashion enthusiasts, 
                                zero-waste fashion companies, and basically, all people
                                that believe in slow fashion to a limitless resource of 
                                zero-waste fashion. 
                            </p>
                        </div>
                    </div>
                    <div className="header-main">
                        <div className="hot-fabrics">
                            <h3>HOT FABRICS!</h3>
                            <div className="card-container">
                                <Card image={Data.data[0].image} name={Data.data[0].name} price={Data.data[0].price} id={Data.data[0].id} cart={cart} updateCart={setCart} doc={id}/>
                                <Card image={Data.data[1].image} name={Data.data[1].name} price={Data.data[1].price} id={Data.data[1].id} cart={cart} updateCart={setCart} doc={id}/>
                                <Card image={Data.data[2].image} name={Data.data[2].name} price={Data.data[2].price} id={Data.data[2].id} cart={cart} updateCart={setCart} doc={id}/>
                            </div>
                            <div className="link-more"><a href="/products">More <span>&#8594;</span></a></div>
                        </div>
                        <div className="hot-fabrics">
                            <h3>FEATURED ZERO-WASTE FASHION</h3>
                            <div className="card-container">
                                <Card image={Data.data[7].image} name={Data.data[7].name} price={Data.data[7].price} id={Data.data[7].id} cart={cart} updateCart={setCart} doc={id}/>
                                <Card image={Data.data[8].image} name={Data.data[8].name} price={Data.data[8].price} id={Data.data[8].id} cart={cart} updateCart={setCart} doc={id}/>
                                <Card image={Data.data[9].image} name={Data.data[9].name} price={Data.data[9].price} id={Data.data[9].id} cart={cart} updateCart={setCart} doc={id}/>
                            </div>
                            <div className="link-more"><a href="/products">More <span>&#8594;</span></a></div>
                        </div>
                        <div className="hot-fabrics">
                            <h3>POPULAR THRIFT</h3>
                            <div className="card-container">
                                <Card image={Data.data[13].image} name={Data.data[13].name} price={Data.data[13].price} id={Data.data[13].id} cart={cart} updateCart={setCart} doc={id}/>
                                <Card image={Data.data[14].image} name={Data.data[14].name} price={Data.data[14].price} id={Data.data[14].id} cart={cart} updateCart={setCart} doc={id}/>
                                <Card image={Data.data[15].image} name={Data.data[15].name} price={Data.data[15].price} id={Data.data[15].id} cart={cart} updateCart={setCart} doc={id}/>
                            </div>
                            <div className="link-more"><a href="/products">More <span>&#8594;</span></a></div>
                        </div>
                        <div id="about-us">
                            <div className="about-us-1">
                                <h2>Who are<br></br>we?</h2>
                                <p>
                                    We are a platform that connects fashion enthusiasts, 
                                    zero-waste fashion companies, and basically, all people
                                    that believe in slow fashion to a limitless resource of 
                                    zero-waste fashion. We provide clean, sorted, and 
                                    ready-to-process factory scrap materials for zero-waste 
                                    fashion companies and designers. We also provide e-commerce 
                                    for beautiful ready-made zero-waste and cool thrifted fashion. 
                                </p>
                            </div>
                            <div className="about-us-2">
                                <h2>Our<br></br>Mission</h2>
                                <p>
                                    Our mission is to save our planet from 
                                    fashion waste pollution and make slow 
                                    fashion a lifestyle trend.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
}
export default Home;