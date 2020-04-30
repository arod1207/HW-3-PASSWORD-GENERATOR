// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if (password !== false){
    var passwordText = document.querySelector("#password");

  passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// possible characters
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var specialChar = ["!","@","#","$","%","^","&","*","(",")","-","+","_","="];
var maxCharLength = 128;
var minCharLength = 8;
var myArray = [];
var randPassword = '';


//Running this function on button click
function generatePassword() {

  
  var selectedLength = parseInt(prompt("Enter length of password to generate!"));
// checking if an acutal number is inputed into the prompt box
  if (selectedLength === null || isNaN(selectedLength)) {
    alert("This isn't a number, please enter a number");
    return false;
  }

// checking to see length validation 
  if (selectedLength < minCharLength || selectedLength > maxCharLength){
    alert("Password needs to be at least 8 Characters or less than or equal to 128 Characters");
    return false;
    
  }
// asking user to select password type
  var selectedUpperCase = confirm("Do you want it to containt UPPERCASE letters?");
  var selectedLowerCase = confirm("Do you want it to contain lowercase letters?");
  var selectedNumbers = confirm("Do you want it to contain Numbers?");
  var selectedSpecialChar = confirm("Do you want it to contain special characters?");
// Pushing user selected options to an array if true    
  if (selectedUpperCase === true) {
    myArray.push(upperCase);
  }
  if (selectedLowerCase === true) {
    myArray.push(lowerCase);
  }
  if (selectedNumbers === true) {
    myArray.push(numbers);
  }
  if (selectedSpecialChar === true) {
    myArray.push(specialChar);
  }
// running a loop up to the selected password length
  for (var i = 0; i < selectedLength; i ++) {
// randomizing the selected arrays
    var arrayToUse = myArray[Math.floor(Math.random()*myArray.length)];
// turning the randomized array into a string
    var randomCharIndex = Math.floor(Math.random()*arrayToUse.length);
// selecting a random character and concatenating them into variable randPassword   
    randPassword += arrayToUse[randomCharIndex];

  }
// adding characters into variable
  return randPassword;    
 }
    
   
   

      




















