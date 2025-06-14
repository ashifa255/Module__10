/*
  1.  Write a function named countVowels that takes a string and returns the number of vowels in it.
*/

function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("Ashifa Tamanna"));

/*
  2. Write a function named sortNumbers that takes an array of numbers and returns the array sorted in ascending order.
*/

function sortNumbers(arr) {
  return arr.sort((a, b) => a - b);
}

const result1 = sortNumbers([4, 1, 8, 3]);
console.log(result1);

/*
  3. Write a function named reverseString that takes a string and returns the reversed version of the string.
*/

function reverseString(str) {
  return str.split('').reverse().join('');
}

const result2 = reverseString("hello");
console.log(result2);
