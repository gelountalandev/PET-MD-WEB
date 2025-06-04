import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from '../services/user/user.service';
import { USER_TYPE } from '../app.constants';

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
export class VetRegisterComponent implements OnInit {
  vetRegisterModel = {
    user: {
      email: '',
      username: '',
      password: '',
      user_type: USER_TYPE.VET
    },
    vet: {
      name: '',
      clinic_name: '',
      clinic_location: ''
    }
  };
  submitted = false

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void { }
  registerVet(): void {
    const vetRegisterModel = {
      user: {
        email: this.vetRegisterModel.user?.email,
        username: this.vetRegisterModel.user?.username,
        password: this.vetRegisterModel.user?.password,
        user_type: this.vetRegisterModel.user?.user_type ?? USER_TYPE.VET,
      },
      vet: {
        // user_id: this.vetRegisterModel.user?.id,
        clinic_name: this.vetRegisterModel.vet?.clinic_name,
        name: this.vetRegisterModel.vet?.name,
        clinic_location: this.vetRegisterModel.vet?.clinic_location,
        is_active: true,
      }
    }

    this.userService.vetRegister(vetRegisterModel).subscribe({
      next: (response) => {
        console.log(response);
        this.submitted = true;
        // this.router.navigate(['/register']);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  };
}