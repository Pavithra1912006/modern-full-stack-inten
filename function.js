//function declaration
function product() {
  var pro1 = "mobile";
  console.log(pro1);
}
product();
//function expression
let greet = function () {
  console.log("function  expression");
};
greet();
//arrow function
const array = (a, b) => {
  return a + b;
};

console.log(array(5, 4));