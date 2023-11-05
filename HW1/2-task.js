"use strict"
let number_disks = 4;
function Hanoi(n){
    let counter = 0
    //рекурсивний метод рішення, самий перший в вікі
    //https://ru.wikipedia.org/wiki/Ханойская_башня
    ++counter;
    if (n===1){
        return counter;
    }else{
        counter = Hanoi(n-1, counter); //присвоєння return
        return Hanoi(n-1, counter);
    }
}
function hanoi(n){
    return 2**n-1; //рішення за формулою

}
console.log(Hanoi(number_disks));
console.log(hanoi(number_disks));
