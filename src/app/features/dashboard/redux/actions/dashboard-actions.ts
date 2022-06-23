import { createAction, props } from "@ngrx/store";
import { ServiceSpendDto } from "src/app/shared/models/Service-spendDTO";
import { ViewDto } from "src/app/shared/models/viewDTO";
import { View } from "../../models/View";
import { DashboardState } from "../reducers";

export const getViews = createAction("[Dashboard Page] Get data", props<{ isLoading: boolean }>());
export const getViewsLoadedSuccess = createAction("[Dashboard Effect] data loaded Success", props<DashboardState>());
export const getViewsLoadedError = createAction("[Dashboard Effect] data loaded Error", props<DashboardState>());

export const createNewView = createAction(
  "[Dashboard Page] create new view",
  props<{ viewName: string; isLoading: boolean }>()
);
export const createNewSuccess = createAction("[Dashboard Page] create new view");
export const createNewError = createAction(
  "[Dashboard Page] create new view",
  props<{ isLoading: boolean; isError: boolean }>()
);
export const getAllServices = createAction("[View Page] Get services");
export const getAllServicesSuccess = createAction(
  "[Dashboard Effect] Get services success",
  props<{ services: ServiceSpendDto[] }>()
);
export const getAllServicesError = createAction(
  "[Dashboard Effect] Get services error",
  props<{ services: ServiceSpendDto[] }>()
);

export const getViewById = createAction("[View Page] get view by id", props<{ id: number }>());
export const getViewByIdSuccess = createAction("[Dashboard Effect] get view by success", props<{ view: View }>());
export const setActiveView = createAction("[Dashboard Effect] update active view", props<{ view: View }>());

export const updateServicesInView = createAction("[View Page] Update serives in view", props<{ view: View }>());
