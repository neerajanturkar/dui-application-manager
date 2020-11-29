import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./app-header.component.html",
  styleUrls: ["./app-header.component.css"],
})
export class AppHeaderComponent implements OnInit {
  constructor(public router: Router) {}
  showLogout: Boolean;
  ngOnInit() {
    const token = localStorage.getItem("token");
    this.showLogout = token ? true : false;
    const elem = document.querySelector(".sidenav");
    const options = {};
    M.Sidenav.init(elem, options);
  }
  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.router.navigate(["/home"]);
  }
}
