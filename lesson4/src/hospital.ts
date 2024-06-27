import { Doctor } from "./doctor";
import { Patient } from "./patient";
import { Appointment } from "./appointment";

export class Hospital {
    private doctors: Doctor[] = [];
    private patients: Patient[] = [];
    private appointments: Appointment[] = [];

    constructor(doctor: Doctor, patient: Patient, appointment: Appointment) {
        this.doctors.push(doctor);
        this.patients.push(patient);
        this.appointments.push(appointment);
    }

    public addDoctor(doctor: Doctor): void {
        this.doctors.push(doctor);
    }

    public addPatient(patient: Patient): void {
        this.patients.push(patient);
    }

    public scheduleAppointment(appointment: Appointment): void {
        this.appointments.push(appointment);
    }

    public getDoctors(): Doctor[] {
        return this.doctors;  
    }

    public getPatients(): Patient[] {
        return this.patients;  
    }

    public getAppointments(): Appointment[] {
        return this.appointments;  
    }
}
