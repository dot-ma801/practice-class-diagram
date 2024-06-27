import { Person } from "./person";

export class Doctor extends Person {
    private specialty: string;

    constructor(id: number, name: string, specialty: string) {
        super(id, name);
        this.specialty = specialty;
    }

    public getSpecialty() {
        return this.specialty;
    }
}