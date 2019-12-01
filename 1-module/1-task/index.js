/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow(m, n) {
  let result = 1;
  for (let i = n; i > 0; i--) {
    result *= m;
  }
  return result;
}
