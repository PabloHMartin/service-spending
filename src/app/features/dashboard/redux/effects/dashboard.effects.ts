import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { DashboardActions } from "../actions";
import { catchError, concatMap, map, tap } from "rxjs/operators";
import { of } from "rxjs";
import { View } from "../../models/View";
import { ServiceSpendingService } from "../../services/service-spending.service";
import { Router } from "@angular/router";

@Injectable()
export class DashboardEffects {
  getViews$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DashboardActions.getViews),
      concatMap(action => this.serviceSpending.getAllViews()),
      map((views: View[]) =>
        DashboardActions.getViewsLoadedSuccess({ views: views, isLoading: false, isError: false })
      ),
      catchError(err => {
        return of(DashboardActions.getViewsLoadedError({ views: [], isLoading: false, isError: true }));
      })
    )
  );

  getViewById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DashboardActions.getViewById),
      concatMap((action: { id: number }) => this.serviceSpending.getViewById(action.id)),
      // tap(console.log),
      map((view: View) => DashboardActions.setActiveView({ view: view }))
    )
  );

  upateView$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DashboardActions.updateServicesInView),
      concatMap((action: { view: View }) => this.serviceSpending.updateView(action.view)),
      // tap(console.log),
      map(view => DashboardActions.getViewById({ id: view.id }))
    )
  );

  createNewView$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DashboardActions.createNewView),
      concatMap(action => this.serviceSpending.createView(action.viewName)),
      map(view => DashboardActions.getViews({ isLoading: true })),
      catchError(err => {
        return of(DashboardActions.createNewError({ isLoading: false, isError: true }));
      })
    )
  );

  getAllServices$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DashboardActions.getAllServices),
      concatMap(action => this.serviceSpending.getAllServices()),
      map(data => DashboardActions.getAllServicesSuccess({ services: data })),
      catchError(err => {
        return of(DashboardActions.getAllServicesError({ services: [] }));
      })
    )
  );

  constructor(private actions$: Actions, private serviceSpending: ServiceSpendingService, private router: Router) {}
}
