function calculate(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b === 0) {
        return "Error: Division by zero";
      }
      return a / b;
    default:
      return "Error: Invalid operator";
  }
}

// Example usage:
console.log(calculate(5, 3, "+")); // 8
console.log(calculate(5, 3, "-")); // 2
console.log(calculate(5, 3, "*")); // 15
console.log(calculate(5, 0, "/")); // Error: Division by zero

function sumFrom1To365() {
  return Array.from({ length: 365 }, (_, i) => i + 1).reduce(
    (acc, curr) => acc + curr,
    0
  );
}

console.log(sumFrom1To365()); // 66795
