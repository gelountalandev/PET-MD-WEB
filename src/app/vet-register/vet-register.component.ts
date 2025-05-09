import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-vet-register',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule,
  ],
  templateUrl: './vet-register.component.html',
  styleUrl: './vet-register.component.scss'
})
export class VetRegisterComponent {
  onSubmit(form: NgForm){
    console.log('Forms', form.value);
  }
}
