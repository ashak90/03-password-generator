var specialCharacters = [
  "!",
  "(",
  "&",
  "%",
  "#",
  "'",
  "(",
  ")",
  "*",
  "^",
  ":",
  "+",
  "=",
  ".",
  ";",
  "<",
  ">",
  "[",
  "]",
  "?",
  "@",
  "{",
  "}",
  "~",
];

var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "z",
  "Y",
  "Z",
];

var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var numbers = ["0", "1", "2", "3", "4", "5","6","7","8","9"]

// Creat function called genrate password

function generatePassword () {
  var length = parseInt(
        prompt('How many characters would you like your password to contain?')
      );
    
  //logic
  // ask user if they want upper case 
  // ask user if they want lower case 
  // ask user if they want a number 

  //modify finalPass
  allowedCharacters = allowedCharacters+lowerCase
  allowedCharacters= allowedCharacters +upperCase

  console.log(allowedCharacters)
  return length
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
