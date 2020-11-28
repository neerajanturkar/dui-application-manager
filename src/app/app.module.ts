import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { AppHeaderComponent } from "./app-header/app-header.component";
import { HomeComponent } from "./home/home.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { ApplicationComponent } from "./application/application.component";
import { ApplicationDetailComponent } from "./application-detail/application-detail.component";
import { BooleanPipe } from "./pipes/boolean.pipe";
import { UIProfilePipe } from "./pipes/uiProfileType.pipe";
import { UiProfileComponent } from './ui-profile/ui-profile.component';
@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    HomeComponent,
    ApplicationComponent,
    ApplicationDetailComponent,
    BooleanPipe,
    UIProfilePipe,
    UiProfileComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
