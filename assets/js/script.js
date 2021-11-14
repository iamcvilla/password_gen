// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Assignment code here
function generatePassword() {

// Prompts asking user to choose password length
  var passLength = prompt("Please choose the length of your password? 8 to 128 characters.");
  if (passLength < 8 || passLength > 128) {
    alert("Please select a number between 8 and 128");
    return generatePassword();
  }
// Prompts asking user password critera
  if (passLength >= 8 && passLength <= 128) {
    var passUpperCase = confirm("Would you like to include Upper Case Letters?");
    var passLowerCase = confirm("Would you like to include Lower Case Letters?");
    var passNum = confirm("Would you like to include Numbers?");
    var passSpecChar = confirm("Would you like to include Special Characters?");
  }
// if user selects cancel on all window prompts, they will be asked to reselect password criteria
  if (passUpperCase == false && passLowerCase == false && passNum == false && passSpecChar == false) {
    alert("Please reselect your password criteria.");
    return generatePassword();
  }

  if (passUpperCase) {
    var passUpperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
  }
  if (passUpperCase === false) {
    var passUpperCase = [""];
  }
  if (passLowerCase) {
    var passLowerCase = ["abcdefghijklmnopqrstuvwxyz"]
  }
  if (passLowerCase === false) {
    var passLowerCase = [""];
  }
  if (passNum) {
    var passNum = ["0123456789"]
  }
  if (passNum === false) {
    var passNum = [""]
  }
  if (passSpecChar) {
    var passSpecChar = ["!@#$%^&*()"]
  }
  if (passSpecChar === false) {
    var passSpecChar = [""]
  }

  var randomCharacters = passUpperCase + passLowerCase + passNum + passSpecChar

  var password = "";
  for (var i = 0; i < passLength; i++) {
    var trueRandom = randomCharacters[Math.floor(Math.random() * randomCharacters.length)];
    password += trueRandom
  }

//returns the generated password
  return password
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
