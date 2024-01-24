function getAverage(marks) {
  return Math.floor(marks.reduce((a, b) => a + b) / marks.length);
}

console.log(getAverage([2, 2, 2, 2]));
