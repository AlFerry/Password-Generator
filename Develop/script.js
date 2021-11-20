// Assignment Code
var generateBtn = document.querySelector("#generate");

//var dclaration, create arrays of characters

var special=["!", "@", "#", "$", "%", "^", "&", "*", "~", "?", "-", "_"];
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
  function populatePassword(hasUpper, hasLower, hasSpecial, hasNum){
    //populate array; return big array

    var emptyChar = [];
    var possible1 = [];
    var possible2 = [];
    var possible3 = [];
    var possible4 = [];


    if(hasUpper){
      possible1 = emptyChar.concat(upper);
    }
    if(hasLower){
      possible2 = possible1.concat(lower);
    }
    else{
      possible2 = possible1;
    }
    if(hasSpecial){
      possible3 = possible2.concat(special);
    }
    else{
      possible3 = possible2;
    }
    if(hasNum){
      possible4 = possible3.concat(num);
    }
    else{
      possible4 = possible3;
    }

    return possible4;
  }

  //function to loop char count, pass in charCount and big array
  function passcode(charCount){    
    var password = "";
      
      for(var i = 0; i < charCount; i++){
        var index = Math.random()*(availableChar.length);
          var charIndex = Math.floor(index);
          password += availableChar[charIndex];
      }  
      return password;
    }
  
  
  var hasUpper = confirm("Should the password contain upper-case letters?");
  var hasLower = confirm("Should the password contain lower-case letters?");
  var hasSpecial = confirm("Should the password contain special characters?");
  var hasNum = confirm("Should the password contain numbers?");
  var charCount = prompt("How long should your password be?");

  var availableChar = populatePassword(hasUpper, hasLower, hasSpecial, hasNum);
  var passwordText = passcode(charCount);

  return passwordText;

}

// Add event listener to generate button, Nothing after this
generateBtn.addEventListener("click", writePassword);
