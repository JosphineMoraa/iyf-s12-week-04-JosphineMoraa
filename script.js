// FizzBuzz: print 1 to 100
// Multiples of 3 -> "Fizz", of 5 -> "Buzz", of both -> "FizzBuzz"
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}// Challenge 2: Reverse a string
function reverseString(text) {
  return text.split("").reverse().join("");
}

console.log(reverseString("hello"));
console.log(reverseString("JavaScript"));