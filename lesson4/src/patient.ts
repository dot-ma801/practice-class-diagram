import { Person } from "./person";

export class Patient extends Person {
    private ailment: string;

    constructor(id: number, name: string, ailment: string) {
        super(id, name);
        this.ailment = ailment;
    }

    public getAilment(): string {
        return this.ailment;
    }
}