document.addEventListener("DOMContentLoaded", function() {
    if (Cookies.get('notif') === "false" || Cookies.get('notif') === undefined) {
        console.log("append");
        let div = document.getElementById("dwnnotif-holder");
        if (div) {
            console.log("dwnnotif-holder found");
            div.innerHTML = `
                <div id="spacer-1" class="spacer-1"></div>
                <div id="dwnnotif" class="dwnnotif">
                    <p>Californian law (CCPA) dictates that we need to ask for consent to store your auth state in cookies🍪 (your choice will be remembered for a day)</p>
                    <button onclick="Cookies.set('notif', 'true', { expires: 1 });" class="ybtn">Allow</button>
                    <button onclick='closeNotif()' class="finbtn">Deny</button>
                </div>
            `;
        } else {
            console.log("dwnnotif-holder not found");
        }
    } else {
        console.log("no append");
    }
});
function closeNotif() {
    let notifElement = document.getElementById("dwnnotif");
    let spacerElement = document.getElementById("spacer-1");
    if (notifElement) {
        notifElement.remove();
    }
    if (spacerElement) {
        spacerElement.style.display = "none";
    }
}