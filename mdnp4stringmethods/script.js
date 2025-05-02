const fName="Abhilash";
console.log(fName.length);
console.log(fName[1]);
console.log(fName[fName.length-1]);
//includes()
const message = "heello, how are u doing";
if(message.includes("doing")){
    console.log("doing is included");
}
else{
    console.log("not found");
}
// startsWith(),endsWith()
if(message.startsWith("hello")){
    console.log("start");
}
else{
    console.log("not start");
}
//finding the position of a substring. indexOf()
console.log(message.indexOf("u"));
firstOccurence = message.indexOf("o");
secondOccurence = message.indexOf("o",firstOccurence+1);
console.log(firstOccurence);
console.log(secondOccurence);
// extracting the substring from a string. slice()
console.log(message.slice(3,7));
console.log(message.slice(5));
//toUpperCase,toLowerCase
const firstName = "Abhilash";
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());
// updating parts of the string. replace(), replaceAll()
console.log(message.replace("heello","hello"));
console.log(message.replaceAll("o","i"));