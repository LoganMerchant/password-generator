// On button click, user is asked for password criteria.
// When asked for criteria, user selects which to include.
  // Lenth of a password between 8 and 128 characters.
  // Ask which character types to include {
    // (e.g lowercase, uppercase, numeric, and/or special characters? }
  // After each promt, inputs should be validated and at least one charcter type must be selected.
// Generate the password to match criteria.
// Show password on the page. 

// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
