// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create arrays of different character options
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase =  ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var specialChar = ['`','~','!','@','#','$','%','^','&','*','(',')','-','_','+','=','{','[',']','}','|',':',';','<',',','.','>','?','/'];

// Password generator function
function generatePassword() {
  // User chooses desired length of password to be generated, gets sent back if they choose number lower than 8 or higher than 128
  var userChoice = window.prompt("How long would you like your password to be?");
  if (userChoice <8 || userChoice > 128) {
    window.alert("Please choose a number between 8 and 128");
    return;
  };

  console.log(userChoice);

  // Create empty array to fill with characters based on user input
  var allCharacters = [];

  // Request user input to include upper/lower/numbers/special and store chosen characters in allCharacters array
  var useUpper = window.confirm("Would you like to include uppercase letters?");
  if (useUpper) {
    allCharacters = allCharacters.concat(upperCase);
  };

  var useLower = window.confirm("Would you like to include lowercase letters?");
  if (useLower) {
    allCharacters = allCharacters.concat(lowerCase);
  };

  var useNumbers = window.confirm("Would you like to include numbers?");
  if (useNumbers) {
    allCharacters = allCharacters.concat(numbers);
  };

  var useCharacters = window.confirm("Would you like to include special characters?");
  if (useCharacters) {
    allCharacters = allCharacters.concat(specialChar);
  };

  console.log(allCharacters);

  // Create password using all characters selected by user until desired length of password has been reached
  var password = [];
  for (let i = 0; i < userChoice; i++) {
    var index = Math.floor(Math.random() * allCharacters.length);
    var character = allCharacters[index];
    password.push(character);
  }

  // Create array of chosen characters in password without any spaces between characters and log to console
  finalPassword = password.join('');
  console.log(finalPassword);
  return finalPassword;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
