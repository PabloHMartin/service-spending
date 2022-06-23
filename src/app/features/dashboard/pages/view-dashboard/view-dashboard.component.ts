import { CdkDragDrop, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, of, Subject, Subscription } from "rxjs";
import { map, tap, takeUntil } from "rxjs/operators";
import { ServiceSpendDto } from "src/app/shared/models/Service-spendDTO";
import { View } from "../../models/View";
import { DashboardActions } from "../../redux/actions";
import { DashboardState } from "../../redux/reducers";

@Component({
  selector: "app-view-dashboard",
  templateUrl: "./view-dashboard.component.html",
  styleUrls: ["./view-dashboard.component.scss"]
})
export class ViewDashboardComponent implements OnInit, OnDestroy {
  id: number;
  param: Observable<string> = this.route.params.pipe(map(p => p.id));
  view: View;
  sub: Subscription;
  viewServices: ServiceSpendDto[] = [];
  availableServices: ServiceSpendDto[] = [];
  private _unsubscribe: Subject<void> = new Subject<void>();

  constructor(private store: Store<{ dashboard: DashboardState }>, private route: ActivatedRoute) {}

  ngOnInit() {
    this.param
      .pipe(
        tap(val => this.store.dispatch(DashboardActions.getViewById({ id: Number(val) }))),
        takeUntil(this._unsubscribe)
      )
      .subscribe();
    this.store.dispatch(DashboardActions.getAllServices());
    this.store
      .select("dashboard")
      .pipe(takeUntil(this._unsubscribe))
      .subscribe(data => {
        if (data.activeView && data.services) {
          this.view = data.activeView;
          this.viewServices = [...data.activeView.services];

          this.availableServices = [...data.services].filter(val => {
            return !this.viewServices.find(val2 => {
              return val.service === val2.service;
            });
          });
        }
      });
  }

  ngOnDestroy(): void {
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }

  buildUpdatedView(): View {
    return {
      id: this.view.id,
      name: this.view.name,
      services: this.viewServices
    };
  }

  dropMultiList(event: CdkDragDrop<string[]>) {
    if (event.previousContainer == event.container) {
      moveItemInArray(this.viewServices, event.previousIndex, event.currentIndex);
      this.store.dispatch(DashboardActions.updateServicesInView({ view: this.buildUpdatedView() }));
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      this.store.dispatch(DashboardActions.updateServicesInView({ view: this.buildUpdatedView() }));
    }
  }
}
