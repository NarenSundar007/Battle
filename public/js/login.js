var form = document.getElementById('login');
console.log(form)
form.addEventListener('submit',(event)=>{
    event.preventDefault()
    const username = document.getElementById('loginusername').value;
    const password = document.getElementById('loginpassword').value;
    console.log('submit')
    if(password==localStorage.getItem(username)){
        console.log('login successful')
        localStorage.setItem('loginuser', username);
        window.location.href = "game.html"         
    }
    else{
        console.log('login failed')
        document.getElementById('error').textContent = "Password incorrect"
    }

})

/*document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting immediately
  validateForm();
});

function validateForm() {
  validateUsername();
  validatePassword();

  function validatePassword() {
  var password = document.getElementById("password").value;
  var passwordError = document.querySelector("#password +.error");
  if (password === "") {
    passwordError.textContent = "Password should not be empty.";
    passwordError.style.display = "block";
  } else if (password.length < 8) {
    passwordError.textContent = "Password should be at least 8 characters long.";
    passwordError.style.display = "block";
  } else {
    passwordError.textContent = "";

function validateUsername() {
  var username = document.getElementById("username").value;
  var usernameError = document.querySelector("#username +.error");
  if (username === "") {
    usernameError.textContent = "Username should not be empty.";
    usernameError.style.display = "block";
  } else {
    usernameError.textContent = "";
    usernameError.style.display = "none";
  }
}
} */