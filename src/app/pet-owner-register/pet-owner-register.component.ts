import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-pet-owner-register',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule,
  ],
  templateUrl: './pet-owner-register.component.html',
  styleUrl: './pet-owner-register.component.scss'
})
export class PetOwnerRegisterComponent {

  onSubmit(form: NgForm) {
    const { Firstname, Lastname, Email, Username, Password, Confirmpassword } = form.value;
    if (!Firstname || !Lastname || !Email || !Username || !Password || !Confirmpassword) {
      alert('Please fill out all the Fields!');
      return;
    }

    if (Password !== Confirmpassword) {
      alert('Password does not Match!');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(Email)) {
      alert('Invalid Email Address!');
      return;
    }

    console.log('Forms', form.value);
  }
}
