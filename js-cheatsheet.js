const input =  require('readline-sync');
var fs = require('fs');
const CONSTANT = "constant";
var variable = "variable";
var array = ["one", "two", "three"];

// Single line comment
/*
Multi line comment
*/

function main() {
  console.log(variable);
  console.log(CONSTANT);
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
  filesystem();
}

function filesystem() { // File I/O
  let input = input.question("readline sync io: ");
  var data = fs.readFileSync('input.txt');
  console.log(input + data.toString());
  output();
}

function output() { // Outputs (browser and command line)
  console.log("console log");
  document.write("HTML output");
  alert("browser alert");
  confirm("yes or no?");
  prompt("number","0");
  math();
}

function math() { // Math
  var pi = Math.PI;
  var a = 0;
  a = Math.floor((Math.random() * 10) + 1);
  a = a * pi;
  a = Math.round(a);
  a = a + 1;
  a = a * 2;
  a = a / 3;
  a++;
  a--;
  console.log(a);
}

main();
