import { useFormik } from "formik";
import * as Yup from "yup";
import ImageCard from "../../components/auth/ImageCard";
import Input from "../../components/common/Input";
import AuthHeader from "../../components/auth/AuthHeader";
import Button from "../../components/common/Button";

const SignUpCompany = () => {
  const formik = useFormik({
    initialValues: {
      companyName: "",
      city: "",
      jobTitle: "",
      ownerName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      companyName: Yup.string().required("Company Name is required"),
      city: Yup.string().required("City is required"),
      jobTitle: Yup.string().required("Job Title is required"),
      ownerName: Yup.string().required("Owner Name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      phoneNumber: Yup.string()
        .required("Phone Number is required")
        .matches(/^[0-9]+$/, "Phone Number must be only digits")
        .min(10, "Phone Number must be at least 10 digits")
        .max(15, "Phone Number must be at most 15 digits"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
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
            breadcrumbText="Join Us"
            title="I have an account!"
            subtitle="Login"
            AuthTitle="Sign up"
          />

          <form onSubmit={formik.handleSubmit}>
            <div className="flex gap-[21px] flex-wrap">
              <div className="flex-1">
              <Input
                label="Company Name"
                placeholder="Enter your Company Name"
                name="companyName"
                value={formik.values.companyName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.companyName && formik.errors.companyName && (
                <div className="text-red-500">{formik.errors.companyName}</div>
              )}
              </div>
              <div className="flex-1">
              <Input
                label="City"
                placeholder="Enter your City"
                name="city"
                value={formik.values.city}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.city && formik.errors.city && (
                <div className="text-red-500">{formik.errors.city}</div>
              )}
              </div>
            </div>
            <div className="flex gap-[21px] flex-wrap">
              <div className="flex-1">
              <Input
                label="Job Title"
                placeholder="Enter your Job Title"
                name="jobTitle"
                value={formik.values.jobTitle}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.jobTitle && formik.errors.jobTitle && (
                <div className="text-red-500">{formik.errors.jobTitle}</div>
              )}
              </div>
              <div className="flex-1">
              <Input
                label="Owner Name"
                placeholder="Enter your Owner Name"
                name="ownerName"
                value={formik.values.ownerName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.ownerName && formik.errors.ownerName && (
                <div className="text-red-500">{formik.errors.ownerName}</div>
              )}
              </div>
            </div>
            <div className="flex gap-[21px] flex-wrap">
              <div className="flex-1">
              <Input
                label="Email"
                placeholder="Enter your Email"
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-500">{formik.errors.email}</div>
              )}
              </div>
              <div className="flex-1">
              <Input
                label="Phone Number"
                placeholder="Enter your Phone Number"
                name="phoneNumber"
                type="tel"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                <div className="text-red-500">{formik.errors.phoneNumber}</div>
              )}
            </div>
            </div>
            <div className="flex-1">
            <Input
              label="Password"
              placeholder="Enter your Password"
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500">{formik.errors.password}</div>
            )}
</div>
<div>
            <Input
              label="Confirm Password"
              placeholder="Enter your Confirm Password"
              name="confirmPassword"
              type="password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <div className="text-red-500">
                  {formik.errors.confirmPassword}
                </div>
              )}
</div>
            <div className="mb-[35px]">
              <input type="checkbox" className="mr-[8px]" />
              <label className="text-[14px] text-[#313131] font-[500]">
                I agree to all the
                <span className="text-[#0A62CC] font-[600]"> Terms </span> and
                <span className="text-[#0A62CC] font-[600]">
                  {" "}
                  Privacy Policies
                </span>
              </label>
            </div>
            <div className="flex">
              <Button
                text="Sign Up"
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

export default SignUpCompany;
