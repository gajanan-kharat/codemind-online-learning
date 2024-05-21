import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-right',
  templateUrl: './login-right.component.html',
  styleUrls: ['./login-right.component.css']
})
export class LoginRightComponent implements OnInit {
  loginForm: FormGroup;
  signupForm: FormGroup;
  isLogin: boolean = true;
  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }
  toggleForm() {
    this.isLogin = !this.isLogin;
    if (this.isLogin) {
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/signup']);
    }
  }

  ngOnInit(): void {
  }
  onSubmitLogin(): void {
    if (this.loginForm.valid) {
      console.log('Login form submitted');
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  onSubmitSignup(): void {
    if (this.signupForm.valid) {
      console.log('Signup form submitted');
    } else {
      this.signupForm.markAllAsTouched();
    }
  }
}

