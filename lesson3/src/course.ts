import { Student } from "./student";
import { Teacher } from "./teacher";

export class Course {
    private id: number;
    private name: string;
    private teacher: Teacher;
    private students: Student[];

    constructor(id: number, name: string, teacher: Teacher, students: Student[]){
        this.id = id;
        this.name = name;
        this.teacher = teacher;
        this.students = students;
    }

    // getters
    public getStudents(): Student[] {
        return this.students;
    }

    public getTeacher(): Teacher {
        return this.teacher;
    }

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    // methods
    public addStudent(student: Student): void {
        this.students.push(student);
    }

    public removeStudent(studentId: number): void {
        this.students.filter((student) => student.getId() != studentId);
    }
}
