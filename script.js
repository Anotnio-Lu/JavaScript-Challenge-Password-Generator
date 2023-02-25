// Assignment Code
var generateBtn = document.querySelector("#generate");
var arrayToConcat = [];

// Write password to the #password input
function writePassword(Length, array) {
  var password = generatePassword(Length, array);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword(length, array){
  let selectedChar = '';

  if(!array.includes('N')){
    arrayToConcat = [0, 1, 2, 3];
  } else{
    for(var i = 0; i < array.length; i++){
      let index = array.indexOf("Y");
      arrayToConcat.push(index);
      array.splice(index, 1, "N")
      if(array.includes('Y')){
        continue
      } else{
        break
      }
    }
  }

  let obj = {  
    L: 'abcdefghijklmnopqrstuvwxyz',
    U: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    N: '0123456789',
    SC:'!#"$%&]()*+,-./:;<=>?@[^_`{|}~\\'
  };

  for(var i = 0; i < arrayToConcat.length; i++){
    selectedChar = selectedChar.concat(Object.values(obj)[arrayToConcat[i]]);
  }
  // The below is code that i have used from a source, please see README for source link
  let Password = '';
  for (let i = 0; i < length; i++) {
      Password += selectedChar.charAt(Math.floor(Math.random() * selectedChar.length));
  }
  arrayToConcat = [];
  return Password;
  
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
  let notEntered = true;
  let returnval

  while(notEntered){
    returnval = prompt(type + "?");
    if (!returnval) {
      break
    }
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

  let charTypeArray = []


  let numberNotEntered = true;
  while(numberNotEntered){
    lengthOfPassword = Number(window.prompt("Choose what length you wish your password to be, at least 8 characters and no more than 128 characters"));
    if(lengthOfPassword == 0){
      return
    } else if (isNaN(lengthOfPassword)) {
      alert("You did not enter a number");
    } else if (lengthOfPassword > 128 || lengthOfPassword < 8) {    
        alert ("The length has to be at least 8 characters and no more than 128 characters.");
    } else {
      numberNotEntered = false;
    }
  }

  let characterTypeNotEntered = true;
  while(characterTypeNotEntered){
    alert("Confirm whether or not to include Lowercase letters, Uppercase letters, Numbers, and/or Special Characters. Respond with Y for yes or N for no");
    
    lowercase = enteredtype('Lowercase letters');
    if(lowercase == undefined){
      return
    }
    lowercase = lowercase.toUpperCase();

    uppercase = enteredtype('Uppercase Letters');
    if(uppercase == undefined){
      return
    }
    uppercase = uppercase.toUpperCase();

    numeric = enteredtype('Numeric');
    if(numeric == undefined){
      return
    }
    numeric = numeric.toUpperCase();

    specialCharacters = enteredtype('Special Characters');
    if(specialCharacters == undefined){
      return
    }
    specialCharacters = specialCharacters.toUpperCase();

    if (lowercase == 'N' && uppercase == 'N' && numeric == 'N' && specialCharacters == 'N'){
      alert("You did not select a character type, at least one character type should be selected");
      continue;
    } else{
      let CorrectCharTypesNotEntered = true;
      while(CorrectCharTypesNotEntered){
        let CorrectCharTypes = prompt(
        "Are these the correct parameters: " + 
        "Lowercase Letters: " + lowercase + ', ' + 
        "Uppercase Letters: " + uppercase + ', ' + 
        "Numbers: " + numeric + ', ' + 
        "SpecialCharacters: " + specialCharacters + "? (Please respond with Y or N)"
        );

        let textEntered = textCheck(CorrectCharTypes);
        if(textEntered == true && CorrectCharTypes.toUpperCase() === "Y"){
          characterTypeNotEntered = false;
          CorrectCharTypesNotEntered = false;
        } else {
        CorrectCharTypesNotEntered = false;
        }
      }
    }
  }

  charTypeArray = [lowercase, uppercase, numeric, specialCharacters];
  writePassword(lengthOfPassword, charTypeArray)
}

// Add event listener to generate button
generateBtn.addEventListener("click", prompts);
