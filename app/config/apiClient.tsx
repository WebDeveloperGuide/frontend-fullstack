import axios from "axios";
import Config from "./config";

const baseURL = Config.API_URL;
// const userData = localStorage.getItem("user_data")
//   ? JSON.parse(localStorage.getItem("user_data") ?? "")
//   : {};

const apiClient = (isFormData?: boolean) => {
  const headers: any = {
    "Access-Control-Allow-Origin": "*",
  };
  if (isFormData) {
    Object.assign(headers, { "content-type": "multipart/form-data" });
  }

  /* if (Object.keys(userData).length > 0) {
    headers.Authorization = `Bearer ${userData?.token}`;
  } */
  const axiosApiInstance = axios.create({
    baseURL,
    withCredentials: true,
    headers,
  });

  // Response interceptor for API calls
  axiosApiInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    async function (error) {
      const originalRequest = error.config;
      if (
        (error.response.status === 403 || error.response.status === 401) &&
        !originalRequest._retry
      ) {

        originalRequest._retry = true;
        const tokenResponse: any = await axios
          .get("http://localhost:5001/api/auth/refresh-token", { withCredentials: true })
          .then(function (response) {
            console.log(response);
          });
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + tokenResponse?.accessToken;
        return axiosApiInstance(originalRequest);
      }
      return Promise.reject(error);
    }
  );
  return axiosApiInstance;
};

export default apiClient;
