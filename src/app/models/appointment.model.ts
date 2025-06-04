import { APPOINTMENT_STATUS, CONSULTATION_TYPE } from "../app.constants";

export interface AppointmentModel {
	id?: number,
	pet_owner_id?: number,
	vet_id?: number,
	schedule_time?: Date,
	consultation_type?: CONSULTATION_TYPE,
	status?: APPOINTMENT_STATUS,
	started_at?: Date,
	ended_at?: Date,
	created_at?: Date,
}