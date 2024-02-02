var countSheep = function (num) {
  //your code here

  return [...Array(num)]
    .fill(' sheep...')
    .map((el, i) => i + 1 + el)
    .join('');
};
console.log(countSheep(3));
