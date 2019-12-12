/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  let users = [];
  for (let elem of data) {
    if (elem.age <= age) {
      users.push(`${elem.name}, ${elem.balance}`);
    }
  }
  return users.join('\n');
}
