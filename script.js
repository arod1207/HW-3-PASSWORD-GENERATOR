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


// possible characters
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var specialChar = ["!","@","#","$","%","^","&","*","(",")","-","+","_","="];
var myArray = [];


// gathering information from user
var selectedLength = Number(prompt("Enter length of password to generate!"));
var selectedUpperCase = confirm("Do you want it to containt UPPERCASE letters?");
var selectedLowerCase = confirm("Do you want it to contain lowercase letters?");
var selectedNumbers = confirm("Do you want it to contain Numbers?");
var selectedSpecialChar = confirm("Do you want it to contain special characters?");


//checking what the typeof object
console.log(typeof selectedLength, selectedLowerCase, selectedNumbers, selectedSpecialChar, selectedUpperCase);





      if (selectedUpperCase === true) {
        myArray.push(upperCase)
      }
      if (selectedLowerCase === true) {
        myArray.push(lowerCase)
      }
      if (selectedNumbers === true) {
        myArray.push(numbers)
      }
      if (selectedSpecialChar === true) {
        myArray.push(specialChar)
      }



   

    
console.log(passwordTest);
















// function writePassword(){
//     var password = " ";

//       for (i = 0; i < selectedLength; i++){
//         if (selectedUpperCase === true){
//           password += upperCase[Math.floor(Math.random() * upperCase.length)];
//         }
// //         if (selectedLowerCase === true){
//           password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
//         }
//         if (selectedNumbers === true){
//           password += numbers[Math.floor(Math.random() * numbers.length)];
//         }
//         if (selectedSpecialChar === true){
//           password += specialChar[Math.floor(Math.random() * specialChar.length)];
//         }
//     }
//   alert(password);
// }

// random code generated


// writePassword();

// random generator
// var randomUpperCase = upperCase[Math.floor(Math.random() * upperCase.length)];
// var randomLoserCase = lowerCase[Math.floor(Math.random() * lowerCase.length)];
// var randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
// var randomCharacteres = specialChar[Math.floor(Math.random() * specialChar.length)];


