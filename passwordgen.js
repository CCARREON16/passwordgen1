// Assignment Code
var generateBtn = document.querySelector("#generate");


generateBtn.addEventListener("click", function(){
var password = prompt ("would you like to create password? (Select Yes or No):");
})

var password = prompt ("How many chracters in your password ? (min 8, max 128):");

var Ucase = prompt ("would you like to letters in your password? (Select Yes or No):");
var Ucase = ["A","B","C", "D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W", "X","Y", "Z"]
for (var a = 0; a < 1; a++) {
var upper = Ucase(Math.floor(math.random() * Ucase.length));
console.log(upper);}

var Lcase = prompt ("would you like lowercase letters in your password? (Select Yes or No):");
var Lcase = ["a","b","c", "d", "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w", "x","y","z"];
for (var a = 0; i < 1; i++) {
var lower = Lcase(Math.floor(math.random() * Lcase.length));
console.log(lower);}

var numbers = prompt ("would you like numebers in your password? (Select Yes or No):");     
var numbers = Ucase(Math.floor(math.random() * 9)) + 0;
  console.log(numbers);
  
  var numbers = prompt ("would you like special characters in your password? (Select Yes or No):");
  var chracters = ["~","!","@", "#", "$","%","^","&","*","+","<",">","?"];
  for (var a = 0; a < 1; a++) {
    var special = chracters[Math.floor(math.random() * chracters.length)];
console.log(special);}

var length = prompt("How many characters will your password be? Enter a number between 8 and 128");


var charType = prompt("Enter a character type: special, numeric, uppercase, lowercase.");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

}
