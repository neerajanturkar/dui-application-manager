import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { ApplicationComponent } from "./application/application.component";
import { ApplicationDetailComponent } from "./application-detail/application-detail.component";
import { UiProfileComponent } from "./ui-profile/ui-profile.component";
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "application", component: ApplicationComponent },
  { path: "application/:id", component: ApplicationDetailComponent },
  {
    path: "application/:id/uiProfile/:uiProfileId",
    component: UiProfileComponent,
  },
];
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppRoutingModule {}
