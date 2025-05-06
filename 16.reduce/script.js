let arr = [1,2,3,4,5,6,7];
let sum = arr.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue;
},0);
console.log(sum);