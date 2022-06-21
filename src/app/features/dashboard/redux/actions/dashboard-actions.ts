import { createAction, props } from "@ngrx/store";
import { DashboardState } from "../reducers";

export const getData = createAction("[Dashboard Page] Get data", props<DashboardState>());
export const getDataLoadedSuccess = createAction("[Dashboard Effect] data loaded Success", props<DashboardState>());
export const getDataLoadedError = createAction("[Dashboard Effect] data loaded Error", props<DashboardState>());
