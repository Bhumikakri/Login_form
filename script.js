let form = document.getElementById("main");
let button1 = document.getElementById("open");
let loginbtn = document.getElementById("btnn");
// let UserId = document.querySelector("#id");
let ans = document.getElementById("done");


form.style.display = "none";

button1.addEventListener("click", ()=>{
    form.style.display = "block";
    button1.style.display = "none";
})

loginbtn.addEventListener('click', (e)=>{
    e.preventDefault();
    const username = document.getElementById('id').value;
    const password = document.getElementById('Password').value;

    const isUsernameValid = username.length >= 9 && username[0] === username[0].toUpperCase() && /[!@#$%^&*]/.test(username);
    const isPasswordValid = password.length >= 9 && password.length <= 20 && /[!@#$%^&*]/.test(password);

    if(isUsernameValid && isPasswordValid){
        ans.innerText=`congatulation 🥳 Login done! Username:${ username} '\n Password:'${password}`;
    }else{
        alert('Invalid username or password. Please check it again!')
    }

})

