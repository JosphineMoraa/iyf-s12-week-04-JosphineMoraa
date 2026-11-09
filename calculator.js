// Basic arithmetic functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero is not allowed";
  }
  return a / b;
}

// Main calculate function using a switch statement
function calculate(num1, operator, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    case "%":
      return num1 % num2;
    case "**":
      return num1 ** num2;
    default:
      return "Invalid operator";
  }
}

// Test cases
console.log("Add: ", calculate(10, "+", 5));       // Expected output: 15
console.log("Subtract: ", calculate(10, "-", 5));  // Expected output: 5
console.log("Multiply: ", calculate(10, "*", 5));  // Expected output: 50
console.log("Divide: ", calculate(10, "/", 2));    // Expected output: 5
console.log("Divide by 0: ", calculate(10, "/", 0)); // Expected error message