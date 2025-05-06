const num = [24,1,5,7,8,9,90];
// to print the array
console.log(num);
// to print individual elements in array
for (const nums of num){
    console.log(nums);
}
// using forEach()
// by using forEach loop we can acess index, array, element'
num.forEach(callback);
function callback(number,index,arr){
    console.log(number,index,arr);
}