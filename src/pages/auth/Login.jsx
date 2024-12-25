import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ImageCard from "../../components/auth/ImageCard";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import AuthHeader from "../../components/auth/AuthHeader";
import FacebookIcon from "../../assets/icons/FacebookIcon";
import AppleIcon from "../../assets/icons/AppleIcon";
import GoogleIcon from "../../assets/icons/GoogleIcon";
import { Link } from "react-router-dom";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      alert("Form submitted!");
    },
  });

  return (
    <div className="flex w-full min-h-screen">
      <div className="w-1/2 m-auto py-[107px] flex-1">
        <div className="p-[30px]">
          <AuthHeader
            breadcrumbText="Login"
            title="No Account ?"
            subtitle="Sign up"
            AuthTitle="Login"
            path="/signup"
          />
          <div className="flex items-center gap-[15px] mb-[28px]">
            <div className="rounded-[9px] bg-[#E9F1FF] h-[55px] flex-1 flex items-center justify-center">
              <GoogleIcon />{" "}
              <span className="text-[16px] text-[#4285F4] font-[400] ml-[21px]">
                Sign in with Google
              </span>
            </div>
            <div className="rounded-[9px] bg-[#fff] h-[55px] w-[60px] flex items-center justify-center">
              <FacebookIcon />
            </div>
            <div className="rounded-[9px] bg-[#fff] h-[55px] w-[60px] flex items-center justify-center">
              <AppleIcon />
            </div>
          </div>

          <form onSubmit={formik.handleSubmit}>
            <Input
              label="Enter your username or email address"
              placeholder="Username or email address"
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500">{formik.errors.email}</div>
            )}

            <Input
              label="Enter your Password"
              placeholder="Password"
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500">{formik.errors.password}</div>
            )}

            <div className="flex justify-end mb-[30px]">
              <Link
                to="/forgot-password"
                className="text-[13px] text-[#0A62CC] font-[400]"
              >
                Forgot Password
              </Link>
            </div>

            <div className="flex">
              <Button
                text="Sign in"
                variant="primary"
                type="submit"
                className="w-full"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="w-1/2 min-h-screen flex-1 hidden md:block py-[10px] pr-[10px] rounded-sm">
        <ImageCard />
      </div>
    </div>
  );
};

export default Login;