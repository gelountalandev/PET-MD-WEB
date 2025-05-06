import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PetOwnerRegisterComponent } from './pet-owner-register/pet-owner-register.component';

export const routes: Routes = [
    { path: '', component: LoginComponent},
    {path: 'register', component: PetOwnerRegisterComponent}
];
