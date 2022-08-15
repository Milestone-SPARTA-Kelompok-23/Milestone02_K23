const Login = () => {
    return (
        <div class="login_page">
            <div class="login_container">
                <div class="brand_logo">
                    <img src="../images/logo.png">
                </div>

    {/* <!-- Main Form --> */}
                <div class="main">
                    <div class="form_input">
                        <h1>Welcome!</h1><br>
                        <form>
                            <div class="user_input">
                                <label for="email">Email</label><br>
                                <input 
                                    type="text" 
                                    id="email" 
                                    placeholder="pasukanhmif@gmail.com"><br>
                                <label for="psw">Password</label><br>
                                <input type="password" id="psw"><br><br>
                            </div>
                            <div class="login_btn">
                                <a href="register.html">
                                    <button type="submit">Login</button>
                                </a>
                            
                            </div>
                            <p>Not registered? <a href="register.html"><strong>Create an account</strong></a></p>
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

export default Login;