const input =  require('readline-sync');
const CONSTANT = "constant";
var variable = "variable";
var array = ["one", "two", "three"];

function main() {
  console.log(variable);
  console.log(CONSTANT);
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
  let input = input.question("readline sync io: ");
  console.log(input);
}

main();
