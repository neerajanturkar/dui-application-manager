import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  constructor(private http: HttpClient, private router: Router) {}
  userLogin(loginData: any) {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http
      .post(
        environment.serverHostName + ":5000/api/v1/user/login",
        JSON.stringify(loginData),
        { headers: headers }
      )
      .toPromise();
  }
  userSignUp(signupData: any) {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http
      .post(
        environment.serverHostName + ":5000/api/v1/user/signup",
        JSON.stringify(signupData),
        { headers: headers }
      )
      .toPromise();
  }
}
