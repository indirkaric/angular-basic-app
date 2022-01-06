import { Injectable } from '@angular/core';
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  logout() {
    localStorage.removeItem('user')
  }

  saveToLocalStorage(user: User) {
    localStorage.setItem("user", JSON.stringify(user))
  }

  isLoggedIn() {
    const isLoggedIn = !!localStorage.getItem("user");
    return isLoggedIn
  }
}
