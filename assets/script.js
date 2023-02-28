// Assignment Code
var generateBtn = document.querySelector("#generate");
var arrayToConcat = [];


// Write password to the #password input it also sets the card-body to visible
function writePassword(Length, array) {
  var password = generatePassword(Length, array);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  var cardBody = document.getElementsByClassName("card-body");
  cardBody[0].setAttribute("style", "display: block;");

}

// function that generates the password
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

  // The below is code that i have used from a source(Reference 1.1), please see README for source link
  let Password = '';
  for (let i = 0; i < length; i++) {
      Password += selectedChar.charAt(Math.floor(Math.random() * selectedChar.length));
  }
  arrayToConcat = [];
  return Password;
}

//function that checks input to see if it is 'Y' or 'N'
function textCheck(text){
  if(text == ''){
    alert("You did not enter anything.\nPlease enter Y or N!")
  }else if (!isNaN(text)) {
    alert("You entered number.\nPlease enter Y or N");
  } else if (text.toLowerCase() === "y" || text.toLowerCase() === "n") {    
    return true;
  } else {    
    alert ("You entered characters that was not Y or N.\nPlease enter Y or N!");
  }
}

// function ti check if input is true, if it is true that it will return false else it returns true
function textEnterTrue(text){
  if(text == true){
    return false;
  } else {
    return true
  }
}

//function to deteremine what input to include in password
function enteredtype(type){
  let notEntered = true;
  let returnval

  while(notEntered){
    returnval = prompt("Would like to include " + type + " in your password?");
    if (returnval == null) {
      break
    }
    notEntered = textEnterTrue(textCheck(returnval));
    if(!notEntered){
      return returnval
    }
  }
}

// function to start the series of prompt s
function prompts(){
  let lengthOfPassword
  let lowercase
  let uppercase
  let numeric
  let specialCharacters

  let charTypeArray = []

  let numberNotEntered = true;
  while(numberNotEntered){
    lengthOfPassword = prompt("Choose what length you wish your password to be. \nAt least 8 characters and no more than 128 characters");
    if(lengthOfPassword == '' ){
       alert("You did not enter anything.\nPlease enter a number between 7 and 129")
    } else if(lengthOfPassword == undefined){
      return
    } else if (isNaN(lengthOfPassword)) {
      alert("You entered characters that was not a number between 7 and 129");
    } else if (lengthOfPassword > 128 || lengthOfPassword < 8) {    
        alert ("The length has to be at least 8 characters and no more than 128 characters.");
    } else {
      numberNotEntered = false;
    }
  }

  let characterTypeNotEntered = true;
  while(characterTypeNotEntered){
    alert("Confirm whether or not to include: \n- Lowercase letters \n- Uppercase letters \n- Numbers \n- Special Characters\nAt least one must be choosen to be included in the password.\nRespond with 'Y' for yes or 'N' for no.");
    
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

    numeric = enteredtype('Numbers');
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
      alert("You did not select a character type, at least one character type should be selected!");
      continue;
    } else{
      let CorrectCharTypesNotEntered = true;
      while(CorrectCharTypesNotEntered){
        let CorrectCharTypes = prompt(
        "Are these the correct parameters: " + 
        "\nLowercase Letters: " + lowercase + 
        "\nUppercase Letters: " + uppercase + 
        "\nNumbers: " + numeric + 
        "\nSpecialCharacters: " + specialCharacters + "\n(Please respond with Y or N)"
        );
        
        if(CorrectCharTypes == null){
          return
        } 

        let textEntered = textCheck(CorrectCharTypes);
        if(textEntered == true && CorrectCharTypes.toUpperCase() === "Y"){
          characterTypeNotEntered = false;
          CorrectCharTypesNotEntered = false;
        } else if(textEntered == undefined) {
          continue
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