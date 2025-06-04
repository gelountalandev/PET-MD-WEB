import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConsultationModel } from '../../models/consultation.model';
import { Observable } from 'rxjs';
import { BASE_URL } from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {

  constructor(
    private http:HttpClient,
  ) { }

  createConsultation(consultationModel: ConsultationModel): Observable<ConsultationModel> {
    return this.http.post<ConsultationModel>(`${BASE_URL}/consultation`, consultationModel)
  }

  getConsultations(): Observable<ConsultationModel[]> {
    return this.http.get<ConsultationModel[]>(`${BASE_URL}/consultation`)
  }

  getConsultation(id:number): Observable<ConsultationModel> {
    return this.http.get<ConsultationModel>(`${BASE_URL}/consultation/${id}`)
  }
}
