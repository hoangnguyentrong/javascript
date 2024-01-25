const email = document.getElementById('email');
const password = document.getElementById('password');

const email_error = document.getElementById('email_error');
const password_error = document.getElementById('password_error');

// var user = {
//   email: "hoang@gmail.com",
//   password: "12345678"
// };

function emailFormat() {
  email_error.innerHTML = "";
 
  if (email.value === "" || email.value== null) {
    email_error.innerHTML = "Please enter the email";
  } else if (!isValidEmail(email.value)) {
    email_error.innerHTML = "Invalid email format";
  }
}

function passFormat() {
  password_error.innerHTML = "";
  if (password.value === "" || password.value == null) {
    password_error.innerHTML = "Please enter the password";
  } else if (password.value.length < 8) {
    password_error.innerHTML = "Password must be at least 8 characters long.";
  }
}

function isValidEmail(email) {
  // Simple email validation, you can modify it based on your requirements
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function checkLogin(email, password) {
  return email === user.email && password === user.password;
}

document.getElementById('submit').addEventListener('click', () => {
  emailFormat();
  passFormat();
  if (email_error.innerHTML === "" && password_error.innerHTML === "") {
    alert('Login success');
    // if (checkLogin(email.value, password.value)) {
    //   alert('Login success');
    // } else {
    //   alert('Error');
    // }
  }
  else{
    alert('Error');
  }
});
