const Register = () => {
    return (
        <div class="regis_page">
            <div class="regis_container">
                <div class="brand_logo">
                    <img src="../images/logo.png">
                </div>

    {/* <!-- Main Form --> */}
                <div class="main">
                    <div class="form_input">
                        <h1>Register</h1><br>
                        <form>
                            <div class="user_input">
                                <label for="email">Email</label><br>
                                <input 
                                    type="text" 
                                    id="email" 
                                    placeholder="pasukanhmif@gmail.com"><br>
                                <label for="uname">Username</label><br>
                                <input 
                                    type="text"
                                    id="uname"
                                    placeholder="spartans_21"><br>
                                <label for="psw">Password</label><br>
                                <input type="password" id="psw">
                                <p>Min. 5 characters, must be a combination of letter and number</p><br>
                                <label for="psw2">Confirm Password</label><br>
                                <input type="password" id="psw2"><br>
                            </div>
                            <div class="regis_btn">
                                <a href="login.html">
                                    <button type="submit">Register</button>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

    {/* <!-- Footer --> */}
            <div class="footer">
                <br><br>
                <p1>About Us Privacy Policy</p1>
                <br>
                <p2>Contact Us</p2>
                <br><br>
                <p3>By Spartans made with ❤️</p3>
                <br><br>
            </div>
        </div>
    )
}

export default Register;