import { Patient } from "../types/index";
import { PatientDetailItem } from "./PatientDetailItem";

type PatientDetailProps = {
    patient: Patient;
};

export const PatientsDetails = ({ patient }: PatientDetailProps) => {
    return (
        <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
            <PatientDetailItem label="ID" data={patient.id} />
            <PatientDetailItem label="Nombre" data={patient.name} />
            <PatientDetailItem label="Caretaker" data={patient.caretaker} />
            <PatientDetailItem label="Email" data={patient.email} />
            <PatientDetailItem
                label="Discharge date"
                data={patient.date.toString()}
            />
            <PatientDetailItem label="Symptoms" data={patient.symptoms} />
        </div>
    );
};
