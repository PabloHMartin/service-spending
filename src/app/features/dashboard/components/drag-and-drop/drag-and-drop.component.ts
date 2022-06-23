import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { Component, Input, OnChanges, OnInit } from "@angular/core";
import { ServiceSpendDto } from "src/app/shared/models/Service-spendDTO";
import { ServiceSpend } from "../../models/service-spend";
import { View } from "../../models/View";
import { DashboardCardComponent } from "../dashboard-card/dashboard-card.component";

@Component({
  selector: "app-drag-and-drop",
  templateUrl: "./drag-and-drop.component.html",
  styleUrls: ["./drag-and-drop.component.scss"]
})
export class DragAndDropComponent implements OnInit {
  @Input() view: View;
  @Input() services: ServiceSpendDto[];

  viewC: View;

  constructor() {}

  ngOnInit() {
    if (this.view) {
      this.viewC = { ...this.view };
    }
  }

  drop(event: CdkDragDrop<ServiceSpendDto>) {
    moveItemInArray(this.viewC.services, event.previousIndex, event.currentIndex);
  }
}
