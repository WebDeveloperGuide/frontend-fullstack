import * as React from "react";
import { redirect } from "next/navigation";

export default function MainPage() {
  redirect("/login");

  return <div>Main Page</div>;
}
