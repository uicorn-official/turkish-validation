const email = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("submit");

submit.addEventListener("mouseover", (button)=>{
    if( !(email.value && password.value)){
        button.target.classList.toggle("notValid")
    }
})
submit.addEventListener("click", (event) =>{
        event.preventDefault()
        document.querySelector("body").classList.add("success")
        document.querySelector("form").classList.add("hide")
})