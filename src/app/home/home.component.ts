import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { toast, Modal } from "materialize-css";
import { AuthenticationService } from "../authentication.service";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  email: any;
  password: any;
  newEmail: any;
  newPassword: any;
  newPassword2: any;
  newName: any;

  error = false;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    const elem = document.querySelector(".tabs");
    const options = {};
    M.Tabs.init(elem, options);
  }
  login() {
    const loginData = {
      email: this.email,
      password: this.password,
    };
    this.authenticationService
      .userLogin(loginData)
      .then((response) => {
        localStorage.setItem("token", response["token"]);
        localStorage.setItem("user", JSON.stringify(response["data"]));
        this.router.navigate(["/application"]);

        toast({ html: "Login Successfull" });
      })
      .catch((error: HttpErrorResponse) => {
        console.log(JSON.stringify(error));
        // alert(error.error.message);
        toast({ html: "Login Failed : " + error.error.message });
      });
  }
  register() {
    if (this.newPassword !== this.newPassword2) {
      toast({ html: "Passwords do not match" });
    } else {
      const signupData = {
        email: this.newEmail,
        password: this.newPassword,
        name: this.newName,
        type: "user",
      };
      this.authenticationService.userSignUp(signupData).then((response) => {
        localStorage.setItem("token", response["token"]);
        localStorage.setItem("user", JSON.stringify(response["data"]));
        this.router.navigate(["/application"]);

        toast({ html: "Signup Successfull" });
      });
    }
  }
}
