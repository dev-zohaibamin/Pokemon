import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { APP_CONSTANTS } from 'src/app/constants/app.contants';
import { AuthService } from 'src/app/services/auth.service';
import { SnackBarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackbar: SnackBarService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  /**
   * Error Handlign
   * @param control
   * @param error
   * @returns
   */
  errorHandling = (control: string, error: string) => {
    return this.loginForm.controls[control].hasError(error);
  };

  /**
   * on Submit email & password
   */
  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      if (
        email === APP_CONSTANTS.login.email &&
        password === APP_CONSTANTS.login.password
      ) {
        localStorage.setItem(
          'token',
          JSON.stringify(this.authService.generateRandomToken(50))
        );
        setTimeout(() => {
          this.snackbar.showMessage('Logined Success', true);
          this.router.navigate(['/home']);
        }, 1500);
      } else this.snackbar.showMessage('Email & Password is wrong..', true);
    }
  }
}
