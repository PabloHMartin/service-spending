import { createReducer, on } from "@ngrx/store";
import { ServiceSpendDto } from "src/app/shared/models/Service-spendDTO";
import { View } from "../../models/View";
import { DashboardActions } from "../actions";

export interface DashboardState {
  views: View[];
  services?: ServiceSpendDto[];
  isLoading: boolean;
  isError: boolean;
  activeView?: View;
}

export const initialDashboardState: DashboardState = {
  views: [],
  isLoading: false,
  isError: false
};

export const dashboardReducer = createReducer(
  initialDashboardState,
  on(DashboardActions.getViews, (state, action) => ({ ...state, isLoading: action.isLoading })),
  on(DashboardActions.getViewsLoadedSuccess, (state, action) => ({
    ...state,
    views: action.views,
    isLoading: action.isLoading,
    isError: action.isError
  })),
  on(DashboardActions.createNewView, (state, action) => ({ ...state, isLoading: action.isLoading })),
  on(DashboardActions.createNewSuccess, (state, action) => ({ ...state })),
  on(DashboardActions.getAllServices, state => ({ ...state })),
  on(DashboardActions.getAllServicesSuccess, (state, action) => ({ ...state, services: action.services })),
  on(DashboardActions.getViewById, (state, acgtion) => ({ ...state })),
  on(DashboardActions.setActiveView, (state, action) => ({ ...state, activeView: action.view }))
);
1;
