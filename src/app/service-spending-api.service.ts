import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ServiceSpend } from "./service-spend";

@Injectable({
  providedIn: "root"
})
export class ServiceSpendingApiService {
  constructor(private readonly http: HttpClient) {}

  public get(): Observable<Array<ServiceSpend>> {
    return this.http.get<Array<ServiceSpend>>(`http://localhost:8080/spending/service`);
  }
}
