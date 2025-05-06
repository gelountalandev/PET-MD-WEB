import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule,RouterModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username = '';
  password = '';

  onSubmit(): void{
    console.log('username', this.username);
    console.log('password', this.password);
    alert(`Welcome ${this.username}!`);
  }

}
