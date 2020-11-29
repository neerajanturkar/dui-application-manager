import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: "root",
})
export class ApplicationService {
  constructor(private http: HttpClient) {}
  getApplication(id: any, token: any) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    });
    const url =
      environment.serverHostName +
      ":" +
      environment.serverPort +
      "/api/v1/application/" +
      id;
    return this.http.get(url, { headers: headers }).toPromise();
  }
  getUIProfile(id: any, token: any) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    });
    const url =
      environment.serverHostName +
      ":" +
      environment.serverPort +
      "/api/v1/uiProfile/" +
      id;
    return this.http.get(url, { headers: headers }).toPromise();
  }
  createNewApplication(data: any, token: any) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    });
    const url =
      environment.serverHostName +
      ":" +
      environment.serverPort +
      "/api/v1/application/";
    return this.http
      .post(url, JSON.stringify(data), { headers: headers })
      .toPromise();
  }
  createNewUIPRofile(data: any, token: any) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    });
    const url =
      environment.serverHostName +
      ":" +
      environment.serverPort +
      "/api/v1/uiProfile/";
    return this.http
      .post(url, JSON.stringify(data), { headers: headers })
      .toPromise();
  }
  updateUIProfile(id: any, data: any, token: any) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    });
    const url =
      environment.serverHostName +
      ":" +
      environment.serverPort +
      "/api/v1/uiProfile/" +
      id;
    return this.http
      .put(url, JSON.stringify(data), { headers: headers })
      .toPromise();
  }
}
