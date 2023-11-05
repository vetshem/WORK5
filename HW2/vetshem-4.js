function unpackSausages(truck) {
  const quantity = 4;
  const goods = truck.flat();
  let goods_sausage = [];
  for (let i = 0; i < goods.length; i++) {
    if (goods[i][0] == "[" && goods[i][quantity + 1] == "]") {
      goods_sausage.push(goods[i].slice(1, quantity + 1));
    };
  };
  for (let i = 0; i < goods_sausage.length; i++) {
    let counter = 0;
    for (let j = 0; j < goods_sausage[i].length; j++) {
      if (goods_sausage[i][0] == goods_sausage[i][j]) {
        counter++;
      };
    };
    if (counter < 4) {
      goods_sausage.splice(i, 1);
    };
  };
  let rewardArray = [];
  for (let i = 0; i < goods_sausage.length; i++) {
    if ((i + 1) % 5 === 0) {
      rewardArray.push(goods_sausage.splice(i, 1));
    }
  }
  let final_govno_code = [];
  for (let i = 0; i < goods_sausage.length; i++) {
    for (let j = 0; j < goods_sausage[i].length; j++) {
       final_govno_code.push(goods_sausage[i][j]);
    }
  }
  return final_govno_code.join(" ");

};
let truck = [["(-)", "[IIII]", "[))))]"], ["IuI", "[llll]"], ["[@@@@]", "UwU", "[IlII]"], ["IuI", "[))))]", "x"], []];

console.log(unpackSausages([["[IIII]", "[║║║║]", "[1-11]"]]), "I I I I ║ ║ ║ ║");
console.log(unpackSausages([["[IIII]", "[llll]", "[1111]", "[@@@@]", "[||||]", "[║║║║]"]]), "I I I I l l l l 1 1 1 1 @ @ @ @ ║ ║ ║ ║");

