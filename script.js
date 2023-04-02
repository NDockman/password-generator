// Assignment Code
var generateBtn = document.querySelector("#generate");



var lowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//are the " and \ characters correct?
var specialCharArr = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
console.log(specialCharArr);


function generatePassword() {
  var tempPassword = [1, 2, 3];
  var passwordLength = chooseLength();
  console.log(passwordLength);

  var finalPassword = [];
  var passwordCollection = [];
  

  if (includeLowercase()) {
    passwordCollection = passwordCollection.concat(lowerCaseArr);
    console.log(passwordCollection);
    // for (x = 0; x < tempPassword.length; x++) {
    //    var randomLowerCaseLetter = Math.floor(Math.random() * lowerCaseArr.length);
    //    tempPassword[x] = lowerCaseArr[randomLowerCaseLetter];
    // }
  }

  if (includeUppercase()) {
    passwordCollection = passwordCollection.concat(upperCaseArr);
    console.log(passwordCollection);
  }

  if (includeNum()) {
    passwordCollection = passwordCollection.concat(numberArr);
    console.log(passwordCollection);
  }

  if (includeSpecialChar()) {
    passwordCollection = passwordCollection.concat(specialCharArr);
    console.log(passwordCollection);
  }
  
  console.log(passwordCollection);



  for (x = 0; x < passwordLength; x++) {
    var randomCharIndex = Math.floor(Math.random() * passwordCollection.length);
    finalPassword.push(passwordCollection[randomCharIndex]);
  }


  console.log(finalPassword);
  
  return tempPassword;
}

function chooseLength() {
  var passwordLength = prompt("How many characters should the password be?", "Enter a number from 8 to 128");
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("How many characters should the password be?", "Enter a number from 8 to 128");
  }
  return passwordLength;
}


/* The following 4 functions will use a confirm statement to check whether or not
    a certain character type should be applied */

function includeLowercase() {
  var lowerCaseBoolean = confirm("Should the password contain a lowercase letter?");
  return lowerCaseBoolean;
}

function includeUppercase() {
  var upperCaseBoolean = confirm("Should the password contain an uppercase letter?");
  return upperCaseBoolean;
}

function includeNum() {
  var numBoolean = confirm("Should the password contain a number?");
  return numBoolean;
}

function includeSpecialChar() {
  var specialCharBoolean = confirm("Should the password contain a special character?");
  return specialCharBoolean;
}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}





 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
