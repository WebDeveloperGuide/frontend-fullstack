import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  message: null | string;
  status: null | boolean;
  type: null | string;
  loading: boolean;
}

const initialState: InitialState = {
  message: null,
  status: null,
  type: null,
  loading: false,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    notificationFail: (
      state: Draft<InitialState>,
      action: PayloadAction<string>
    ) => ({
      ...state,
      status: false,
      message: action.payload,
    }),
    notificationSuccess: (
      state: Draft<InitialState>,
      action: PayloadAction<string>
    ) => ({
      ...state,
      status: true,
      message: action.payload,
    }),
    notificationClear: (state: Draft<InitialState>) => ({
      ...state,
      message: null,
      status: null,
      type: null,
    }),
    setLoading: (state: Draft<InitialState>, action: PayloadAction<any>) => ({
      ...state,
      loading: action.payload,
    }),
  },
});

export const {
  notificationFail,
  notificationSuccess,
  notificationClear,
  setLoading,
} = notificationSlice.actions;

export default notificationSlice.reducer;
