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
  let specialCharacters = confirm("Would you like special characters?");

  let uppercaseChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  let lowercaseChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let numberChars = ["0","1","2","3","4","5","6","7","8","9"];
  let specialChars = ["!","@","#","$","%","^","&","*","(",")","+","=","-","<",">","?","/",";",":","[","]","{","}","~","`","|",",","."];

  let passwordChars = [];

  if (uppercase){
    passwordChars = uppercaseChars;
  }

  if (lowercase){
    passwordChars = passwordChars.concat(lowercaseChars);
  }

  if (numbers){
    passwordChars = passwordChars.concat(numberChars);
  }

  if (specialCharacters){
    passwordChars = passwordChars.concat(specialChars);
  } 

  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
