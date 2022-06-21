import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ServiceSpendingApiService } from "../../../shared/services/service-spending-api.service";
import { View } from "../models/View";
import { SpendingFactoryService } from "../utils/spending-factory.service";
import { combineLatest } from "rxjs";
import { map, tap } from "rxjs/operators";
import { ServiceSpendDto } from "src/app/shared/models/Service-spendDTO";

@Injectable({
  providedIn: "root"
})
export class ServiceSpendingService {
  private services$: Observable<ServiceSpendDto[]> = this.spendingDataApi.getAllServices();

  constructor(
    protected spendingDataApi: ServiceSpendingApiService,
    protected spendingFactory: SpendingFactoryService
  ) {}

  public getAllViews(): Observable<Array<View>> {
    const views$ = this.spendingDataApi.getAllViews();

    return combineLatest([this.services$, views$]).pipe(
      map(([services, views]) => this.spendingFactory.build(services, views))
    );
  }

  getAllServices(): Observable<ServiceSpendDto[]> {
    return this.services$;
  }

  createView(view: View): void {
    this.spendingDataApi.createView(this.spendingFactory.viewToViewDto(view));
  }

  updateView(view: View): void {
    this.spendingDataApi.updateView(this.spendingFactory.viewToViewDto(view));
  }
}
