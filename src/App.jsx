import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./layouts/UserLayout.jsx";
import SuperDashboardLayout from "./layouts/SuperDashboardLayout.jsx";
import CompanyDashboardLayout from "./layouts/CompanyDashboardLayout.jsx";
import { UserRoutes } from "./routes/UserRoutes.jsx";
import { SuperDashboardRoutes } from "./routes/SuperDashboardRoutes.jsx";
import { CompanyDashboardRoutes } from "./routes/CompanyDashboardRoutes.jsx";
import { AuthRoutes } from "./routes/AuthRoutes.jsx";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth routes */}
        {AuthRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        {/* User routes */}
        <Route element={<UserLayout />}>
          <Route index element={UserRoutes[0].element} />
          {UserRoutes.slice(1).map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>
        {/* Super Dashboard routes */}
        <Route path="/super-dashboard" element={<SuperDashboardLayout />}>
          <Route index element={SuperDashboardRoutes[0].element} />
          {SuperDashboardRoutes.slice(1).map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>
        {/* Company Dashboard routes */}
        <Route path="/company" element={<CompanyDashboardLayout />}>
          <Route index element={CompanyDashboardRoutes[0].element} />
          {CompanyDashboardRoutes.slice(1).map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>

        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
