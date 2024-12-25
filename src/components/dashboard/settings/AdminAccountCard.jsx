import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../../components/common/Button";
import Input from "../../../components/common/Input";
import CameraIcon from "../../../assets/icons/CameraIcon";

const AdminAccountCard = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      profilePhoto: null,
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      phoneNumber: Yup.string()
        .required("Phone Number is required")
        .matches(/^[0-9]+$/, "Phone Number must be only digits")
        .min(10, "Phone Number must be at least 10 digits")
        .max(15, "Phone Number must be at most 15 digits"),
      profilePhoto: Yup.mixed().required("Profile photo is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleFileChange = (event) => {
    const file = event.currentTarget.files[0];
    formik.setFieldValue("profilePhoto", file);
  };

  return (
    <div className="p-5 bg-white rounded-2xl">
      <h2 className="text-[16px] text-[#000929] font-[500] mb-[18px]">
        Your Profile Picture
      </h2>
      <div className="flex gap-[20px] items-center mb-[28px] pb-[35px] border-b-2 border-[#E0E4EC]">
        <label className="text-[12px] text-[#4C535F] font-[500] p-[10px] w-[110px] h-[112px] bg-[#F7F7FD] rounded-[6px] border-dashed border border-[#4C535F] flex flex-col gap-[10px] text-center justify-center items-center">
          <CameraIcon />
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: "none" }}
            id="profilePhotoUpload"
          />
          <label htmlFor="profilePhotoUpload" className="cursor-pointer">
            Upload your photo
          </label>
        </label>
        <div>
          <h3 className="text-[25px] text-[#000] font-[500]">
            Personal photo{" "}
          </h3>
          <strong className="text-[12px] text-[#0A62CC] font-[500]">
            Please attach a photo in PNG or JPG format
          </strong>
          {formik.touched.profilePhoto && formik.errors.profilePhoto && (
            <p className="text-red-500 text-[12px] font-[500]">
              {formik.errors.profilePhoto}
            </p>
          )}
        </div>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-2 gap-x-[30px]">
       <div>
       <Input
            label="First Name"
            placeholder="Enter your First Name"
            name="firstName"
            type="text"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <p className="text-red-500 text-[12px] font-[500]">
              {formik.errors.firstName}
            </p>
          )}
       </div>
       <div>
          <Input
            label="Last Name"
            placeholder="Enter your Last Name"
            name="lastName"
            type="text"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <p className="text-red-500 text-[12px] font-[500]">
              {formik.errors.lastName}
            </p>
          )}
          </div>
          <div>
          <Input
            label="Email"
            placeholder="Enter your Email"
            name="email"
            type="text"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            < p className="text-red-500 text-[12px] font-[500]">
              {formik.errors.email}
            </p>
          )}
            </div>
            <div>
          <Input
            label="Phone Number"
            placeholder="Enter your Phone Number"
            name="phoneNumber"
            type="text"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber && (
            <p className="text-red-500 text-[12px] font-[500]">
              {formik.errors.phoneNumber}
            </p>
          )}
             </div>
        </div>
        <div className="flex items-center gap-[20px] mt-[20px]">
          <Button
            text="Update Profile"
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
  );
};

export default AdminAccountCard;