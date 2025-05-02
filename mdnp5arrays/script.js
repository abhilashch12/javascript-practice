let carNames = ["Bmw","Audi","tata","mahindra","toyota","benz"];//array creation
console.log(carNames);
//length of an array
let length=carNames.length;
console.log(length);
//accessing and modifying array items
console.log(carNames[2]);
carNames[0]="tesla";
console.log(carNames);
//finding index of an item in array
console.log(carNames.indexOf("toyota"));
//adding items *push()*unshift()[To add in the start]
carNames.push("ferari");
console.log(carNames);
carNames.unshift("rangerover");
console.log(carNames);
//removing items *pop() *shift() *splice()
carNames.pop();
console.log(carNames);
carNames.shift();
console.log(carNames);
console.log(carNames.slice(1,3));
//accessing every item (for...to)
for(let carName of carNames){
    console.log(carName);
}
//map() 
function double(num){
return 2*num;
}
let score=[1,2,3,4,5];
let scores=score.map(double);
console.log(scores);
//filter()
function evennum(num){
    return num%2==0;
}
let even = score.filter(evennum);
console.log(even);
//converting array to string and vice versa
let words = ["JavaScript", "is", "awesome"];
let sentence = words.join(" ");
console.log(sentence);
let array = sentence.split(" ");
console.log(array);