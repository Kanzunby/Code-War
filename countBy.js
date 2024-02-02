// function countBy(x, n) {
//   let z = [x];
//   for (var i = 0; i < n - 1; i++) {
//     z.push(z[i] + x);
//   }

//   return z;
// }

const countBy = (x, n) => [...Array(n)].map((_, i) => (i + 1) * x);

console.log(countBy(2, 5));
