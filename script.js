var specialCharacters = "!@#$%^&*()+~?></;[]{}:;=-_";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";

// Creat function called genrate password

function generatePassword () {
  var finalPass="";
  var allowedCharac = "";
  


  var passwordLength = prompt('How many characters would you like your password to contain?');
  if (isNaN(passwordLength)) {
    alert ("Password must be a number")
    return " ";
  }
  if (passwordLength < 8) {
    alert ("Password length must be at least 8 characters")
    return " ";
  }

  if (passwordLength > 128) {
    alert ("Password length must be less than 128 characters")
    return " ";
  }

  var upper = confirm("Do you want a upper case letter?")

  if (upper=== true) {
    allowedCharac += upperCase; 
  }
  
  var lower = confirm("Do you want a lower case letter?")

  if (lower=== true) {
    allowedCharac += lowerCase; 
  }
  
  var special = confirm("Do you want any special characters?")

  if (special=== true) {
    allowedCharac += specialCharacters; 
  } 

  var num = confirm("Do you want any numbers?")

  if (num=== true) {
    allowedCharac += numbers; 
  } 

  if (upper===false, lower===false, special===false, num===false) {
    return " ";
  }

  for (var i=0; i<passwordLength; i++){
    var randomNumber = Math.floor(Math.random() * allowedCharac.length);
    finalPass += allowedCharac[randomNumber];
  }

  return finalPass;
  
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
