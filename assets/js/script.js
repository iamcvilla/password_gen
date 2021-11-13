// Assignment code here
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialCharacters = ["@", "%", "+", "/", "'", "!", "#", "$", "^", "?", ":", ",", "(", ")", "{", "}", "[", "]", "~", "-", "_", "."]

function generatePassword() {

  var passLength = prompt("Please choose the length of your password? 8 to 128 characters.");
    if (passLength < 8 || passLength <=128){
      alert("Please select a number between 8 and 128")
      return generatePassword
    }

  var passUpperCase = confirm("Would you like to include Upper Case Letters?");
  console.log(passUpperCase)
 
  var passLowerCase = confirm("Would you like to include Lower Case Letters?");
  console.log(passLowerCase)

  var passNum = confirm("Would you like to include Numbers?");
  console.log(passNum)

  var passSpecChar = confirm("Would you like to include Special Characters?");
  console.log(passSpecChar)
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}