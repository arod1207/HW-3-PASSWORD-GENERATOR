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



function generatePassword() {

  
  var selectedLength = parseInt(prompt("Enter length of password to generate!"));

  if (selectedLength === null || isNaN(selectedLength)) {
    alert("This isn't a number, please enter a number");
    return false;
  }

  
  if (selectedLength < minCharLength || selectedLength > maxCharLength){
    alert("Need's to be at least 8 Characters or less than or equal to 128 Characters");
    return false;
    
  }


  var selectedUpperCase = confirm("Do you want it to containt UPPERCASE letters?");
  var selectedLowerCase = confirm("Do you want it to contain lowercase letters?");
  var selectedNumbers = confirm("Do you want it to contain Numbers?");
  var selectedSpecialChar = confirm("Do you want it to contain special characters?");
      
 
    

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



  for (var i = 0; i < selectedLength; i ++) {

    var arrayToUse = myArray[Math.floor(Math.random()*myArray.length)];
    var randomCharIndex = Math.floor(Math.random()*arrayToUse.length);
    
    randPassword += arrayToUse[randomCharIndex];

  }

  return randPassword;    
 }
    
   
   

      




















