function parametrIsland(land_pic) {
  function nearLand(row, col, land_pic) {
    return row >= 0 && row < land_pic.length && col >= 0 && col < land_pic[0].length && land_pic[row][col] === 'X';
  }
  let perimeter = 0;
  for (let i = 0; i < land_pic.length; i++) {
    for (let j = 0; j < land_pic[i].length; j++) {
      if (land_pic[i][j] === 'X') {
        if (!nearLand(i, j - 1, land_pic)) { perimeter++ };
        if (!nearLand(i, j + 1, land_pic)) { perimeter++ };
        if (!nearLand(i - 1, j, land_pic)) { perimeter++ };
        if (!nearLand(i + 1, j, land_pic)) { perimeter++ };
      }
    }
  }
  return perimeter;
}
let island1 = ['XOOXO',
              'XOOXO',
              'OOOXO',
              'XXOXO',
              'OXOOO'];
let island2 = ['XOOO',
               'XOXO',
               'XOXO',
               'OOXX',
               'OOOO'];
let a = parametrIsland(island1);
let b = parametrIsland(island2);
console.log(a);
console.log(b);
