// When asked for criteria, user selects which to include.
  // Lenth of a password between 8 and 128 characters.
  // Ask which character types to include {
    // (e.g lowercase, uppercase, numeric, and/or special characters? }
  // After each promt, inputs should be validated and at least one charcter type must be selected.
// Generate the password to match criteria.
// Show password on the page. 

// Assignment code here

// Arrays
var alphabetInfo = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

var numericInfo = [
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" 
];

var specialCharInfo = [
  " ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+","-",".","/",":",";","<","=",">","?","@","[", "]", "^", "_", '`', "{", "|", "}", "~"
];

// Functions
var generatePassword = function() {
  window.alert("Welcome to the password generator!");
  // return "Hello";

  var prompts = function() {
    window.prompt("How many total characters does the password need to be? It may be between 8 and 128 characters in length.");

    window.confirm("Does the password need to include uppercase letters?");

    window.confirm("Does the password need to include lowercase letters?");

    window.confirm("Does the password need to include numeric values?");

    window.confirm('Does the password need to include special characters, i.e. "!", "*", "&", etc.?');

  } 

  prompts();
  return "Success"
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);