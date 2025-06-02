import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppointmentModel } from '../../models/appointment.model';
import { BASE_URL } from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(
    private http: HttpClient
  ) { }

  createAppointment(appointmentModel: AppointmentModel): Observable<AppointmentModel> {
    return this.http.post<AppointmentModel>(`${BASE_URL}/appointment`, appointmentModel)
  }

  getAppointments(): Observable<AppointmentModel[]> {
    return this.http.get<AppointmentModel[]>(`${BASE_URL}/appointment`)
  }

  getAppointment(id: number): Observable<AppointmentModel> {
    return this.http.get<AppointmentModel>(`${BASE_URL}/appointment/${id}`)
  }
}