// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//

// prompting from button
function generatePassword() {

  ////my code section
  // Ask user for length
  let length = prompt("Choose password length between 8-128 characters?")
  
  //if else confirm character length and options
  if (length >= 8 && length <= 128 ) {
  } else {
      return alert("Please enter a password length between 8 and 128 characters");
      
  } 
  
  
  let includeLower = confirm("Would you like lowercase letters?")
 
  let includeUpper = confirm("Would you like uppercase letters?")
  
  let includeNumber = confirm("Would you like to include numberical characters")
  
  let includeSymbol = confirm("Would you like to include symbols?")
  
  
  let passSelection = {
      length: length,
      includeLower: includeLower,
      includeUpper: includeUpper,
      includeNumber: includeNumber,
      includeSymbol: includeSymbol
  }
  

  // return for no selection of any type of characters
  if (passSelection.includeLower===false && passSelection.includeUpper===false && passSelection.includeNumber===false && passSelection.includeSymbol===false) {
      return alert("Choose at least one of the options after length")
  }
  
  //character types
  let selectedItems= [];
  
  let upperCase= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  let lowerCase= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let number= ["0","1","2","3","4","5","6","7","8","9"];
  let symbol= ["!","#","$","%","&","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];

  
//options to choose from character types
  if(includeLower===true){
    selectedItems=selectedItems.concat(lowerCase);
  } 

  if(includeUpper===true){
      selectedItems=selectedItems.concat(upperCase); 
  } 
  
  if(includeNumber===true){
      selectedItems=selectedItems.concat(number);
  } 
  if(includeSymbol===true){
      selectedItems=selectedItems.concat(symbol);
  }

   //final passcode   
  let finalPassword = [];
  
  for (let i=0; i < (length.valueOf()); i++){
      let character = selectedItems[Math.floor(Math.random() * selectedItems.length)];
      finalPassword=finalPassword.concat(character); 
      
  }
  
  if(includeUpper===true) {
  finalPassword[0] = "X";}
  if(includeLower===true){
  finalPassword[1] = "y";}
  if(includeNumber===true) {
  finalPassword[2] = "2";}
  if(includeSymbol===true) {
  finalPassword[3] = "!";}
  
  
  return finalPassword.join("")
  
  
  }
  
