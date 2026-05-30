// function gen<T> (value:T):T{
// // if(typeof(value)===string){

// // }
// console.log(value);

// }
function generic <T>(value:T):T{
    console.log(value)
    return value;

}
console.log(generic<string>("hello"))
console.log(generic<number>(10))


function getelem<T>(arr:T[]):T[]{
    return arr;
}
console.log(getelem<string>(["pavi","priya"]))
console.log(getelem<number>([1,2,3,4,5,6,7,8,9]))

