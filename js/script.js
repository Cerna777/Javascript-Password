// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Generate random password
function generatePassword() {
  var length = prompt("Enter the length of the password (between 8 and 128 characters):");

  // Validate the length input
  while (isNaN(length) || length < 8 || length > 128) {
    length = prompt("Invalid length! Please enter a number between 8 and 128:");
  }

  var lowercase = confirm("Do you want to include lowercase characters?");
  var uppercase = confirm("Do you want to include uppercase characters?");
  var numeric = confirm("Do you want to include numeric characters?");
  var special = confirm("Do you want to include special characters?");

  // Validate that at least one character type is selected
  while (!lowercase && !uppercase && !numeric && !special) {
    alert("You must select at least one character type!");
    lowercase = confirm("Do you want to include lowercase characters?");
    uppercase = confirm("Do you want to include uppercase characters?");
    numeric = confirm("Do you want to include numeric characters?");
    special = confirm("Do you want to include special characters?");
  }

  var charset = "";
  var password = "";

  if (lowercase) {
    charset += "abcdefghijklmnopqrstuvwxyz";
  }

  if (uppercase) {
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (numeric) {
    charset += "0123456789";
  }

  if (special) {
    charset += "!@#$%^&*()_+{}|:<>?";
  }

  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);