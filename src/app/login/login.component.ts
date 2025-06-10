import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage/local-storage.service';


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {

  username = '';
  password = '';
  submitted = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private localStorageService: LocalStorageService,
  ) { }

  onSubmit(): void {
    this.submitted = true;

    this.userService.login(this.username, this.password).subscribe({
      next: (response) => {
        this.localStorageService.saveData('session', response);
        alert(`Welcome ${this.username}!`);
        this.router.navigate(['/create-pet']);
      },
      error: (err) => {
        console.error('Login failed:', err);
        alert('Invalid username or password!');
      }
    });
  }
}