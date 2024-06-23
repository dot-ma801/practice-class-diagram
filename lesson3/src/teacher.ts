import { Person } from "./person";

export class Teacher extends Person {
    private subject: string;

    constructor(id: number, name: string, subject: string) {
        super(id, name);
        this.subject = subject;
    }

    public getSubject(): string {
        return this.subject;
    }
}
