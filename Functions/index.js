/* Q1. Create a function called fizzBuzz that would print the result based on the following conditions:
    If the number is divisible by 3, print 'Fizz'.
    If the number is divisible by 5, print 'Buzz'.
    If the number is divisible by 3 AND 5, print 'FizzBuzz'.
    If the number is not divisible by 3 or 5, print 'Pop'.

Use the following test scenarios:
fizzBuzz(49); //Pop
fizzBuzz(55); //Buzz
fizzBuzz(120); //FizzBuzz
fizzBuzz(9999); //Fizz
*/

function fizzBuzz(number) {
    if (number % 3 === 0 && number % 5 === 0) {
      console.log('FizzBuzz');
    } else if (number % 3 === 0) {
      console.log('Fizz');
    } else if (number % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log('Pop');
    }
  }
  
  fizzBuzz(49);
  fizzBuzz(55);
  fizzBuzz(120);
  fizzBuzz(9999); 

/* Q2. Create a function called averager that gets the average of an array. */

function averager(avg) {
    if (avg.length === 0) {
      return 0;
    }
  
    const sum = avg.reduce((acc, current) => acc + current, 0);
    return sum / avg.length;
  }

const prices = [12.99, 17.75, 88.12, 111.11, 77.09, 53.45];
let result = averager(prices);
console.log(result);


/* Q3. Create functions that would convert temperature from Celsius to Fahrenheit and Kelvin. Round the result to two decimal places. */

function celToFah(celsius) {
  const fahrenheit = (celsius * 9 / 5) + 32;
  return fahrenheit.toFixed(2);
}

function celToKel(celsius) {
  const kelvin = celsius + 273.15;
  return kelvin.toFixed(2);
}

console.log(celToFah(37.5) + " degrees Fahrenheit");
console.log(celToFah(-40) + " degrees Fahrenheit");
console.log(celToFah(0) + " degrees Fahrenheit");
console.log(celToFah(100) + " degrees Fahrenheit");
console.log(celToKel(173.13) + " degrees Kelvin");
console.log(celToKel(-13) + " degrees Kelvin");

/* Q4. Create a function called pow that gets two values and computes for the power value of the two numbers
pow(2, 3) -> 2 * 2 * 2 -> 8

Note: You can not use Math.pow function. You need to write your own implementation of the function.
*/

function pow(base, exponent) {
    if (exponent === 0) {
      return 1;
    } else if (exponent < 0) {
      return "Exponent must be a non-negative integer.";
    } else {
      let result = 1;
      for (let i = 0; i < exponent; i++) {
        result *= base;
      }
      return result;
    }
  }
  
  console.log(pow(2, 3));