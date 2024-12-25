import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../../components/common/Input";
import Button from "../../../components/common/Button";

const RegistrationCard = () => {
  const formik = useFormik({
    initialValues: {
      loginTitle: "Welcome back! Glad to see you, Again!",
      signupTitle: "Hello! Register to get started",
      forgotPasswordTitle: "Don't worry! It occurs. Please enter the email address linked with your account.",
      otpVerificationTitle: "Enter the verification code we just sent on your email address.",
      newPasswordTitle: "Your new password must be unique from those previously used.",
      passwordChangedTitle: "Your password has been changed successfully.",
    },
    validationSchema: Yup.object({
      loginTitle: Yup.string().required("Login title is required"),
      signupTitle: Yup.string().required("Signup title is required"),
      forgotPasswordTitle: Yup.string().required("Forgot password title is required"),
      otpVerificationTitle: Yup.string().required("OTP verification title is required"),
      newPasswordTitle: Yup.string().required("New password title is required"),
      passwordChangedTitle: Yup.string().required("Password changed title is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="p-4 bg-white rounded-[20px]">
      <form onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-2 gap-x-[30px] gap-y-[12px]">
          <div className="">
            <h2 className="text-[20px] text-[#000] font-[700] leading-normal pb-[10px] mb-[28px] border-b-[2px] border-[#E0E4EC]">
              Login
            </h2>
            <Input
              label="Title"
              placeholder=""
              name="loginTitle"
              type="text"
              value={formik.values.loginTitle}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.loginTitle && formik.errors.loginTitle && (
              <div className="text-red-500">{formik.errors.loginTitle}</div>
            )}
          </div>
          <div className="">
            <h2 className="text-[20px] text-[#000] font-[700] leading-normal pb-[10px] mb-[28px] border-b-[2px] border-[#E0E4EC]">
              Sign up
            </h2>
            <Input
              label="Title"
              placeholder=""
              name="signupTitle"
              type="text"
              value={formik.values.signupTitle}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.signupTitle && formik.errors.signupTitle && (
              <div className="text-red-500">{formik.errors.signupTitle}</div>
            )}
          </div>
          <div className="">
            <h2 className="text-[20px] text-[#000] font-[700] leading-normal pb-[10px] mb-[28px] border-b-[2px] border-[#E0E4EC]">
              Forgot Password?
            </h2>
            <Input
              label="Title"
              placeholder=""
              name="forgotPasswordTitle"
              type="text"
              value={formik.values.forgotPasswordTitle}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.forgotPasswordTitle && formik.errors.forgotPasswordTitle && (
              <div className="text-red-500">{formik.errors.forgotPasswordTitle}</div>
            )}
          </div>
          <div className="">
            <h2 className="text-[20px] text-[#000] font-[700] leading -normal pb-[10px] mb-[28px] border-b-[2px] border-[#E0E4EC]">
              OTP Verification{" "}
            </h2>
            <Input
              label="Title"
              placeholder=""
              name="otpVerificationTitle"
              type="text"
              value={formik.values.otpVerificationTitle}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.otpVerificationTitle && formik.errors.otpVerificationTitle && (
              <div className="text-red-500">{formik.errors.otpVerificationTitle}</div>
            )}
          </div>
          <div className="">
            <h2 className="text-[20px] text-[#000] font-[700] leading-normal pb-[10px] mb-[28px] border-b-[2px] border-[#E0E4EC]">
              Create new password
            </h2>
            <Input
              label="Title"
              placeholder=""
              name="newPasswordTitle"
              type="text"
              value={formik.values.newPasswordTitle}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.newPasswordTitle && formik.errors.newPasswordTitle && (
              <div className="text-red-500">{formik.errors.newPasswordTitle}</div>
            )}
          </div>
          <div className="">
            <h2 className="text-[20px] text-[#000] font-[700] leading-normal pb-[10px] mb-[28px] border-b-[2px] border-[#E0E4EC]">
              Password Changed!{" "}
            </h2>
            <Input
              label="Title"
              placeholder=""
              name="passwordChangedTitle"
              type="text"
              value={formik.values.passwordChangedTitle}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.passwordChangedTitle && formik.errors.passwordChangedTitle && (
              <div className="text-red-500">{formik.errors.passwordChangedTitle}</div>
            )}
          </div>
        </div>
        <div className="flex items-center gap-[20px] mt-[130px]">
          <Button text="Update" variant="primary" type="submit" />
          <Button text="Reset" variant="secondary" type="button" onClick={formik.handleReset} />
        </div>
      </form>
    </div>
  );
};

export default RegistrationCard;