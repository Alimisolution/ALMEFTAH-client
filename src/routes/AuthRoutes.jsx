import SignUp from "../pages/auth/SignUp";
import Login from "../pages/auth/Login";
import SignUpCompany from "../pages/auth/SignUpCompany";
import VerifyCode from "../pages/auth/VerifyCode";
import SetNewPassword from "../pages/auth/SetNewPassword";
import ForgotPassword from "../pages/auth/ForgotPassword";

export const AuthRoutes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signup-company",
    element: <SignUpCompany />,
  },
  {
    path: "/verify-code",
    element: <VerifyCode />,
  },
  {
    path: "/set-new-password",
    element: <SetNewPassword />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
];
