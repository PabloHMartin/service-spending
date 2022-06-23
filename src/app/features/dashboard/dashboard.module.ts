import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { SharedModule } from "../../shared/shared.module";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { StoreModule } from "@ngrx/store";
import { dashboardReducer } from "./redux/reducers";
import { EffectsModule } from "@ngrx/effects";
import { DashboardEffects } from "./redux/effects/dashboard.effects";
import { DashboardBodyComponent } from "./components/dashboard-body/dashboard-body.component";
import { DashboardCardComponent } from "./components/dashboard-card/dashboard-card.component";
import { ViewCardComponent } from "./components/view-card/view-card.component";
import { AddViewCardComponent } from "./components/add-view-card/add-view-card.component";
import { FormNewViewComponent } from "./components/form-new-view/form-new-view.component";
import { ViewDashboardComponent } from './pages/view-dashboard/view-dashboard.component';
import { DragAndDropComponent } from './components/drag-and-drop/drag-and-drop.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardBodyComponent,
    DashboardCardComponent,
    ViewCardComponent,
    AddViewCardComponent,
    FormNewViewComponent,
    ViewDashboardComponent,
    DragAndDropComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
    StoreModule.forFeature("dashboard", dashboardReducer),
    EffectsModule.forFeature([DashboardEffects])
  ]
})
export class DashboardModule {}
