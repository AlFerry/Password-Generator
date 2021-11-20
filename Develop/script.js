// Assignment Code
var generateBtn = document.querySelector("#generate");

//var dclaration, create arrays of characters

var special=["!", "@", "#", "$", "%", "^", "&", "*", "~", "?", "-", "_", "+", "=", "<", ">", "/", ",", "."];
var lower=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var num=["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){

  var charCount = prompt("How long should your password be?");
  alert(charCount);
  var hasUpper = confirm("Should the password contain upper-case letters?");
  alert(hasUpper);
  var hasLower = confirm("Should the password contain lower-case letters?");
  alert(hasLower);
  var hasSpecial = confirm("Should the password contain special characters?");
  alert(hasSpecial);
  var hasNum = confirm("Should the password contain numbers?");
  alert(hasNum);
  var availableChar = [];


}

// Add event listener to generate button, Nothing after this
generateBtn.addEventListener("click", writePassword);
