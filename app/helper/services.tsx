export const getAuthUser = () =>
  typeof window !== "undefined" && localStorage.getItem("user_data")
    ? JSON.parse(localStorage.getItem("user_data") as string)
    : null;
