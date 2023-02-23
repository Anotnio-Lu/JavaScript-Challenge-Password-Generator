// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword(){
  var word = "WORD"
  return word;
}

function prompts(){
  let lengthOfPassword = prompt("Choose what length you wish your password to be, at least 8 characters and no more than 128 characters");
  console.log(lengthOfPassword);
  if (isNaN(lengthOfPassword)) {
    alert("You did not enter digits");
    } else if (lengthOfPassword > 128 || lengthOfPassword < 8) {    
      alert ("The length has to be at least 8 characters and no more than 128 characters.");
  }

  let characterTypes = prompt("confirm whether or not to include lowercase, uppercase, numeric, and/or special characters");
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", prompts);
