import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './routes/login.js';
import Register from './routes/register.js';
import Reset from './routes/reset.js';
import Profile from './routes/profile.js';
import Home from './routes/home.js';
import Products from './routes/products';
import './styles/card.css'
import './styles/products.css'
import Data from "./components/dummy"
import Product from './routes/product';
import Cart from "./routes/cart";
import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import Checkout from './routes/checkout';
import WhatsApp from "./components/whatsapp.js";

function App() {
  const [user] = useAuthState(auth);
  const [cart, setCart] = useState([]);
  const [id, setID] = useState("");
  useEffect(() => {
    if(user) {
            const fetchData = async () => {
                const q = query(collection(db, "users"), where("uid", "==", user?.uid));
                const doc = await getDocs(q);
                const data = doc.docs[0].data();
                setID(doc.docs[0].id);
                if(data.cart) setCart(data.cart);
            }
            fetchData();
    }
  }, [user]);
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/products" element={<Products user={user}/>} />
          <Route path="/products/:id" element={<Product data={Data} cart={cart} doc={id} user={user}/>} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/checkout" element={<Checkout data={Data} cart={cart} doc={id} user={user}/>} />
        </Routes>
        <WhatsApp />
      </BrowserRouter>
    </div>
  );
}
export default App;
