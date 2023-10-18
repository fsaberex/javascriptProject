let addFive = (num) => num +5;

 let students = [
    {
        name: 'Jeff Benton',
        grade: 87,
        badStudent: false,
        hobbies: [
            {type: 'Gaming', hourPlayed: 2000},
            {type: 'Golf', clubsInBag: 14}
        ]
    },
    {
        name: 'jexenia',
        grade: 80,
        badStudent: true,
        hobbies: [
            {type: 'Solo Traveling', dangerLvL: 6},
            {type: 'Snorkeling', dangerLvL: 3},
        ]
    
    
    }
]

let newArray = students.map((student) => {

    console.log(student.hobbies);

    return student.name;
})

let badStudents = students.filter((student) => {
    if (student.badStudent) return true; 
    
    return false;
})

let studentPassGrade = students.filter((student) => {
    if (student.grade > 85) return true; 
    
    return false;
})

console.log(badStudents);
console.log(studentPassGrade);

let studyCamp = {type: 'Study Camp', dangerLvl: 14};

let campStudents = students.filter(student => student.campStudent).forEach(student => student.hobbies.push(studyCamp));

console.log