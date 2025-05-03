function calculateResult(subTotal,tax){
    return subTotal+tax;
}
let order1 = calculateResult(20,30);
let order2= calculateResult(200,310);
let order3= calculateResult(520,307);
console.log(order1);
console.log(order2);
console.log(order3);
//function expression 
let order4= function (subTotal,tax){return subTotal+tax};
console.log(order4(10,15));