// Student Grade Tracker

const students = [
  { name: "Josphine", grades: [88, 92, 95] },
  { name: "Joy", grades: [78, 85, 80] },
  { name: "Charlie", grades: [95, 88, 90] }
];

// Function to calculate average grade for a single student
function calculateAverage(grades) {
  let sum = 0;
  for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
  }
  return sum / grades.length;
}

// Function to find the student with the highest average
function findTopStudent(studentList) {
  let topStudent = studentList[0];
  let highestAvg = calculateAverage(topStudent.grades);

  for (let i = 1; i < studentList.length; i++) {
    let currentAvg = calculateAverage(studentList[i].grades);
    if (currentAvg > highestAvg) {
      highestAvg = currentAvg;
      topStudent = studentList[i];
    }
  }
  return topStudent.name;
}

// Test cases & outputs
console.log("Josphine's Average:", calculateAverage(students[0].grades).toFixed(2));
console.log("Joy's Average:", calculateAverage(students[1].grades).toFixed(2));
console.log("Top Student:", findTopStudent(students));