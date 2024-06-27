import { Doctor } from "./doctor";
import { Patient } from "./patient";

export class Appointment {
    private appointmebtId: number;
    private doctor: Doctor;
    private patient: Patient;
    private date: Date;

    constructor(appointmebtId: number, doctor: Doctor, patient: Patient, date: Date) {
        this.appointmebtId = appointmebtId;
        this.doctor = doctor;
        this.patient = patient;
        this.date = date;
    }
    
    public getAppointmebtId(): number {
        return this.appointmebtId;
    }

    public getDoctor(): Doctor {
        return this.doctor;
    }

    public getPatient(): Patient {
        return this.patient;
    }

    public getDate(): Date {
        return this.date;
    }
}
