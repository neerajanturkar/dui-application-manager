import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "uiProfilePipe" })
export class UIProfilePipe implements PipeTransform {
  transform(value: String): String {
    return value === "web" ? "Web Application" : "Mobile Application";
  }
}
