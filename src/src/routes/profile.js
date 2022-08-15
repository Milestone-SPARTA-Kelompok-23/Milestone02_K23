import React, { userEffect, userSatte } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css";
import { auth, db, logout } from "../firebase";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Profile from "../images/profile-img.png"
import { query, collection, getDocs, where } from "firebas/firestore";
function Dashboard() {
    const [user, loading] = useAuthState(auth);
    const [name, setname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("")
    const [address, setAddress] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserName = async () => {
        try {
            const q = query(collection(db, "users"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);
            const data = doc.docs[0].data();
            setname(data.name);
            setUsername(data.username);
            setEmail(data.email);
            setPhoneNumber(data.phoneNumber);
            setAddress(data.address);
        }   catch (err) {
            console.error(err);
            alert("An error occured while fetching user data");
        }
    };
        if (loading) return;
        if (!user) return navigate("/");
        fetchUserName();
    }, [user, loading, navigate])
    return (
        <>
        <NavBar />
            <div className="dashboard">
                <div className="dashboard__container">
                    <div className="profile-header">
                        <img src={Profile} alt="profile" />
                        <h1>Profile</h1>
                    </div>
                    <table>
                        <tr>
                            <td className="table-header">Username</td>
                            <td className="data-profile">{username}</td>
                        </tr>
                        <tr>
                            <td className="table-header">Name</td>
                            <td className="data-profile">{name}</td>
                        </tr>
                        <tr>
                            <td className="table-header">Email</td>
                            <td className="data-profile">{email}</td>
                        </tr>
                        <tr>
                            <td className="table-header">Phone Number</td>
                            <td className="data-profile">{phoneNumber}</td>
                        </tr>
                        <tr>
                            <td className="table-header">Address</td>
                            <td className="data-profile">{address}</td>
                        </tr>
                    </table>
                    <button className="dashboard__btn" onClick={logout}>
                        Logout
                    </button>
                </div>
            </div>
        <Footer />
        </>
    );
}
export default Dashboard;