import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../models/User";
import {Observable} from "rxjs";
import {RequestHelper} from "../helper/request.helper";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiBaseUrl = 'http://localhost:3004/users'

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiBaseUrl)
  }

  addUser(user:User): Observable<User> {
    return this.http.post<User>(this.apiBaseUrl, user, RequestHelper.httpOptions)
  }
}
