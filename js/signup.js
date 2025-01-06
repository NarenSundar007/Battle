var form = document.getElementById('signup');
console.log(form)
form.addEventListener('submit',(event)=>{
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    event.preventDefault()
    console.log('submit')
    localStorage.setItem(username,password)
    console.log(localStorage)
    window.location.href = "login.html"
})