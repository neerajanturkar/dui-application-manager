import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ApplicationService } from "../application.service";
import { toast, Modal } from "materialize-css";
@Component({
  selector: "app-ui-profile",
  templateUrl: "./ui-profile.component.html",
  styleUrls: ["./ui-profile.component.css"],
})
export class UiProfileComponent implements OnInit {
  uiProfileId: any;
  uiProfile: any;
  instance: any;
  instanceConfrimation: any;
  profileModalType: any;
  profileModalName: any;
  profileModalDefault: any;
  showRadio: Boolean;
  showInput: Boolean;
  elementToDelete: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private applicationService: ApplicationService
  ) {}

  async ngOnInit() {
    const elems = document.querySelector(".modal");
    const elemsConfirmation = document.querySelector(".conformation");
    this.instance = M.Modal.init(elems);
    this.instanceConfrimation = M.Modal.init(elemsConfirmation);
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
  createNewUIProfile(event) {
    this.profileModalType = "BOOLEAN";
    this.profileModalName = "";
    this.profileModalDefault = "";
    this.showRadio = true;
    this.showInput = false;
    this.instance.open();
  }
  changeInputType() {
    if (this.profileModalType === "BOOLEAN") {
      this.showRadio = true;
      this.showInput = false;
    } else {
      this.showRadio = false;
      this.showInput = true;
    }
  }
  addElementToModel(event) {
    if (this.profileModalType === "BOOLEAN") {
      const value = document.querySelector(
        'input[name="defaultBoolean"]:checked'
      ).value;
      this.profileModalDefault = value === "true" ? true : false;
      console.log(value);
    } else if (this.profileModalType === "INTEGER") {
      this.profileModalDefault = parseInt(this.profileModalDefault);
    }
    const newElement = {
      name: this.profileModalName,
      type: this.profileModalType,
      default: this.profileModalDefault,
    };
    this.uiProfile.profile.push(newElement);
    console.log(this.uiProfile.profile);
  }
  deleteElement(event) {
    this.instanceConfrimation.open();
    this.elementToDelete = event.path[1].id;
  }
  confirmDelete() {
    this.uiProfile.profile.splice(this.elementToDelete, 1);
    console.log(this.uiProfile.profile);
  }
  updateUIProfile() {
    this.applicationService
      .updateUIProfile(
        this.uiProfileId,
        this.uiProfile,
        localStorage.getItem("token")
      )
      .then((response) => {
        toast({ html: "UI Profile updated successfully" });
      })
      .catch((e) => {
        toast({ html: "Update Failed" });
      });
  }
}
