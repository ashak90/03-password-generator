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




  // if (confirm("Do you want a upper case letter?")) {
  //   allowedCharac = allowedCharac + upperCase;
  // } 

  // if (confirm("Do you want a lower case letter?")) {
  //   allowedCharac = allowedCharac + lowerCase;
  // } 

  // if (confirm("Do you want a special character?")) {
  //   allowedCharac = allowedCharac + specialCharacters;
  // }

  // if (confirm("Do you want a numbers?")) {
  //   allowedCharac = allowedCharac + numbers;
  // }

  for (var i=0; i<passwordLength; i++){
    var randomNumber = Math.floor(Math.random() * allowedCharac.length);
    finalPass += allowedCharac[randomNumber];
  }

  return finalPass;
  
   //loop the number of times the want howManyCharacters
  //each time use math.random to target a random index in that string


  // finalPass = finalPass + randomNumber
  // console.log(allowedCharac.length)

 

//   var upperCase = confirm ('Do you want any upper case letters?');
//   alllowedCharac = alllowedCharac + upperCase;
//   // if (upperCase == true) {
//   //   finalPass = finalPass + upperCase;
//   //   // return finalPass 
//   // } 
//  console.log (alllowedCharac)

  

  // var lowerCase = confirm ('Do you want any lower case letters?');
  // var number = confirm ('Do you want any numbers?')
  // var specialCharacters = confirm ('Do you want any special characters?')





  // if (upperCase === true)

  // alllowedCharac = alllowedCharac + upperCase




  // return finalPass 

   //logic
  // ask user if they want upper case 
  // ask user if they want lower case 
  // ask user if they want a number 

  //modify finalPass
  // allowedCharacters = allowedCharacters+lowerCase
  // allowedCharacters= allowedCharacters +upperCase

  // console.log(allowedCharacters)
}


// function getPasswordOptions() {
//   // Variable to store length of password from user input
//   var length = parseInt(
//     prompt('How many characters would you like your password to contain?')
//   );
//   }
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
