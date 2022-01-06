import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {User} from "../../models/User";
import {Error} from "../../constants/error";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  passwordRepeat: string
  error: string
  text: string
  isLoggedIn: boolean
  users: User[] = [];

  constructor(private authService:AuthService,
              private router : Router,
              private userService: UserService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.text = this.isLoggedIn ? 'Logout' : 'Login';
    this.userService.getUsers().subscribe( (users: User[]) => (this.users = users));
  }

  onLoginLogout() {
    if (this.isLoggedIn) {
      this.authService.logout();
      this.text = 'Login';
      this.isLoggedIn = false;
      return
    }

    this.setErrors();

    if (this.checkIfErrorExist())
      return

    const user : User = this.findByUsername();

    if (!user) {
      this.error = Error.USER_NOT_FOUND;
      return
    }

    if (user.password != this.password) {
      this.error = Error.INCORRECT_PASSWORD;
      return
    }

    this.authService.saveToLocalStorage(user);
    this.router.navigateByUrl('/home');
  }

  onSignIn() {
    if (this.isLoggedIn) {
      this.authService.logout();
      this.text = 'Login';
      this.isLoggedIn = false;
    }

    this.setErrors()

    if (this.checkIfErrorExist())
      return

    const user : User = this.findByUsername();
    if (user) {
      this.error = Error.USER_EXISTS;
      return
    }

    const newUser = {
      username: this.username,
      password: this.password
    };

    this.userService.addUser(newUser).subscribe();
    this.authService.saveToLocalStorage(newUser);
    this.router.navigateByUrl('/home');
  }

  setErrors() {
    this.error = ''
    if (this.username == null) {
      this.error = Error.EMPTY_EMAIL;
      return
    }

    if ((!this.username.includes('@') || !this.username.includes('.com'))) {
      this.error = Error.INVALID_EMAIL;
      return
    }

    if (this.password == null) {
      this.error = Error.EMPTY_PASSWORD;
      return
    }

    if (this.password.length < 8) {
      this.error = Error.PASSWORD_SIZE_NOT_VALID;
      return
    }

    if (this.password != this.passwordRepeat) {
      this.error = Error.NO_MATCHING_FOR_PASSWORDS;
      return
    }
  }

  checkIfErrorExist() {
    return this.error.length !== 0;
  }

  findByUsername() {
    return this.users.filter((user) => user.username == this.username)[0];
  }
}

