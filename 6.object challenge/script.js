const car = {
    make:"BMW", model:"v4", year:2022, color:["red","yellow","green"], true: "yes", false: "no",
    drive : function(){
        console.log("start driving");
    }, stop: function (){
        console.log("stop driving");
    }
}

console.log(car.make);
console.log(car.color[0]);
car.drive();
car.stop();