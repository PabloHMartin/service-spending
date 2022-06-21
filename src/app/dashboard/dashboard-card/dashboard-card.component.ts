import { Component, Input } from "@angular/core";

@Component({
  selector: "app-dashboard-card",
  templateUrl: "./dashboard-card.component.html",
  styleUrls: ["./dashboard-card.component.scss"]
})
export class DashboardCardComponent {
  @Input() public name: string;
  @Input() public spend: number;
}
