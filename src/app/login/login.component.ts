import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';



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
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  submitted = false;

  constructor(private userService: UserService, private router: Router) { }
  ngOnInit(): void { }
  onSubmit(): void {
    this.submitted = true;

    this.userService.login(this.username, this.password).subscribe({
      next: () => {
        alert(`Welcome ${this.username}!`);
        // this.router.navigate(['kung saang dashboard dadalhin']);
      },
      error: (err) => {
        console.error('Login failed:', err);
        alert('Invalid username or password!');
      }
    });
  }
}