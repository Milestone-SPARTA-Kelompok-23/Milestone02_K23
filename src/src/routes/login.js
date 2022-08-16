import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "../styles/login.css";
import Footer from "../components/footer";
import Logo from "../images/logo.png";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) {
        // maybe trigger a loading screen
        return;
        }
        if (user) return navigate("/", { replace: true });
    }, [user, loading, navigate]);
    return (
        <div class="login_page">
            <div class="login_container">
                <div class="brand_logo">
                    <div className="login-logo">
                        <a href="/">&#8592;</a>
                    </div>
                    <div className="login-image">
                        <img src={Logo} alt="logo"/>
                    </div>
                </div>

    {/* <!-- Main Form --> */}
                <div class="main">
                    <div class="form_input">
                        <h1>Welcome!</h1><br></br>
                            <div class="user_input">
                                <label for="email">Email</label><br></br>
                                <input 
                                    type="text"
                                    className="login__textBox"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="pasukanhmif@gmail.com"/><br></br>
                                <label for="psw">Password</label><br></br>
                                <input type="password" 
                                id="psw"
                                className="login__textBox"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}/><br></br><br></br>
                            </div>
                            <div class="login_btn">
                                <button
                                    className="login__btn"
                                    onClick={() => logInWithEmailAndPassword(email, password)}
                                >
                                    Login
                                </button>                  
                            </div>
                            <p>
                                <Link to="/reset" style={{color: "#263618"}}><strong>Forgot Password</strong></Link>
                            </p>
                            <p>Not registered? <Link to="/register" style={{color: "#263618"}}><strong>Create an account</strong></Link></p>
                    </div>
                </div>
            </div>

        <Footer />
        </div>
    )
}

export default Login;