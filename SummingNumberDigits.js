/*Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values.
*/

//Best Solution

function sumDigits(number) {
  let num = Math.abs(number);
  let str = String(num);
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += +str[i]
  } return sum
}
