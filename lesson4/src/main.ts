import { Doctor } from "./doctor";
import { Patient } from "./patient";
import { Appointment } from "./appointment";
import { Hospital } from "./hospital";

const doctor1 = new Doctor(1, 'Dr. Smith', 'Cardiology');
const doctor2 = new Doctor(2, 'Dr. Johnson', 'Neurology');

const patient1 = new Patient(1, 'John Doe', 'Heart Disease');
const patient2 = new Patient(2, 'Jane Doe', 'Migraine');

const appointment1 = new Appointment(101, doctor1, patient1, new Date('2024-07-01'));
const appointment2 = new Appointment(102, doctor2, patient2, new Date('2024-07-02'));

const hospital = new Hospital();
hospital.addDoctor(doctor1);
console.log(hospital.getDoctors());
hospital.addDoctor(doctor2);
console.log(hospital.getDoctors());
console.log("====");

hospital.addPatient(patient1);
console.log(hospital.getPatients());
hospital.addPatient(patient2);
console.log(hospital.getPatients());
console.log("====");

hospital.scheduleAppointment(appointment1);
console.log(hospital.getAppointments());
hospital.scheduleAppointment(appointment2);
console.log(hospital.getAppointments());
console.log("====");
