// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var specialChar = ["!","@","#","$","%","^","&","*","(",")","-","+","_","="];


var userLength = prompt("Enter length of password to generate!");
var userLength = parseInt(userLength);
var userUpperCase = confirm("Do you want it to containt UPPERCASE letters?");
var userLowerCase = confirm("Do you want it to contain lowercase letters?");
var userNumbers = confirm("Do you want it to contain Numbers?");
var userSpecialChar = confirm("Do you want it to contain special characters?");
var generatedPassword = " ";


console.log(typeof userLength, userLowerCase, userNumbers, userSpecialChar, userUpperCase);

 function passwordTest() {
   for (var i = 0; i < userLength; i++) {
     if (userUpperCase === true) {
       return generatedPassword += upperCase[Math.floor(Math.random() * upperCase.length)];
     }
   }
 }


passwordTest();



var randomUpperCase = upperCase[Math.floor(Math.random() * upperCase.length)];

var randomLoserCase = lowerCase[Math.floor(Math.random() * lowerCase.length)];
var randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
var randomCharacteres = specialChar[Math.floor(Math.random() * specialChar.length)];


