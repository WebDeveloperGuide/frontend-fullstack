import { createAsyncThunk } from "@reduxjs/toolkit";
import { setLoading } from "../slices/notificationSlice";
import { setUserData } from "../slices/authSlice";
import { toast } from "react-toastify";
import { ToastObjects } from "../../util/toastObject";
import apiClient from "../../config/apiClient";

export const register = createAsyncThunk(
  "register",
  (_request: any, { dispatch }) => {}
);

export const loginUser = createAsyncThunk(
  "loginUser",
  async (_request: any, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const response = await apiClient().post(
        `http://localhost:5001/api/auth/login`,
        _request.data
      );

      dispatch(setLoading(false));
      if (response?.data) {
        localStorage.setItem("user_data", JSON.stringify(response?.data));
        dispatch(setUserData(response?.data));
        toast.success(
          response?.data?.message || "Login Successfully",
          ToastObjects
        );

        _request.callback();
      } else {
        toast.error(
          response?.data?.message || "Something went wrong",
          ToastObjects
        );
      }
    } catch (error: any) {
      dispatch(setLoading(false));
      toast.error(
        error?.response?.data?.message || "Something went wrong",
        ToastObjects
      );
    }
  }
);

export const logoutUser = createAsyncThunk(
  "logoutUser",
  async (_request: any, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const response = await apiClient().get(
        `http://localhost:5001/api/auth/logout`
      );

      if (response?.data) {
        localStorage.clear();
        toast.success(
          response?.data?.message || "Logout Succesfully",
          ToastObjects
        );
      }
      dispatch(setLoading(false));
      _request.callback();
    } catch (error: any) {
      dispatch(setLoading(false));
      toast.error(
        error?.response?.data?.message || "Something went wrong",
        ToastObjects
      );
    }
  }
);

export const getUserDetails = createAsyncThunk(
  "getUserDetails",
  async (_request: any, { dispatch }) => {
    try {
      const { user_id } = _request;

      dispatch(setLoading(true));
      const response = await apiClient().get(
        `http://localhost:5001/api/auth/profile/${user_id}`
      );

      console.log("response", response);

      dispatch(setLoading(false));
    } catch (error: any) {
      dispatch(setLoading(false));
      toast.error(
        error?.response?.data?.message || "Something went wrong",
        ToastObjects
      );
    }
  }
);
