"use client";
import { useEffect } from "react";

const requireAuth = () => {
  const loggedIn = localStorage.getItem("user_data");

  if (!loggedIn) {
    window.location.href = "/login";
  }
};

export const AuthPageInvisible = () => {
  useEffect(() => {
    requireAuth();
  }, []);

  return <></>;
};
