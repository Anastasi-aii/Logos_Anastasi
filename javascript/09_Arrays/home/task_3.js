function filterRangeInPlace(arr, a, b) {
    let numFilter = arr.filter(num => (a < num && num < b));
    return(numFilter);
}
  
let arr = [1, 2, 3, 5, 7, 11, 13];

let result = filterRangeInPlace(arr, 1, 4);

arr = result;

console.log(arr);