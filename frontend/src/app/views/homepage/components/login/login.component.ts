import {Component, EventEmitter, Inject, Output} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../../../../services/auth.service";
import {Router} from '@angular/router';
import {MatSnackBar} from "@angular/material/snack-bar";
import {LoginCredentials} from "../../../../model/LoginCredentials";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() switchForm = new EventEmitter();

  formGroup = this._formBuilder.group({
    emailFormControl: ['email', [Validators.required, Validators.email]],
    passwordFormControl: ['password', [Validators.required]]
  })

  hide = true;

  email = "";
  password = "";
  code = "";
  loginFailed = false;

  constructor(@Inject(MatSnackBar) private _snackBar: MatSnackBar, private _formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
  }

  switchToRegisterForm() {
    this.switchForm.emit();
  }

  login() {
    let loginCredentials: LoginCredentials = {
      email: this.email,
      password: this.password,
      code: this.code
    }
    this.authService.login(loginCredentials).subscribe({
      next: (loginResponse) => {
        console.log(loginResponse)
        localStorage.setItem('userRole', loginResponse.userRole);
        localStorage.setItem('token', "Bearer " + loginResponse.token.accessToken);
        this.router.navigate(['/hotels']);
        this.loginFailed = false;
      }, error: () => {
        this.loginFailed = true;
      }
    })
  }

  openSnack(message: string) {
    this._snackBar.open(message, '', {
      duration: 3000,
      panelClass: ['snack-bar']
    })
  }

  onVerificationCodeChange(code: string[]) {
    this.code = code.join("")
  }
}
