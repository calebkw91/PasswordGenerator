// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  let length = prompt("Choose a password length between 8-128");
  let uppercase = confirm("Would you like uppercase letters?");
  let lowercase = confirm("Would you like lowercase letters?");
  let numbers = confirm("Would you like numbers?");
  let specialCharacters = ("Would you like special characters?");

  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
