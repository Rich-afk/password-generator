// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var typeCount = 0;
  var num = "0123456789";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var special = "~!@#$%^&*()_=+[]{}\\|;:',<>.\"";
  var genPassword = "";
  var used = ""

  var count = Number(prompt("Please enter the amount of characters you would like in your password."));
  console.log('count!!!',count);

  //check for valid case number
  if (count < 8 || count > 128) {
    alert('Please choose a number between 8 and 128');
    return;
  }

  //ask for uppercase
  if (confirm("Include uppercase?")) {
    used += upper;
    genPassword += upper[Math.floor(Math.random() * upper.length)];
    typeCount++;
  }

  //ask for lowercase
  if (confirm("Include lowercase?")) {
    used += lower;
    genPassword += lower[Math.floor(Math.random() * lower.length)];
    typeCount++;
  }

  //ask for numbers
  if (confirm("Include numbers?")) {
    used += num;
    genPassword += num[Math.floor(Math.random() * num.length)];
    typeCount++;
  }

  //ask for special characters
  if (confirm("Include special characters?")) {
    used += special;
    genPassword += special[Math.floor(Math.random() * special.length)];
    typeCount++;
  }

  //check for no cases being selected
  if (used == 0) {
    alert('Please select at least one character group');
    return;
  }

  for (var i = 0; i < count - typeCount; i++) {
    genPassword += used[Math.floor(Math.random() * used.length)];
  }

  return genPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
