import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Request } from '@/types/request';
import { Route } from '@/types/route';

type RouteSliceState = {
  routes: Route[];
  isLoading: boolean;
  error: string | null;
};

const initialState: RouteSliceState = {
  routes: [],
  isLoading: false,
  error: null,
};

const routeSlice = createSlice({
  name: 'route',
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    fetchRoutesRequest(state, _action: PayloadAction<Request>) {
      state.isLoading = true;
      state.error = null;
    },
    fetchRoutesSuccess(state, action: PayloadAction<Route[]>) {
      state.isLoading = false;
      state.error = null;
      state.routes = action.payload;
    },
    fetchRoutesReject(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
      state.routes = [];
    },
  },
});

export const { fetchRoutesSuccess, fetchRoutesReject, fetchRoutesRequest } = routeSlice.actions;
export { routeSlice };
