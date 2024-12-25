import { useFormik } from "formik";
import * as Yup from "yup";
import logo from "../../assets/images/logo/logo.png";
import authImg from "../../assets/images/auth/forget-password.png";
import ChevronRightIcon from "../../assets/icons/ChevronRightIcon";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const formik = useFormik({
    initialValues: {
      usernameOrEmail: "",
    },
    validationSchema: Yup.object({
      usernameOrEmail: Yup.string()
        .required("Username or email is required")
        .test("is-valid", "Invalid username or email format", (value) => {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          const usernameRegex = /^[a-zA-Z0-9._-]{3,}$/;
          return emailRegex.test(value) || usernameRegex.test(value);
        }),
    }),
    onSubmit: (values) => {
      console.log(values);
      alert("Password recovery email sent!");
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
              <Link to={"/login"}>Back to login</Link>
            </div>
            <h2 className="text-[40px] text-[#313131] font-[600] mb-[16px]">
              Forgot your password?
            </h2>
            <span className="text-[16px] text-[#313131] font-[400] mb-[30px] block">
              Don’t worry, happens to all of us. Enter your username or email
              below to recover your password.
            </span>
            <form onSubmit={formik.handleSubmit}>
              <Input
                label="Enter your username or email address"
                placeholder="Username or email address"
                name="usernameOrEmail"
                type="text"
                value={formik.values.usernameOrEmail}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.usernameOrEmail &&
                formik.errors.usernameOrEmail && (
                  <div className="text-red-500">
                    {formik.errors.usernameOrEmail}
                  </div>
                )}

              <div className="flex mt-[26px]">
                <Button
                  text="Submit"
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

export default ForgotPassword;
