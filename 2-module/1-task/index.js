/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
function clone(obj) {
  let resObj = {};
  for (let key in obj) {
    if (typeof (obj[key]) === 'object' && obj[key] !== null) {
      resObj[key] = clone(obj[key]);
    } else {
      resObj[key] = obj[key];
    }
  }
  return resObj;
}
