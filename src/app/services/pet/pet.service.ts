import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../../app.constants';
import { PetModel } from '../../models/pet.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(
    private http: HttpClient,
  ) { }

  createPet(petModel: PetModel): Observable<PetModel> {
    return this.http.post<PetModel>(`${BASE_URL}/pets`, petModel)
  }

  getPets(): Observable<PetModel[]> {
    return this.http.get<PetModel[]>(`${BASE_URL}/pets`)
  }

  getPet(id:number):Observable<PetModel[]> {
    return this.http.get<PetModel[]>(`${BASE_URL}/pets/${id}`)
  }

  updatePet(id:number, petModel: PetModel): Observable<PetModel> {
    return this.http.patch<PetModel>(`${BASE_URL}/pets/${id}`, petModel)
  }

  deletePet(id:number): Observable<PetModel> {
    return this.http.delete<PetModel>(`${BASE_URL}/pets/${id}`);
  }
}