const CONSTANT = "constant";
var variable = "variable";
var array = ["one", "two", "three"];

function main() {
  console.log(variable);
  console.log(CONSTANT);
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

main();
