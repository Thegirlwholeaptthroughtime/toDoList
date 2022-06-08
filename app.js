const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden"


function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME)
    const username = loginInput.value;
    localStorage.setItem("username", username)
    greeting.innerText = `안녕! ${username} 뒤져`;
    greeting.classList.remove(HIDDEN_CLASSNAME)
    //greeting.innerText = "안녕  " + username;

}



loginForm.addEventListener("submit", onLoginSubmit);