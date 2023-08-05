const checkForSpam = function (message) {
  let result = "";
  if (message === message.toUpperCase()) {
    result += message.toLowerCase();
  } else {
    result += message.toLowerCase();
  }
  const newString =
    result.includes("spam") || result.includes("sale") ? true : false;
  return newString;
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
