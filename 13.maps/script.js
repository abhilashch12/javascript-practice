// map
// does return a new array
// does not change size of original array
// uses values from original array when making new one
let employees = [{firstName:"ab",lastName:"reddy",salary:100000,empId:1},
    {firstName:"cd",lastName:"rao",salary:70000,empId:2},
    {firstName:"ef",lastName:"roy",salary:80000,empId:4},
    {firstName:"gh",lastName:"yadav",salary:50000,empId:3},
    {firstName:"ij",lastName:"kumar",salary:120000,empId:5}
];
let resultEmp = employees.map((n)=>{
  return `${n.firstName}  ${n.lastName}`;
});
console.log(resultEmp);
