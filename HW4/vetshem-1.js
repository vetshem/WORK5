"use strict";

var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var key = 'password';
function VigenèreCipher(key, abc){

    function check(str, operation){

       let pass = ""
        let shift;
        let final_word ="";
        for(let i = 0; i < str.length; i++){
            if (key[i]){
                  pass += key[i];
            } else {
                key+=key;
                pass += key[i];
            }
            let char = str[i];
            //console.log(char); //буква слова
            let char_key = pass[i];
            //console.log(char_key); //буква ключа

            if(operation === 'encode'){
                shift = abc.indexOf(char) + abc.indexOf(char_key);
                 if (!abc[shift]){
                abc += abc;
            }
            } else if(operation === 'decode'){
                shift = abc.indexOf(char) - abc.indexOf(char_key);
                if (shift < 0){
                shift += abc.length; // Здійснюємо зациклювання назад до кінця abc
            }
            }

            //console.log(abc[shift]);
           if (str[i] != str[i].toLowerCase()){
            final_word+=str[i];
        } else if(!abc.includes(str[i])){
            final_word+=str[i];

        } else{
            final_word+=abc[shift];
        }
        }
        return final_word;
    }
    this.encode = function(str){
        let operation = 'encode';
        return check(str, operation)
    }

     this.decode = function(str){
          let operation = 'decode';
       return check(str, operation)
    }
}
let c = new VigenèreCipher(key, alphabet);

let enc = c.encode("CODEрпопwars")
let dec = c.decode("rovwsoiv")

console.log("ENCODE: " + enc +"\nDECODE: " + dec)




