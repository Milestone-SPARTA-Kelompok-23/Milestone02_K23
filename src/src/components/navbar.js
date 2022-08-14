import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import Logo from "../images/logo-mini.png";
import '../styles/navbar.css';

const NavBar = () => {
    const [user] = useAuthState(auth);
    if (!user) return (
        <nav className="nav">
            <span className="nav_logo">
                <a href="/"><img src={Logo} alt="logo"/></a>
            </span>
            <ol className="nav_list">
                <li className="nav_item">
                    <a href="/" className="nav_link underline">Home</a>
                </li>
                <li className="nav_item">
                    <a href="/login" className="nav_link underline">Sign In</a>
                </li>
            </ol>
        </nav>
    )
    else return (
        <nav>
            <span className="nav_logo">
                <a href="/"><img src={Logo} alt="logo"/></a>
            </span>
            <ol className="nav_list">
                <li className="nav_item">
                    <a href="/cart" className="nav_link underline">Cart</a>
                </li>
                <li className="nav_item">
                    <a href="/profile" className="nav_link underline">Profile</a>
                </li>
            </ol>
        </nav>
    )
}

export default NavBar;