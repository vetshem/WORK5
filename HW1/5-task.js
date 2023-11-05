"use strict"
function highAndLow(a){
    a = a.trim().split(" ");//you can do without .trim()
    let max = Number(a[0]);//suppose that the largest number is the first number in the list
    let min = Number(a[0]);//suppose that the smallest number is the first number in the list
    for (let i = 0; i < a.length; i++){
        if (Number(a[i]) > max){
            max = Number(a[i]);
        }
        if (Number(a[i]) < min){
            min = Number(a[i]);
        }
    }

    return ([max, min].join(' ')); //return string

}

let a = highAndLow("1 2 3 4 5"); // return "5 1"
let b = highAndLow("1 2 -3 4 5"); // return "5 -3"
let c = highAndLow("1 9 3 4 -5"); // return "9 -5"
console.log(a);
console.log(b);
console.log(c);
