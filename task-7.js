

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = (login) => login.length >= 4 && login.length <= 16;
const isLoginUnique = (allLogins, login) => allLogins.includes(login);
const addLogin = function (allLogins, login) {
  if (isLoginValid(login) === false) {
    console.log("Помилка! Логін повинен бути від 4 до 16 символів");
  } else if (isLoginUnique(allLogins, login) === true) {
    console.log("Такий логін уже використовується!");
  } else {
    allLogins.push(login);
    console.log("Логін успішно доданий!");
  }
};

/*
 * Виклич функції для перевірки працездатності твоєї реалізації.
 */
addLogin(logins, "Ajax"); // 'Логін успішно доданий!'
addLogin(logins, "robotGoogles"); // 'Такий логін вже використовується!'
addLogin(logins, "Zod"); // 'Помилка! Логін повинен бути від 4 до 16 символів'
addLogin(logins, "jqueryisextremelyfast"); // 'Помилка! Логін повинен бути від 4 до 16 символів'
console.log(logins);
