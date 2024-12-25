import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../../components/common/Button";
import Input from "../../../components/common/Input";
import { Link } from "react-router-dom";

const CompanyPasswordCard = () => {
  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
    validationSchema: Yup.object({
      oldPassword: Yup.string().required("Old Password is required"),
      newPassword: Yup.string()
        .required("New Password is required")
        .min(8, "New Password must be at least 8 characters long"),
      confirmNewPassword: Yup.string()
        .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
        .required("Confirm New Password is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="p-5 bg-white rounded-2xl mb-[30px] grid grid-cols-2">
      <div className="col-span-1">
        <form onSubmit={formik.handleSubmit}>
          <Input
            label="Old Password"
            placeholder="Enter your Old Password"
            type="password"
            name="oldPassword"
            value={formik.values.oldPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.oldPassword && formik.errors.oldPassword && (
            <p className="text-red-500 text-[12px] font-[500]">
              {formik.errors.oldPassword}
            </p>
          )}

          <Input
            label="New Password"
            placeholder="Enter your New Password"
            type="password"
            name="newPassword"
            value={formik.values.newPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.newPassword && formik.errors.newPassword && (
            <p className="text-red-500 text-[12px] font-[500]">
              {formik.errors.newPassword}
            </p>
          )}

          <Input
            label="Confirm New Password"
            placeholder="Enter your Confirm New Password"
            type="password"
            name="confirmNewPassword"
            value={formik.values.confirmNewPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.confirmNewPassword && formik.errors.confirmNewPassword && (
            <p className="text-red-500 text-[12px] font-[500]">
              {formik.errors.confirmNewPassword}
            </p>
          )}

          <div className="flex w-full justify-end">
            <Link
              to="/forgot-password"
              className="text-[13px] text-[#0A62CC] font-[400] w-full text-right"
            >
              Forgot Password
            </Link>
          </div>
          <div className="flex items-center gap-[20px] mt-[208px]">
            <Button
              text="Update Password"
              variant="primary"
              type="submit"
              className="flex-1"
            />
            <Button
              text="Reset"
              variant="secondary"
              type="button"
              onClick={formik.handleReset}
              className="flex-1"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompanyPasswordCard;