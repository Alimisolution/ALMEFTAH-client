import { useLocation } from "react-router-dom";

export const useDashboardHeading = (routes) => {
  const location = useLocation();
console.log(location)
  const currentRoute = routes.find((route) => route.path === location.pathname.split("/").pop());
  console.log(currentRoute)

  return currentRoute ? currentRoute.title : "Dashboard";
};
