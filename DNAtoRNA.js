const dna = (d) => d.split('').map((el) => (el === 'T'? 'U' : el)).join('')
// function dna (d) {
//     return d.split('').map((el) => (el === 'T'? 'U' : el)).join('')
// }

console.log(dna("GACCGCCGTT"));