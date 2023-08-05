const findLongestWord = function (string) {
    
  const result = string.split(" ");
  let longestWord = result[0];

  for (const word of result) {
    if (word.length > longestWord.length) longestWord = word;
  }
  return longestWord;
};

/*
 * Виклич функції для перевірки працездатності твоєї реалізації.
 */
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
