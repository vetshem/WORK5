"use strict"
let m = 1071225;
let e = 91716553919377
function findNb(m){
    let n = 1;
    let suma = 0;
    while(suma < m){
        //I reverse the example and instead of counting from n to 1, I counted from 1 to n
        suma += n**3;
        if (suma === m){
            return n;
        }
        ++n;
    }
    return -1;
}
console.log(findNb(m))
console.log(findNb(e))
