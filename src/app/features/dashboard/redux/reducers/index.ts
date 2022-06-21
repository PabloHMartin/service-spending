import { createReducer, on } from "@ngrx/store";
import { DashboardActions } from "../actions";

export interface DashboardState {
  data: any[];
  isLoading: boolean;
  isError: boolean;
}

export const initialDashboardState: DashboardState = {
  data: [],
  isLoading: false,
  isError: false
};

export const dashboardReducer = createReducer(initialDashboardState);
