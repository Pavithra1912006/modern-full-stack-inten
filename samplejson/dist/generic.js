"use strict";
// function gen<T> (value:T):T{
// // if(typeof(value)===string){
Object.defineProperty(exports, "__esModule", { value: true });
// // }
// console.log(value);
// }
function generic(value) {
    console.log(value);
    return value;
}
console.log(generic("hello"));
console.log(generic(10));
function getelem(arr) {
    return arr;
}
console.log(getelem(["pavi", "priya"]));
console.log(getelem([1, 2, 3, 4, 5, 6, 7, 8, 9]));
