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
// Challenge 4: Remove duplicates from an array
function removeDuplicates(items) {
  return [...new Set(items)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
console.log(removeDuplicates(["a", "b", "a", "c", "b"]));
// Challenge 5: Check if a string is a palindrome
function isPalindrome(str) {
    // Convert to lowercase and remove non-alphanumeric characters (optional cleanup)
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    
    // Reverse the string and compare
    const reversed = cleaned.split("").reverse().join("");
    return cleaned === reversed;
}

// Test cases
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true