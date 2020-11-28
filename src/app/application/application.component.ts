import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApplicationService } from "../application.service";
@Component({
  selector: "app-application",
  templateUrl: "./application.component.html",
  styleUrls: ["./application.component.css"],
})
export class ApplicationComponent implements OnInit {
  applications: any;
  constructor(
    private router: Router,
    private applicationService: ApplicationService
  ) {}

  ngOnInit() {
    const user = localStorage.getItem("user");
    this.applications = JSON.parse(user)["applications"];
  }

  createNewApplication(event) {
    console.log("new application");
    console.log(event);
  }

  viewApplication(event) {
    const id = event.path[1].id.split("_")[1];
    this.router.navigate(["/application/" + id]);
  }
}
