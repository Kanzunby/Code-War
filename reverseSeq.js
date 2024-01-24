const reverseSeq = (n) => {
  return [...Array(n)].map((el, i) => n - i);
};

console.log(reverseSeq(6));
