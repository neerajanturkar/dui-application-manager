import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApplicationService } from "../application.service";
import { v4 as uuidv4 } from "uuid";
@Component({
  selector: "app-application",
  templateUrl: "./application.component.html",
  styleUrls: ["./application.component.css"],
})
export class ApplicationComponent implements OnInit {
  applications: any;
  newApplicationModal: any;
  newApplicationName: any;
  constructor(
    private router: Router,
    private applicationService: ApplicationService
  ) {}

  ngOnInit() {
    const elems = document.querySelector(".modal");
    this.newApplicationModal = M.Modal.init(elems);
    const user = localStorage.getItem("user");
    this.applications = JSON.parse(user)["applications"];
  }

  createNewApplication(event) {
    console.log("new application");
    console.log(event);
    this.newApplicationModal.open();
  }

  viewApplication(event) {
    const id = event.path[1].id.split("_")[1];
    this.router.navigate(["/application/" + id]);
  }
  confirmCreateNewApplication() {
    let data = {
      name: this.newApplicationName,
      secret: uuidv4(),
    };
    this.applicationService
      .createNewApplication(data, localStorage.getItem("token"))
      .then((response) => {
        this.router.navigate(["/application/" + response["data"]["_id"]]);
        console.log(response["data"]["_id"]);
      })
      .catch((e) => {
        console.log(e);
        this.router.navigate(["/home"]);
      });
  }
}
