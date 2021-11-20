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
//Function to populate password given user input.
function generatePassword(){
  //Populates an array with every possible character given user specifications
  function populatePassword(hasUpper, hasLower, hasSpecial, hasNum){
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
  
  //Function evaluates if user's input meets password requirements,
  //Returns error if no, calls function to create password if yes.
  function validPassword(charCount, hasUpper, hasLower, hasSpecial, hasNum){
    var password = "";
    if(charCount>128 || charCount<8){
      alert("Your password must be between 8 and 128 characters.");
      password="Try again!";
    }
    else if(charCount==null){
      alert("You must choose a password length.");
      password="Try again!";
    }
    else if(hasUpper==false && hasLower==false && hasSpecial==false && hasNum==false){
      alert("You must choose at least one variable type for your password to contain.");
      password="Try again!";
    }
    else{
      password=passcode(charCount);
    }
    return password;
  }
  
  
  
  //function to loop char count until password of specified length is achieved.
  function passcode(charCount){    
    var passcode = "";
      
      for(var i = 0; i < charCount; i++){
        var index = Math.random()*(availableChar.length);
          var charIndex = Math.floor(index);
          passcode += availableChar[charIndex];
      }  
      return passcode;
  }
  
  //Create boolean values for character types depending on if they should be used.
  var hasUpper = confirm("Should the password contain upper-case letters?");
  var hasLower = confirm("Should the password contain lower-case letters?");
  var hasSpecial = confirm("Should the password contain special characters?");
  var hasNum = confirm("Should the password contain numbers?");

  //Creates number for length of password.
  var charCount = prompt("How long should your password be?");

  var availableChar = populatePassword(hasUpper, hasLower, hasSpecial, hasNum);
  var passwordText = validPassword(charCount, hasUpper, hasLower, hasSpecial, hasNum);

  return passwordText;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
