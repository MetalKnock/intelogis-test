import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { REQUESTS } from '@/constants/request';
import { Request } from '@/types/request';

type RequestSliceState = {
  requests: Request[];
  selectedRequest: Request | null;
  selectedRequestKey: string | null;
};

const initialState: RequestSliceState = {
  requests: REQUESTS,
  selectedRequest: null,
  selectedRequestKey: null,
};

const requestSlice = createSlice({
  name: 'request',
  initialState,
  reducers: {
    setSelectedRequest(state, action: PayloadAction<Request>) {
      state.selectedRequest = action.payload;
      state.selectedRequestKey = action.payload.key;
    },
  },
});

export const { setSelectedRequest } = requestSlice.actions;
export { requestSlice };
