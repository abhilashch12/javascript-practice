const petrol = [20,540,630,100];
const householdExpense = [2000,1000,330];
function totalExpense(arr){
    let total =0;
    for(let i=0;i<arr.length;i++){
        total+=arr[i];
    }
    if(total>100){
        console.log(` spending is high `);
    }
    else{
        console.log(`$ spending is low `);
    }
    return total;
}
    const petrolTotal = totalExpense(petrol);
    const householdExpenseTotal = totalExpense(householdExpense);
    console.log({petrol :petrolTotal,
        householdExpense:householdExpenseTotal});

