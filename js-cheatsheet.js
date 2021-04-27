const input =  require('readline-sync');
var fs = require('fs');
const CONSTANT = "constant";
var variable = "variable";
var array = ["one", "two", "three"];

function main() {
  console.log(variable);
  console.log(CONSTANT);
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
  filesystem();
}

function filesystem() {
  let input = input.question("readline sync io: ");
  var data = fs.readFileSync('input.txt');
  console.log(input + data.toString());
}

main();
