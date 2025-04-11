function SPLASHSCREEN() {
    DIV.innerHTML=`
        <div class="splashscreen">
            <img id="splash-logo" src="/Icons/winksta logo.png" />
        </div>
    `;
    setTimeout(() => {
        LOGINPAGE()
    }, 2000);
}