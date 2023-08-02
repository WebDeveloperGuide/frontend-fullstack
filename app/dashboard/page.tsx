"use client";
import DashboardComponent from "../components/Dashboard";
import MainLayoutComponent from "../components/MainLayout";

export default function DashboardPage() {
  return <MainLayoutComponent pagecomponent={<DashboardComponent />} />;
}
