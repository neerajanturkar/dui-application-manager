import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-application",
  templateUrl: "./application.component.html",
  styleUrls: ["./application.component.css"],
})
export class ApplicationComponent implements OnInit {
  applications: any;
  constructor() {}

  ngOnInit() {
    const user = localStorage.getItem("user");
    this.applications = JSON.parse(user)["applications"];
  }
}
