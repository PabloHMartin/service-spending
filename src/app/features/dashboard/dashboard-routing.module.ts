import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { ViewDashboardComponent } from "./pages/view-dashboard/view-dashboard.component";

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "dashboard/:id", component: ViewDashboardComponent },
  { path: "", redirectTo: "/dashboard", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
