import { Teacher } from "./lesson3/src/teacher"
import { Student } from "./lesson3/src/student"
import { Course } from "./lesson3/src/course";

const teacher1 = new Teacher(1, 'Ms. Smith', 'Mathematics');
const course1 = new Course(101, 'Algebra', teacher1);

const student1 = new Student(1, 'Alice', 10);
const student2 = new Student(2, 'Bob', 11);

course1.addStudent(student1);
course1.addStudent(student2);

console.log(course1.getStudents()); // Studentオブジェクトの配列を表示
console.log(course1.getTeacher().getName()); // 教師の名前を表示

course1.removeStudent(1);

console.log(course1.getStudents()); // 残りのStudentオブジェクトの配列を表示
