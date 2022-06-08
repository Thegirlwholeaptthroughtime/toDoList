const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")


const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"




function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username)
    paintGreetings(username)
}

// loginForm 을 submit 하면 일어날일
// input 의 원래성격인 새로고침을 막는다
// 로그인폼에 hidden이라는 class명을 추가한다
// username 이라는 변수를 생성함 -> 그것은 logininput에 입력한값
// 위의값을 콘솔로 찍어냄
// greeting 안에 들어갈 텍스트 값은 username
// greeting의 class명 중 hidden 을 지운다.
// localstorage에 이름을 저장한다.




function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`
    greeting.classList.remove(HIDDEN_CLASSNAME)
}


const savedUsername = localStorage.getItem(USERNAME_KEY)

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit)
} else {
    /* loginForm.classList.add(HIDDEN_CLASSNAME) */
    paintGreetings(savedUsername)
}