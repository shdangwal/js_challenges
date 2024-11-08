function calculator(a, b, op) {
  if (op === "+") return a + b;
  else if (op === "-") return a - b;
  else if (op === "*") return a * b;
  else if (op === "/") return a / b;
  else throw new Error("Invalid Operator");
}

module.exports = calculator;
