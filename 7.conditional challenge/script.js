const person1= {
    name:"abhilash",
    age:24,
    status:"resident"
}
const person2= {
    name:"ram",
    age:17,
    status:"tourist"
}
if(person1.age>18 & person1.status=="resident"){
   console.log(`${person1.name} is eligible`);
}
 else {
     console.log(`${person1.name} is not eligible`);
 }
 if(person2.age>18 & person2.status=="resident"){
    console.log(`${person2.name} is eligible`);
 }
 else {
    console.log(`${person2.name} is not eligible`);
}


