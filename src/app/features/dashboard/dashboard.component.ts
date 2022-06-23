import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSidenav } from "@angular/material";
import { Store } from "@ngrx/store";
import { DashboardState } from "./redux/reducers";
import { DashboardActions } from "./redux/actions";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  store$ = this.store.select("dashboard");
  @ViewChild("drawer", { static: true }) drawer: MatSidenav;

  constructor(private store: Store<{ dashboard: DashboardState }>) {}

  ngOnInit() {
    this.store.dispatch(DashboardActions.getViews({ isLoading: true }));
  }

  recieveMessage(ev: { name: string }) {
    this.store.dispatch(DashboardActions.createNewView({ viewName: ev.name, isLoading: true }));
    this.drawer.close();
  }
}
