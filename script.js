// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword(){
  var word = "k"
  return word;
}

function textCheck(text){
  if (!isNaN(text)) {
    alert("You entered digits. please enter Y or N");
  } else if (text.toLowerCase() === "y" || text.toLowerCase() === "n") {    
    return true;
  } else {    
    alert ("You entered letters or words but did not enter Y or N. please enter Y or N");
  }
}


function prompts(){
  var numberNotEntered = true;
  while(numberNotEntered){
    let lengthOfPassword = Number(window.prompt("Choose what length you wish your password to be, at least 8 characters and no more than 128 characters", ));
    console.log(lengthOfPassword);
    if (isNaN(lengthOfPassword)) {
      alert("You did not enter digits");
    } else if (lengthOfPassword > 128 || lengthOfPassword < 8) {    
        alert ("The length has to be at least 8 characters and no more than 128 characters.");
    } else {
      numberNotEntered = false;
    }
  }

  var characterTypeNotEntered = true;
  while(characterTypeNotEntered){
    alert("Confirm whether or not to include lowercase, uppercase, numeric, and/or special characters. Respond with Y for yes or N for no");
    
    var lowercaseNotEntered = true;
    while(lowercaseNotEntered){
      let lowercase = prompt("Lowercase?");
      var textEntered = textCheck(lowercase);
      console.log(textEntered);
      if(textEntered == true){
        lowercaseNotEntered = false;
      }
    }
    
    let uppercase = prompt("Uppercase?");
    let numeric = prompt("Numeric?");
    let specialCharacters = prompt("Special characters?");
  
  }
}



// Add event listener to generate button
generateBtn.addEventListener("click", prompts);

