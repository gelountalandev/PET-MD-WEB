import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PetOwnerRegisterModel } from '../../models/pet_owner_register.model';
import { Observable } from 'rxjs';
import { BASE_URL } from '../../app.constants';
import { VetRegisterModel } from '../../models/vet_register.model';
import { VetModel } from '../../models/vet.model';
import { UserModel } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  petOwnerRegister(petOwnerRegisterModel: PetOwnerRegisterModel): Observable<PetOwnerRegisterModel> {
    return this.http.post<PetOwnerRegisterModel>(`${BASE_URL}/users/register/pet-owner`, petOwnerRegisterModel)
  }

  vetRegister(vetRegisterModel: VetRegisterModel): Observable<VetRegisterModel> {
    return this.http.post<VetRegisterModel>(`${BASE_URL}/users/register/vet`, vetRegisterModel)
  }

  login(username: string, password: string): Observable<UserModel> {
    return this.http.post<UserModel>(`${BASE_URL}/users/login`, { username, password })
  }

  getVets(): Observable<VetModel[]> {
    return this.http.get<VetModel[]>(`${BASE_URL}/users`)
  }
}