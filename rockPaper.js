const rps = (p1, p2) => {
  return p1 === p2
    ? "Draw!"
    : (p1 === "scissors" && p2 === "paper") ||
      (p1 === "rock" && p2 === "scissors") ||
      (p1 === "paper" && p2 === "rock")
    ? 1
    : 2;
};

console.log(rps("scissors", "rock"));
