const passwordBox = document.getElementById("password");
const lenght = 20;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numberCase = "0123456789";
const symbolCase = "!@#$%^&*()_+-=[{]}";

const allChars = upperCase + lowerCase + numberCase + symbolCase;

function createPassword(){
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numberCase[Math.floor(Math.random() * numberCase.length)];
  password += symbolCase[Math.floor(Math.random() * symbolCase.length)];

  while(lenght > password.length){
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}

function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
    alert("password sudah di copy")
}

