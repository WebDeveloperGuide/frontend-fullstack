import { useEffect } from "react";
import { initFlowbite } from "flowbite";
import dynamic from 'next/dynamic';
import SidebarComponent from "../Sidebar";
import { AuthPageInvisible } from "@/lib/protect-page";

const TopbarComponent = dynamic(() => import('../Topbar'), { ssr: false })


function MainLayoutComponent({ pagecomponent }: any) {
  useEffect(() => {
    initFlowbite();
  }, []);
  return (
    <div className="antialiased bg-gray-50 dark:bg-gray-900">
      <AuthPageInvisible />
      <TopbarComponent />
      <SidebarComponent />
      {pagecomponent}
    </div>
  );
}

export default MainLayoutComponent;
