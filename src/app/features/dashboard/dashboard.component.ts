import { Component, OnInit } from "@angular/core";
import { ServiceSpendingService } from "./services/service-spending.service";
import { Observable } from "rxjs";
import { ServiceSpendDto } from "src/app/shared/models/Service-spendDTO";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  public spendingByService: Observable<Array<ServiceSpendDto>>;

  constructor(private readonly spendingDataService: ServiceSpendingService) {}

  ngOnInit() {
    this.spendingByService = this.spendingDataService.getAllServices();
  }
}
