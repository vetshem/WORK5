function par(arr){
  function sum(arr){
    let sum = 0;
    arr.forEach((element) => sum+=element)
    return sum;
  };
  for(let i = 1; i <= arr.length; i++){
    if (sum(arr.slice(0,i-1)) == sum(arr.slice(i))){
        return i-1;
    }

  };
  return -1;
};
let arr =  [1,100,50,-51,1,1];
let arr2 = [20,10,-80,10,10,15,35];
let arr3 = [1,2,3,4,3,2,1];
console.log(par(arr));
console.log(par(arr2));
console.log(par(arr3));
