import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { MatToolbarModule } from "@angular/material";
import { DashboardBodyComponent } from "./dashboard-body/dashboard-body.component";
import { DashboardCardComponent } from "./dashboard-card/dashboard-card.component";
import { DashboardHeaderComponent } from "./dashboard-header/dashboard-header.component";
import { FlexModule } from "@angular/flex-layout";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [DashboardComponent, DashboardBodyComponent, DashboardCardComponent, DashboardHeaderComponent],
  imports: [CommonModule, MatToolbarModule, FlexModule, SharedModule],
  entryComponents: [DashboardComponent],
  exports: [DashboardComponent]
})
export class DashboardModule {}
