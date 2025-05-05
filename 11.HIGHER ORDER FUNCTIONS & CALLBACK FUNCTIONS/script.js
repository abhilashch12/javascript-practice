/*Write a function transformArray(arr, transformer) that applies the transformer function to each element of the array and returns a new array.

Example:
transformArray([1, 2, 3], double) should return [2, 4, 6]
(where double is a function that returns n * 2)*/
function transformArray(arr,transformer){
    let result = [];
    for(let i =0; i<arr.length; i++){
        result.push(transformer(arr[i]));
    }
    console.log(result);
}
function double(n){
   return 2*n;
}
transformArray([20,1,3,4,5],double);
transformArray([20],double);


















/*Problem: customFilter
Create a function customFilter(arr, callback) that filters elements in the array arr based on a condition provided by the callback function.

The function should return a new array containing only the elements for which the callback function returns true.*/
function customFilter(arr, callback){
  let result = [];
  for(let i =0; i<arr.length;i++){
    if(callback(arr[i])){
        result.push(arr[i]);
    }
  }
  return result;
}
function isEven(n){
      return n%2 == 0;

}
function isOdd(n){
    return n%2 != 0;

}
console.log(customFilter([20,23,3,6,8],isEven));
console.log(customFilter([20,23,3,6,8],isOdd));