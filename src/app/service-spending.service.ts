import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ServiceSpendingApiService } from "./service-spending-api.service";
import { ServiceSpend } from "./service-spend";

@Injectable({
  providedIn: "root"
})
export class ServiceSpendingService {
  constructor(protected spendingDataApi: ServiceSpendingApiService) {}

  public getSpendingByService(): Observable<Array<ServiceSpend>> {
    return this.spendingDataApi.get();
  }
}
