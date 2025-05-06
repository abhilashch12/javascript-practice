//step1
let students = [{
    id: 1,
    name: 'peter',
    score: 80,
    favoriteSubject: 'math',
    },
    {
        id: 2,
        name: 'ram',
        score: 90,
        favoriteSubject: 'geology',
        },
        {
            id: 4,
            name: 'ramesh',
            score: 80,
            favoriteSubject: 'telugu',
            },
            {
                id: 5,
                name: 'rahul',
                score: 70,
                favoriteSubject: 'math',
                },
 ]
 let updatedStudents = students.map((student)=>{
    student.role= "student";
    return student;
 });
 //console.log(updatedStudents);
 let highScores = students.filter((student)=>{
    return student.score>=80;
 });
 //console.log(highScores);
 let specificId = students.find((student)=>{
    return student.id == 5;
 });
 //console.log(specificId);
 let totalScore = students.reduce((accumlatare,currentValue)=>{
     return accumlatare+currentValue.score;
 },0);
 let averageScore = totalScore/students.length;
 console.log(totalScore);
 console.log(averageScore);
 let survey = students.reduce((accumlatare,currentValue)=>{
               if(accumlatare[currentValue.favoriteSubject]){
                accumlatare[currentValue.favoriteSubject]+=1;
               }
               else{
                accumlatare[currentValue.favoriteSubject]=1;
               }
               return accumlatare;
 },{});
 console.log(survey);