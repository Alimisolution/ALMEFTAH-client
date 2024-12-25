import { useFormik } from "formik";
import * as Yup from "yup";
import logo from "../../assets/images/logo/logo.png";
import authImg from "../../assets/images/auth/set-password.png";
import ChevronRightIcon from "../../assets/icons/ChevronRightIcon";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

const SetNewPassword = () => {
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      alert("Password has been set!");
      // Handle password setting logic here
    },
  });

  return (
    <div className="flex flex-col w-full min-h-screen px-[80px]">
      <div className="h-[126px] flex items-center">
        <img src={logo} alt="Logo" />
      </div>
      <div className="flex flex-1">
        <div className="w-1/2 flex justify-center items-center flex-1">
          <div className="max-w-[518px] m-auto">
            <div className="text-[14px] text-[#0A62CC] font-[500] leading-[22px] flex items-center mb-[16px]">
              <ChevronRightIcon color="#0A62CC" width="24px" height="24px" />{" "}
              <span>Back to login</span>
            </div>
            <h2 className="text-[40px] text-[#313131] font-[600] mb-[16px]">
              Set a password
            </h2>
            <span className="text-[16px] text-[#313131] font-[400] mb-[30px] block">
              Your previous password has been reset. Please set a new password
              for your account.
            </span>
            <form onSubmit={formik.handleSubmit}>
              <Input
                label="Password"
                placeholder="Enter your Password"
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password && (
                <div className="text-red-500">{formik.errors.password}</div>
              )}

              <Input
                label="Confirm Password"
                placeholder="Enter your Confirm Password"
                type="password"
                name="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                <div className="text-red-500">{formik.errors.confirmPassword}</div>
              )}

              <div className="flex mt-[26px]">
                <Button
                  text="Set password"
                  variant="primary"
                  type="submit"
                  className="w-full"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="w-1/2 hidden md:block py-[10px] pr-[10px] rounded-sm">
          <img src={authImg} alt="" className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default SetNewPassword;