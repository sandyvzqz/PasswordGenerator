//declare variables for password generation
var passLength=8;
var userChoiceArray = [];
var specialCharsArray= ['!', '@', '#', '$', '%', '^', '&', '*', '(',')','?'];
var lowerCaseArray=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseArray=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberArray=['0','1','2','3','4','5','6','7','8','9','0'];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//create a generatePassword function
function generatePassword(){
  var password= "";
  for (var i = 0; i < passLength; i++){
    var randomIndex = Math.floor(Math.random()*userChoiceArray.length)
    password = password + userChoiceArray[randomIndex];
  } 
  return "generated password";
}

//create function that prompts user for password criteria
function userPrompt(){
  userChoiceArray=[];
  passLength= parseInt(prompt("Choose password length between 8-128 characters."));
  //makes sure user input satisfies password length criteria
  if(passLength<8 || passLength>128 || passLength==NaN){
    alert("Password length must be between 8-128 characters. Try again.");
    return false;
  }
  //asks user if they want to include lowercase letters in password
  if (confirm("Do you want your password to contain lower case letters?")){
    userChoiceArray= userChoiceArray.concat(lowerCaseArray);
  }
  if (confirm("Do you want your password to contain upper case letters?")){
    userChoiceArray= userChoiceArray.concat(upperCaseArray);
  }
  if (confirm("Do you want your password to contain special characters?")){
    userChoiceArray= userChoiceArray.concat(specialCharsArray);
  }
  if (confirm("Do you want your password to contain numbers?")){
    userChoiceArray= userChoiceArray.concat(numberArray);
  }
  return true;
}

// Write password to the #password input
function writePassword() {  
  var correctPrompts = userPrompt();
  if(correctPrompts){
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    // displays password on screen
    passwordText.value = password;
  }  
}

