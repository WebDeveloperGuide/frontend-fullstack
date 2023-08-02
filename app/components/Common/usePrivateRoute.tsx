import { useRouter } from "next/navigation";

const usePrivateRoute = () => {
  const router = useRouter();

  const isLoggedIn = localStorage.getItem("user_data");
  if (!isLoggedIn) {
    // Redirect to the login page if not logged in
    router.push("/login");
  }
};

export default usePrivateRoute;
