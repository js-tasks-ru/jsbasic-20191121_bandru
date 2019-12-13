/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let resArray1 = str.split(' ');
  let resArray2 = [];
  for (let elem of resArray1) {
    resArray2 = resArray2.concat(elem.split(','));
  }
  resArray2.sort((a, b)=> a - b);
  return {min: +resArray2[0], max: +resArray2[resArray2.length - 1]};
}
