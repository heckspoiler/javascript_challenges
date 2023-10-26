function findMaxNumber(arr) {
  let num;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= arr[i - 1]) {
      num = arr[i];
    }
  }
  console.log(num);
  return num;
}

module.exports = findMaxNumber;

// other solution:
// function findMaxNumber(arr){
// return Math.max(..arr);
//}
