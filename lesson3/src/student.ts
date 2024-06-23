import { Person } from "./person";

export class Student extends Person {
    private grade: number;
    
    constructor(id: number, name: string, grade: number) {
        super(id, name);
        this.grade = grade;
    }

    public getGrade(): number {
        return this.grade;
    }
}
