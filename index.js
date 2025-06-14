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
