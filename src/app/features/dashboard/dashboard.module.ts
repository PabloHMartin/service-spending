import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { DashboardBodyComponent } from "./dashboard-body/dashboard-body.component";
import { DashboardCardComponent } from "./dashboard-card/dashboard-card.component";
import { SharedModule } from "../../shared/shared.module";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { StoreModule } from "@ngrx/store";
import { dashboardReducer } from "./redux/reducers";
import { EffectsModule } from "@ngrx/effects";
import { DashboardEffects } from "./redux/effects/dashboard.effects";

@NgModule({
  declarations: [DashboardComponent, DashboardBodyComponent, DashboardCardComponent],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
    StoreModule.forFeature("dashboard", dashboardReducer),
    EffectsModule.forFeature([DashboardEffects])
  ]
})
export class DashboardModule {}
