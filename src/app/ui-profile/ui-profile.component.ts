import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ApplicationService } from "../application.service";
@Component({
  selector: "app-ui-profile",
  templateUrl: "./ui-profile.component.html",
  styleUrls: ["./ui-profile.component.css"],
})
export class UiProfileComponent implements OnInit {
  uiProfileId: any;
  uiProfile: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private applicationService: ApplicationService
  ) {}

  async ngOnInit() {
    const token = localStorage.getItem("token");

    if (token) {
      this.uiProfileId = this.activatedRoute.snapshot.paramMap.get(
        "uiProfileId"
      );
      console.log(this.uiProfileId);
      try {
        const response = await this.applicationService.getUIProfile(
          this.uiProfileId,
          localStorage.getItem("token")
        );
        this.uiProfile = response["data"];
        console.log(this.uiProfile);
      } catch (error) {
        console.log(error);
        this.router.navigate(["/"]);
      }
    } else {
      this.router.navigate(["/"]);
    }
  }
  navigateBack() {
    const id = this.activatedRoute.snapshot.paramMap.get("id");
    this.router.navigate(["/application/" + id]);
  }
}
