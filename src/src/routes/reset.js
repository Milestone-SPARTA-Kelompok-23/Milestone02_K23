import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordReset } from "../firebase";
import "../styles/reset.css";
import Logo from "../images/logo.png"
import Footer from "../components/footer";

function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (user) return navigate("/", { replace: true });
  }, [user, loading, navigate]);
  return (
    <>
    <div className="login-page">
      <div className="reset">
        <div className="reset-logo">
          <a href="/">&#8592;</a>
          <img src={Logo} alt="Logo" />
        </div>
        <div className="reset__container">
          <div className="reset_field">
            <h1>Reset</h1>
            <div className="reset_input">
              <label>Email</label>
              <input
                type="text"
                className="reset__textBox"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="pasukanhmif@gmail.com"
              />
            </div>
          <div className="button-container-login">
            <button
              className="reset__btn"
              onClick={() => sendPasswordReset(email)}
            >
              Send password reset email
            </button>
            <div>
              Don't have an account? <Link to="/register" style={{color: "#606C38"}}>Register</Link>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
export default Reset;