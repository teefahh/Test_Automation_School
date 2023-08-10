
const num = [32,-45, 33,-9,-3, 16, -66, 2, 40,-4];

const result = num.filter(checkNegatives);
function checkNegatives(num) {
  return num < 0 ;
}
console.log(result)