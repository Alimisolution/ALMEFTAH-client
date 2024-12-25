import { useFormik } from "formik";
import * as Yup from "yup";
import logo from "../../assets/images/logo/logo.png";
import authImg from "../../assets/images/auth/verify-code.png";
import ChevronRightIcon from "../../assets/icons/ChevronRightIcon";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

const VerifyCode = () => {
  const formik = useFormik({
    initialValues: {
      code: "",
    },
    validationSchema: Yup.object({
      code: Yup.string()
        .required("Verification code is required")
        .matches(/^[0-9]+$/, "Code must be numeric")
        .length(6, "Code must be exactly 6 digits"),
    }),
    onSubmit: (values) => {
      console.log(values);
      alert("Code verified!");
      // Handle verification logic here
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
              Verify code
            </h2>
            <span className="text-[16px] text-[#313131] font-[400] mb-[30px] block">
              An authentication code has been sent to your email.
            </span>
            <form onSubmit={formik.handleSubmit}>
              <Input
                label="Enter Code"
                placeholder="Enter Code"
                name="code"
                type="text"
                value={formik.values.code}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.code && formik.errors.code && (
                <div className="text-red-500">{formik.errors.code}</div>
              )}

              <div className="flex mt-[26px]">
                <Button
                  text="Verify"
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

export default VerifyCode;