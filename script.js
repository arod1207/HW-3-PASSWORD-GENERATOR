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


userLength = prompt("Enter length of password to generate!");
userLength = parseInt(userLength);
userUpperCase = confirm("Do you want it to containt UPPERCASE letters?");
userLowerCase = confirm("Do you want it to contain lowercase letters?");
userNumbers = confirm("Do you want it to contain Numbers?");
userSpecialChar = confirm("Do you want it to contain special characters?");
generatedPassword = " ";


console.log(typeof userLength, userLowerCase, userNumbers, userSpecialChar, userUpperCase);

if (userLength < 8 && userLength > 128){
  alert("Must be between 8 and 128 characters!");
}
else {
  alert("Must be between 8")
}



function pass(){

  generatedPassword = " ";

    for (var i = 0; i < userLength; i++)

   if (userUpperCase === true){
      for (var i = randomUpperCase[0]; i <= randomUpperCase[1]; i++)
      generatedPassword += upperCase[Math.floor(Math.random() * upperCase.length)];
   }
   if (userLowerCase === true){
      for (var i = randomLowerCase[0]; i <= randomLowerCase[1]; i++)
      generatedPassword += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    }
    if (userNumbers === true){
      generatedPassword += numbers[Math.floor(Math.random() * numbers.length)];
    }
    if (userSpecialChar === true){
      generatedPassword += specialChar[Math.floor(Math.random() * specialChar.length)];
    } 
alert(generatedPassword);
}


pass();

var randomUpperCase = upperCase[Math.floor(Math.random() * upperCase.length)];
var randomLoserCase = lowerCase[Math.floor(Math.random() * lowerCase.length)];
var randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
var randomCharacteres = specialChar[Math.floor(Math.random() * specialChar.length)];