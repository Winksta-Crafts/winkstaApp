function LOGINPAGE() {
    DIV.innerHTML=`
        <div class="login-page">
            <div id="login-logo-holder">
                <img id="login-logo" src="/Icons/winksta logo.png" />
            </div>

           
            <form class="login-form">
                <input type="email" placeholder="Enter Your Email">
                <input type="password" placeholder="Enter Your Password">
            <br><br>
                <button class="app-entrance" onclick="HOMEPAGE()">Login</button>
            </form>

            <div class="inquiry-wrapper">
                <p class="inquiry">Forgot Password?</p><br>
                <p class="inquiry" onclick='CREATEACCOUNTPAGE()'>I don't Have an Account, <b>Create Account?</b></p>
            </div>

        </div>
    `;
}