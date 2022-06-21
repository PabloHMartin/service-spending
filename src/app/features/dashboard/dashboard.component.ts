import { Component, OnInit } from "@angular/core";
import { ServiceSpendingService } from "./services/service-spending.service";
import { Observable } from "rxjs";
import { ServiceSpend } from "../../shared/models/service-spend";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  public spendingByService: Observable<Array<ServiceSpend>>;

  constructor(private readonly spendingDataService: ServiceSpendingService) {}

  ngOnInit() {
    this.spendingByService = this.spendingDataService.getSpendingByService();
  }
}
