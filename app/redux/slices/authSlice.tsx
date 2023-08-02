import { getAuthUser } from "@/app/helper/services";
import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  userData: any;
  userToken: any;
}

const initialState: InitialState = {
  userData: getAuthUser(),
  userToken: getAuthUser()?.token,
};

const authSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUserData: (state: Draft<InitialState>, action: PayloadAction<any>) => ({
      ...state,
      userData: action.payload,
    }),
    setUserToken: (state: Draft<InitialState>, action: PayloadAction<any>) => ({
      ...state,
      userToken: action.payload,
    }),
  },
});

export const { setUserData, setUserToken } = authSlice.actions;

export default authSlice.reducer;
