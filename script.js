// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword(Length, Lowercase, Uppercase, numeric, specialCharacters){
  // var numberLength = Length *

}

function textCheck(text){
  if (!isNaN(text)) {
    alert("You entered digits. please enter Y or N");
  } else if (text.toLowerCase() === "y" || text.toLowerCase() === "n") {    
    return true;
  } else {    
    alert ("You entered characters that was not Y or N. please enter Y or N");
  }
}

function textEnterTrue(text){
  if(text == true){
    return false;
  } else {
    return true
  }
}

function enteredtype(type){
  var notEntered = true;
  var returnval

  while(notEntered){
    returnval = prompt(type + "?");
    notEntered = textEnterTrue(textCheck(returnval));
    if(!notEntered){
      return returnval
    }
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
    lengthOfPassword = Number(window.prompt("Choose what length you wish your password to be, at least 8 characters and no more than 128 characters"));
    if (isNaN(lengthOfPassword)) {
      alert("You did not enter a number");
    } else if (lengthOfPassword > 128 || lengthOfPassword < 8) {    
        alert ("The length has to be at least 8 characters and no more than 128 characters.");
    } else {
      numberNotEntered = false;
    }
  }

  var characterTypeNotEntered = true;
  while(characterTypeNotEntered){
    alert("Confirm whether or not to include lowercase, uppercase, numeric, and/or special characters. Respond with Y for yes or N for no");
    
    lowercase = enteredtype('Lowercase');

    uppercase = enteredtype('Uppercase');

    numeric = enteredtype('Numeric');

    specialCharacters = enteredtype('Special Characters');

    if (lowercase == 'n' && uppercase == 'n' && numeric == 'n' && specialCharacters == 'n'){
      alert("You did not select a character type, at least one character type should be selected");
      continue;
    } else{
      var CorrectCharTypesNotEntered = true;
      while(CorrectCharTypesNotEntered){
        let CorrectCharTypes = prompt(
        "Are these the correct parameters: " + 
        "Lowercase: " + lowercase + ', ' + 
        "Uppercase: " + uppercase + ', ' + 
        "Numeric: " + numeric + ', ' + 
        "SpecialCharacters: " + specialCharacters + "? (please respond with Y or N)"
        );

        var textEntered = textCheck(CorrectCharTypes);
        if(textEntered == true && CorrectCharTypes === "y"){
          characterTypeNotEntered = false;
          CorrectCharTypesNotEntered = false;
        } else {
        CorrectCharTypesNotEntered = false;
        }
      }
    }
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", prompts);
