import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ApplicationService } from "../application.service";

@Component({
  selector: "app-application-detail",
  templateUrl: "./application-detail.component.html",
  styleUrls: ["./application-detail.component.css"],
})
export class ApplicationDetailComponent implements OnInit {
  id: any;
  application: any;
  uiProfiles: any;
  applicationDetail: any;
  newUIProfileModal: any;
  showURL: any;

  newUIProfileName: any;
  newUIProfileType: any;
  newUIProfileURL: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private applicationService: ApplicationService
  ) {}

  async ngOnInit() {
    const token = localStorage.getItem("token");
    const elems = document.querySelector(".modal");
    this.newUIProfileModal = M.Modal.init(elems);
    if (token) {
      this.id = this.activatedRoute.snapshot.paramMap.get("id");
      console.log(this.id);
      try {
        this.applicationDetail = await this.applicationService.getApplication(
          this.id,
          localStorage.getItem("token")
        );
        this.application = this.applicationDetail["data"]["application"];
        this.uiProfiles = this.applicationDetail["data"]["uiProfiles"];
        console.log(this.uiProfiles);
      } catch (error) {
        console.log(error);
        this.router.navigate(["/"]);
      }
    } else {
      this.router.navigate(["/"]);
    }
  }
  viewUiProfile(event) {
    const uiPfrofileId = event.path[1].id.split("_")[1];
    this.router.navigate([
      "/application/" + this.id + "/uiProfile/" + uiPfrofileId,
    ]);
  }
  navigateBack() {
    this.router.navigate(["/application"]);
  }
  createNewUIProfile() {
    this.newUIProfileType = "web";
    this.showURL = true;
    this.newUIProfileModal.open();
  }
  changeUIProfileType() {
    if (this.newUIProfileType === "web") {
      this.showURL = true;
    } else {
      this.showURL = false;
    }
  }
  confirmCreateNewUIProfile() {
    const data = {
      applicationId: this.id,
      url: this.newUIProfileURL,
      default: false,
      name: this.newUIProfileName,
      type: this.newUIProfileType,
    };
    this.applicationService
      .createNewUIPRofile(data, localStorage.getItem("token"))
      .then((response) => {
        console.log(response);
        this.router.navigate([
          "/application/" +
            response["data"]["applicationId"] +
            "/uiProfile/" +
            response["data"]["_id"],
        ]);
      })
      .catch((e) => {
        console.log(e);
      });
  }
}
