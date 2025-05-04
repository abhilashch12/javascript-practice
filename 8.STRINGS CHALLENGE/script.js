function fullName({firstName,lastName}){
    let result = `${firstName}  ${lastName}`;
    return result.toUpperCase( );
}
    console.log(fullName({lastName:"ab",firstName:"reddy"}));
    //console.log(fullName{lastName:"reddy",firstName:"ab"});
