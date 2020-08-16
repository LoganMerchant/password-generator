// When asked for criteria, user selects which to include.
  // Lenth of a password between 8 and 128 characters.
  // Ask which character types to include {
    // (e.g lowercase, uppercase, numeric, and/or special characters? }
  // After each promt, inputs should be validated and at least one charcter type must be selected.
// Generate the password to match criteria.
// Show password on the page. 

// Assignment code here

// Arrays
var uppercaseAlphabetInfo = [ 
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
]

var lowercaseAlphabetInfo = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

var numericInfo = [
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" 
];

var specialCharInfo = [
  " ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+","-",".","/",":",";","<","=",">","?","@","[", "]", "^", "_", '`', "{", "|", "}", "~"
];

var passwordValue = [
]

// var charSets = [ 
//   {
//     type: "lowercase",
//     value: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//   },
//   {
//     uppercase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
//   },
//   {
//     numeric: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
//   },
//   {
//     special: [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+","-",".","/",":",";","<","=",">","?","@","[", "]", "^", "_", '`', "{", "|", "}", "~"]
//   }
// ]

// Functions
var random = function(x) {
  var value = x[Math.floor(Math.random() * x.length)];
  return value;
}

var generatePassword = function() {
  window.alert("Welcome to the password generator!");

  var prompts = function() {

    // Length Declaration
    var lengthPrompt = window.prompt("How many total characters does the password need to be? It may be between 8 and 128 characters in length.");
    if (lengthPrompt <= 128 && lengthPrompt >= 8) {
    }
    else {
      window.alert("Please select a length between 8 and 128 characters for your password.");
      return prompts();
    }

    // Window Prompts
    var uppercasePrompt = window.confirm("Does the password need to include uppercase letters?");
    var lowercasePrompt = window.confirm("Does the password need to include lowercase letters?");
    var numericPrompt = window.confirm("Does the password need to include numeric values?");
    var specialCharPrompt = window.confirm('Does the password need to include special characters, i.e. "!", "*", "&", etc.?');

    // Character Generators
      for (i =0; i < lengthPrompt; i++) {
        if (uppercasePrompt) {
          random(uppercaseAlphabetInfo);
          passwordValue = passwordValue.concat(uppercaseAlphabetInfo);
          console.log(passwordValue);
        }

        if (lowercasePrompt) {
          passwordValue = passwordValue.concat(lowercaseAlphabetInfo);
          console.log(passwordValue);
        }

        if (numericPrompt) {
          passwordValue = passwordValue.concat(numericInfo);
          console.log(passwordValue);
        }

        if (specialCharPrompt) {
          passwordValue = passwordValue.concat(specialCharInfo);
          console.log(passwordValue);
        }
      }
    
  }
  prompts();
  return "ugh";
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