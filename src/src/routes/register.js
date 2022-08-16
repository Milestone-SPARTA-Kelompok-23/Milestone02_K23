import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import {
  auth,
  registerWithEmailAndPassword
} from "../firebase";
import "../styles/register.css";
import Logo from "../images/logo.png";
import Footer from "../components/footer";
const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    const register = () => {
        if (!name) alert("Please enter your name");
        else if (!username) alert("Please enter username");
        else if (!phoneNumber) alert("Please enter your phone number");
        else if (!address) alert("Please enter your address");
        else if(password !== confirmPassword) alert("Password doesn't match");
        else registerWithEmailAndPassword(name, email, password, username, phoneNumber, address);
    };
    useEffect(() => {
        if (loading) return;
        if (user) return navigate("/", { replace: true });
    }, [user, loading, navigate]);
    return (
        <div class="regis_page">
            <div className="register">
                <div className="register-logo">
                    <a href="/">&#8592;</a>
                    <img src={Logo} alt="Logo" />
                </div>
                <div className="register__container">
                    <div className="register_field">
                        <h1>Register</h1>
                        <div className="register_input">
                        <label>Email</label>
                        <input
                            type="email"
                            className="register__textBox"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="pasukanhmif@gmail.com"
                        />
                        <label>Username</label>
                        <input
                            type="text"
                            className="register__textBox"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="spartans_21"
                        />
                        <label>Name</label>
                        <input
                            type="text"
                            className="register__textBox"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Spartan"
                        />
                        <label>Password</label>
                        <input
                            type="password"
                            className="register__textBox"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label style={{fontSize: "14px", marginBottom:"0.5rem"}}>Min. 6 characters</label>
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            className="register__textBox"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <label>Phone Number</label>
                        <input
                            type="number"
                            className="register__textBox"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            placeholder="0812******"
                        />
                        <label>Address</label>
                        <input
                            type="text"
                            className="register__textBox"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="Institut Teknologi Bandung"
                        />
                    </div>
                    <div className="button-container-login">
                        <button className="register__btn" onClick={register}>
                        Register
                        </button>
                        <div>
                        Already registered? <Link to="/login" style={{color: "#606C38"}}>Sign in</Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    )
}

export default Register;