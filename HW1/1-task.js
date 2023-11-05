"use strict"

function number(x){
    let sum = 0;
    let Myaray = [];
    let counter = 1;
    while (counter < x){
        if (counter%3 == 0){
            console.log(`${counter}`,"ділиться націло на 3");
            Myaray.push(counter);
            ++counter;
        } else if (counter%5 == 0){
            console.log(`${counter}`, "ділиться націло на 5");
            Myaray.push(counter);
            ++counter;
            }
        else{
            ++counter;
        }

    }
    for (let i = 0; i < Myaray.length; i++){
        sum += Myaray[i];
    }
    return sum;

}

let a = number(7217)

console.log(a);
