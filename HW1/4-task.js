"use strict"

function is_prime(a){
     let counter = 0;
     if (a<=1){
         return false;
     }
     for (let i = 0; i <= a; i++){

        if (Number.isSafeInteger(a/i)){
             ++counter;
        }
        if (counter > 3){
            return false
        }

     }
     if (counter === 3){
            return false
        }
     if (counter === 2){
         return true
     }

}

console.log(is_prime(6758765967967587659679))


