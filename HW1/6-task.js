"use strict"

function MySort(a){
    a = a.toString();
    let arr =[];

    for (let i = 0; i < a.length; i++){
        arr.push(Number(a[i])); //create array of numbers

    }

    //bubble sort;
    for (let i = 0; i< arr.length -1; i++){
        for (let j = 0; j < arr.length - i - 1; j++){

            if (arr[j]<arr[j+1]){
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                }
        }
    }
    const numberAsString = arr.join(''); //arr to string;
    return Number(numberAsString); //string to Number;


}
let a = 41145;
let b = 145263;
let c = 123456789;
console.log(MySort(a));
console.log(MySort(b));
console.log(MySort(c));
