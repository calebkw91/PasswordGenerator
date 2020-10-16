// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() 
{
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword()
{

  let passwordLengthSelected = true;
  let passwordParameterSelected = true;
  let finalPassword = "";
  let uppercase = false;
  let lowercase = false;
  let numbers = false;
  let specialCharacters = false;

  while(passwordLengthSelected)
  {
    var length = prompt("Choose a password length between 8-128");

    if (length > 7 && length < 129)
    {
      passwordLengthSelected = false;
    }
  }

  while(passwordParameterSelected)
  {
    uppercase = confirm("Would you like uppercase letters?");
    lowercase = confirm("Would you like lowercase letters?");
    numbers = confirm("Would you like numbers?");
    specialCharacters = confirm("Would you like special characters?");

    if (uppercase || lowercase || numbers || specialCharacters)
    {
      passwordParameterSelected = false;
    } else 
    {
      let retry = confirm("Please select at least 1 parameter.")
    }
  }

  let uppercaseChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  let lowercaseChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let numberChars = ["0","1","2","3","4","5","6","7","8","9"];
  let specialChars = [" ","\"","\\","\'","!","@","#","$","%","^","&","*","(",")","+","=","_","-","<",">","?","/",";",":","[","]","{","}","~","`","|",",","."];

  let passwordChars = [];

  if (uppercase)
  {
    passwordChars = uppercaseChars;
  }

  if (lowercase)
  {
    passwordChars = passwordChars.concat(lowercaseChars);
  }

  if (numbers)
  {
    passwordChars = passwordChars.concat(numberChars);
  }

  if (specialCharacters)
  {
    passwordChars = passwordChars.concat(specialChars);
  } 

  for (i = 0; i < length; i++)
  {
    let passwordCharIndex = Math.floor(Math.random(i) * passwordChars.length)

    finalPassword = finalPassword.concat(passwordChars[passwordCharIndex]);
  }

  return finalPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
