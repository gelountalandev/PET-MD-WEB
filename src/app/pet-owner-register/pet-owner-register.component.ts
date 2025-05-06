import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-pet-owner-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pet-owner-register.component.html',
  styleUrl: './pet-owner-register.component.scss'
})
export class PetOwnerRegisterComponent {

  onSubmit(form: NgForm){
    console.log('Forms', form.value);
  }
}
