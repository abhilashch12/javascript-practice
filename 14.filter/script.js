// filter
// does return a new array
// can manipulate the size of new array
// returns based on condition

let employees = [{firstName:"ab",lastName:"reddy",salary:100000,empId:1},
    {firstName:"cd",lastName:"rao",salary:70000,empId:2},
    {firstName:"ef",lastName:"roy",salary:80000,empId:4},
    {firstName:"gh",lastName:"yadav",salary:50000,empId:3},
    {firstName:"ij",lastName:"kumar",salary:120000,empId:5}
];
let emp = employees.filter((n)=>{
    return n.salary>=70000;
    //return n.push("empOrg:tata");
});
console.log(emp);