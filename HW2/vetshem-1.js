function codewarsCounsil(arr, d){
  const n = arr.length;
  if (n%d==0 && 1<=d<=31 && n>0){
    const quantity_line = n/d;
    let arr_sum = [];
    for(let i = 0; i < quantity_line; i++){
      let sum = 0;
      for(let j = 0; j < d; j++){
        sum += arr[i+j*quantity_line];
      };
      arr_sum.push(sum);
    };

    return Math.max(...arr_sum);
  }
  else{
    return -1;
  };

};
let a = [1, 2, 3, 4];
let d = 2;
let a2 = [1, 5, 6, 3, 4, 2];
let d2 = 3;
let a3 = [1,1,0];
let d3 = 1;
console.log(codewarsCounsil(a, d));
console.log(codewarsCounsil(a2, d2));
console.log(codewarsCounsil(a3, d3));
