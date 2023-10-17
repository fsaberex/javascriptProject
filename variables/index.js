let studentFirstName = "Brandon";
let studentLastName = "N";
let grade1 = 53;
let grade2 = 96;
let grade3 = 65;
let grade4 = 74;
let passingGrade = 80;
//1.Create a variable called average that computes for the average from grade1 to grade4

//2. Change the value of studentLastName to "Newman" 

//3. Print in console the following statement: "<value of studentFirstName> <value of studentLastName> has an average grade of <value of average>"
//ex. Jane Doe has an average grade of 100.

//4. Write code that would answer this question: Did the student pass?

let gradeTotal = grade1 + grade2 + grade3 + grade4;

let average = gradeTotal/4;

studentLastName = "Newman"

console.log(`${studentFirstName} ${studentLastName} has an average grade of ${average}.`);

if(average >= passingGrade){
    console.log(`${studentFirstName} ${studentLastName} passed!`);
}
else{
    console.log(`${studentFirstName} ${studentLastName} did not pass.`);
}