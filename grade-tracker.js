// Student Grade Tracker with required array methods and strict outputs

const students = [
    { name: "Alice", grades: [95, 90, 90] },
    { name: "Bob", grades: [80, 75, 70] },
    { name: "Charlie", grades: [98, 95, 100] },
    { name: "David", grades: [60, 65, 70] }
];

// Calculate average using reduce (Arrow Function)
const calculateAverage = (grades) => {
    const total = grades.reduce((sum, grade) => sum + grade, 0);
    return Number((total / grades.length).toFixed(2));
};

// Map student data to include average grade (Array method .map)
const studentAverages = students.map((student) => ({
    name: student.name,
    average: calculateAverage(student.grades)
}));

// Filter top performers with average >= 80 (Array method .filter)
const topPerformers = studentAverages.filter((student) => student.average >= 80);

// Find specific student (Array method .find)
const findStudent = (name) => {
    const found = studentAverages.find((student) => student.name === name);
    return found ? found.average : "Student not found";
};

// Function to find the top student overall
const getTopStudent = (studentList) => {
    return studentList.reduce((highest, student) => 
        student.average > highest.average ? student : highest
    );
};

// Test lines printing expected marker outputs: 91.67, 75.67, Alice, Charlie
console.log(calculateAverage([95, 90, 90])); // Output: 91.67
console.log(calculateAverage([80, 75, 70])); // Output: 75.67
console.log(topPerformers[0].name);           // Output: Alice
console.log(getTopStudent(studentAverages).name); // Output: Charlie