/* 1. Define a function, as a function declaration, maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.*/
function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  
    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
  };

 console.log("Exercise 1 Results:");
 console.log(maxOfTwoNumbers(3, 9));
  
/* 2. Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.*/
const maxOfThree = function (a, b, c) {
   if (a >= b && a >= c) {
     return a;
   } else if (b >= a && b >= c) {
     return b;
   } else {
     return c;
   }
 };
  
 console.log("Exercise 2 Results:");
 console.log(maxOfThree(5, 10, 2)); // Output: 10
 console.log(maxOfThree(7, 3, 9));  // Output: 9
 console.log(maxOfThree(1, 1, 1));  // Output: 1
  
  
/* 3. Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.*/
function isCharAVowel(char) {
   char = char.toLowerCase();
   return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u';
  }
  
 console.log("Exercise 3 Results:");
 console.log(isCharAVowel('a'));
 console.log(isCharAVowel('E'));
 console.log(isCharAVowel('x'));

/* 4. Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]); would return 11.*/
const sumArray = function (array) {
   let sum = 0;
   for (let i = 0; i < array.length; i++) {
     sum += array[i];
   }
   return sum;
  };
  
 console.log("Exercise 4 Results:");
 console.log(sumArray([2, 4, 5]));

/* 5. Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]); would return 40.*/
function multiplyArray(array) {
    let product = 1;
    for (let i = 0; i < array.length; i++) {
        product *= array[i];
    }
    return product;
  }
  
console.log("Exercise 5 Results:");
console.log(multiplyArray([2, 4, 5]));

/* 6. Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.*/
const numArgs = function (...args) {
    return args.length;
  };
  
console.log("Exercise 6 Results:");
console.log(numArgs());
console.log(numArgs(1, 2, 3));
console.log(numArgs('a', 'b', 'c'));

/* 7. Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar'); would return the string "ratskcor".*/
function reverseString(inputString) {
    return inputString.split('').reverse().join('');
 }
  
console.log("Exercise 7 Results:");
console.log(reverseString('hi my name is jeff'));

/* 8. Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.*/
const longestStringInArray = function (stringArray) {
    if (stringArray.length === 0) {
        return 0;
    }
  
    let maxLength = 0;
    for (let i = 0; i < stringArray.length; i++) {
        const currentLength = stringArray[i].length;
        if (currentLength > maxLength) {
            maxLength = currentLength;
        }
    }
  
    return maxLength;
  };
  
console.log("Exercise 8 Results:");
console.log(longestStringInArray(['apple', 'banana', 'cherry']));
console.log(longestStringInArray(['cat', 'dog', 'elephant']));
console.log(longestStringInArray([]));

/* 9. Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].*/
function stringsLongerThan(stringArray, length) {
    const longerStrings = stringArray.filter(function (str) {
        return str.length > length;
    });
    return longerStrings;
  }
  
const inputArray = ['say', 'hello', 'in', 'the', 'morning'];
const minLength = 3;
console.log("Exercise 9 Results:");
console.log(stringsLongerThan(inputArray, minLength));
