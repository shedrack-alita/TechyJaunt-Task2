// Sample student data
const students = [
  { name: "Shedrack", age: 26, grade: "A" },
  { name: "Fortune", age: 31, grade: "B" },
  { name: "Nkechi", age: 37, grade: "C" },
  { name: "Nedu", age: 42, grade: "D" },
  { name: "Kate", age: 51, grade: "E" },
  { name: "Pretty", age: 93, grade: "F" },
];

// Function to filter students by grade
const filterByGrade = (studentsArray, targetGradeToFilter) => {
  return studentsArray.filter((student) => student.grade === targetGradeToFilter);
}

// Function to calculate the average age of students
function averageAge(studentsArray) {
  const studentsTotalAge = studentsArray.reduce((sum, student) => sum + student.age, 0);
  return studentsTotalAge / studentsArray.length;
}

// 
console.log(filterByGrade(students, "A")); // Expected result: [ { name: 'Shedrack', age: 26, grade: 'A' } ]
console.log(filterByGrade(students, "B")); // Expected result: [ { name: 'Fortune', age: 31, grade: 'B' } ]
console.log(filterByGrade(students, "C")); // Expected result: [ { name: 'Nkechi', age: 37, grade: 'C' } ]
console.log(filterByGrade(students, "D")); // Expected result: [ { name: 'Nedu', age: 42, grade: 'D' } ]
console.log(filterByGrade(students, "E")); // Expected result: [ { name: 'Kate', age: 51, grade: 'E' } ]
console.log(filterByGrade(students, "F")); // Expected result: [ { name: 'Pretty', age: 93, grade: 'F' } ]
console.log(averageAge(students).toFixed(2)); // Expected result: 46.67
