// find
// returns single instance - (in this case object)
// returns first match, if no match undefined
// great for getting unique value
let employees = [{firstName:"ab",lastName:"reddy",salary:100000,empId:1},
    {firstName:"cd",lastName:"rao",salary:70000,empId:2},
    {firstName:"ef",lastName:"roy",salary:80000,empId:4},
    {firstName:"gh",lastName:"yadav",salary:50000,empId:3},
    {firstName:"ij",lastName:"kumar",salary:120000,empId:5}
];
let empIndi = employees.find((n)=>{
    return n.empId==2;
});
console.log(empIndi);