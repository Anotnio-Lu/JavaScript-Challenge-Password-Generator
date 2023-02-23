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
  let lengthOfPassword
  let lowercase
  let uppercase
  let numeric
  let specialCharacters

  var numberNotEntered = true;
  while(numberNotEntered){
    lengthOfPassword = Number(window.prompt("Choose what length you wish your password to be, at least 8 characters and no more than 128 characters", ));
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
      lowercase = prompt("Lowercase?");
      var textEntered = textCheck(lowercase);
      if(textEntered == true){
        lowercaseNotEntered = false;
      }
    }

    var uppercaseNotEntered = true;
    while(uppercaseNotEntered){
      uppercase = prompt("Uppercase?");
      var textEntered = textCheck(uppercase);
      if(textEntered == true){
        uppercaseNotEntered = false;
      }
    }

    var numericNotEntered = true;
    while(numericNotEntered){
      numeric = prompt("Numeric?");
      var textEntered = textCheck(numeric);
      if(textEntered == true){
        numericNotEntered = false;
      }
    }

    var specialCharactersNotEntered = true;
    while(specialCharactersNotEntered){
      specialCharacters = prompt("Special characters?");
      var textEntered = textCheck(specialCharacters);
      if(textEntered == true){
        specialCharactersNotEntered = false;
      }
    }
      
  }
}



// Add event listener to generate button
generateBtn.addEventListener("click", prompts);

