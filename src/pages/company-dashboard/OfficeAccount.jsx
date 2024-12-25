import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import Select from "../../components/common/Select";
import CameraIcon from "../../assets/icons/CameraIcon";

const OfficeAccount = () => {
  const [imagePreview, setImagePreview] = useState({
    propertyIcon: null,
    profilePhoto: null,
  });

  const formik = useFormik({
    initialValues: {
      propertyIcon: null,
      profilePhoto: null,
      companyName: "",
      companyVision: "",
      email: "",
      phoneNumber: "",
      companyType: "",
      city: "",
      state: "",
      linkMapSite: "",
      fullName: "",
      whatsapp: "",
    },
    validationSchema: Yup.object({
      propertyIcon: Yup.mixed().required("Logo is required"),
      profilePhoto: Yup.mixed().required("Profile photo is required"),
      companyName: Yup.string().required("Company Name is required"),
      companyVision: Yup.string().required("Company Vision is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      phoneNumber: Yup.string()
        .required("Phone Number is required")
        .matches(/^[0-9]+$/, "Phone Number must be only digits")
        .min(10, "Phone Number must be at least 10 digits")
        .max(15, "Phone Number must be at most 15 digits"),
      companyType: Yup.string().required("Company Type is required"),
      city: Yup.string().required("City is required"),
      state: Yup.string().required("State is required"),
      linkMapSite: Yup.string()
        .url("Invalid URL format")
        .required("Link to map site is required"),
      fullName: Yup.string().required("Full Name is required"),
      whatsapp: Yup.string()
        .url("Invalid URL format")
        .required("WhatsApp link is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      // Handle form submission
    },
  });

  const handleFileChange = (field, event) => {
    const file = event.currentTarget.files[0];
    formik.setFieldValue(field, file);
    setImagePreview((prevState) => ({
      ...prevState,
      [field]: URL.createObjectURL(file),
    }));
  };

  return (
    <div className="grid grid-cols-5 gap-[30px]">
      <div className="bg-white col-span-3 rounded-[20px] p-[20px]">
        <form onSubmit={formik.handleSubmit}>
          <h2 className="text-[#000929] text-[20px] font-[600] mb-[20px]">
            Company logo
          </h2>
          <div className="flex gap-[20px] items-center mb-[18px] pb-[18px] border-b-[2px] border-b-[#E0E4EC]">
            <div className="text-[9px] text-[#4C535F] font-[500] p-[14px] w-[90px] h-[92px] bg-[#F7F7FD] rounded-[6px] border-dashed border border-[#4C535F] flex flex-col gap-[10px] text-center justify-center items-center">
              <CameraIcon />
              <input
                type="file"
                accept="image/*"
                onChange={(event) => handleFileChange("propertyIcon", event)}
                style={{ display: "none" }}
                id="propertyIconUpload"
              />
              <label htmlFor="propertyIconUpload" className="cursor-pointer">
                Upload your logo
              </label>
            </div>
            <div>
              <h3 className="text-[20px] text-[#000] font-[500] leading-normal">
                Logo
              </h3>
              <strong className="text-[10px] text-[#0A62CC] font-[500] leading-normal">
                Please attach a photo of the Logo in PNG or JPG format
              </strong>
              {formik.touched.propertyIcon && formik.errors.propertyIcon && (
                <p className="text-red-500 text-[12px] font-[500]">
                  {formik.errors.propertyIcon}
                </p>
              )}
            </div>
          </div>
          <div className="">
            <Input
              label="Company Name"
              placeholder="Enter your Company Name "
              name="companyName"
              type="text"
              value={formik.values.companyName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.companyName && formik.errors.companyName && (
              <p className="text-red-500 text-[12px] font-[500]">
                {formik.errors.companyName}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-[14px] mb-[18px] flex-1 relative">
            <label className="text-[#000] text-[16px] font-[500] w-full">
              Company Vision
            </label>
            <textarea
              name="companyVision"
              placeholder="Enter your Company vision"
              className="bg-[#fff] w-full placeholder:text-[#808080B] text-[#000] text-[14px] placeholder:font-[300] font-[400] focus:outline-none rounded-2xl border-2 border-[#C4D9F2] h-[169px] px-[20px] py-[18px] pr-[40px]"
              value={formik.values.companyVision}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.companyVision && formik.errors.companyVision && (
              <p className="text-red-500 text-[12px] mb-[18px]">
                {formik.errors.companyVision}
              </p>
            )}
          </div>
          <div className="">
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
              <p className="text-red-500 text-[12px] font-[500]">
                {formik.errors.email}
              </p>
            )}
          </div>
          <div className="">
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
          <div className="col-span-1 sm:col-span-2 mb-[20px]">
            <label className="text-[#000] text-[16px] font-[500] mb-[10px] block">
              Company Type
            </label>
            <Select
              className="bg-white"
              options={[]} // Add your options here
              placeholder="Select your Company type"
              name="companyType"
              onChange={(option) =>
                formik.setFieldValue("companyType", option.value)
              }
            />
            {formik.touched.companyType && formik.errors.companyType && (
              <p className="text-red-500 text-[12px] font-[500]">
                {formik.errors.companyType}
              </p>
            )}
          </div>
        </form>
      </div>
      <div className="bg-white col-span-2 rounded-[20px] p-[20px]">
        <form onSubmit={formik.handleSubmit}>
          <div className="">
            <Input
              label="City"
              placeholder="Enter the City"
              name="city"
              type="text"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.city && formik.errors.city && (
              <p className="text-red-500 text-[12px] font-[500]">
                {formik.errors.city}
              </p>
            )}
          </div>
          <div className="">
            <Input
              label="State"
              placeholder="Enter the State"
              name="state"
              type="text"
              value={formik.values.state}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.state && formik.errors.state && (
              <p className="text-red-500 text-[12px] font-[500]">
                {formik.errors.state}
              </p>
            )}
          </div>
          <div className="">
            <Input
              label="Link to Map Site"
              placeholder="Enter the Site link map"
              name="linkMapSite"
              type="text"
              value={formik.values.link}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.linkMapSite && formik.errors.linkMapSite && (
              <p className="text-red-500 text-[12px] font-[500]">
                {formik.errors.linkMapSite}
              </p>
            )}
          </div>
          <h2 className="text-[#000929] text-[20px] font-[600] mb-[20px] pt-[18px] border-t-[2px] border-t-[#E0E4EC]">
            Owner info
          </h2>
          <div className="flex gap-[20px] items-center mb-[18px]">
            <div className="text-[9px] text-[#4C535F] font-[500] p-[14px] w-[90px] h-[92px] bg-[#F7F7FD] rounded-[6px] border-dashed border border-[#4C535F] flex flex-col gap-[10px] text-center justify-center items-center">
              <CameraIcon />
              <input
                type="file"
                accept="image/*"
                onChange={(event) => handleFileChange("profilePhoto", event)}
                style={{ display: "none" }}
                id="profilePhotoUpload"
              />
              <label htmlFor="profilePhotoUpload" className="cursor-pointer">
                Upload your profile photo
              </label>
            </div>
            <div>
              <h3 className="text-[20px] text-[#000] font-[500] leading-normal">
                Profile photo
              </h3>
              <strong className="text-[10px] text-[#0A62CC] font-[500] leading-normal">
                Please attach a photo in PNG or JPG format
              </strong>
              {formik.touched.profilePhoto && formik.errors.profilePhoto && (
                <p className="text-red-500 text-[12px] font-[500]">
                  {formik.errors.profilePhoto}
                </p>
              )}
            </div>
          </div>
          <div className="">
            <Input
              label="Full Name"
              placeholder="Enter the Full Name"
              name="fullName"
              type="text"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.fullName && formik.errors.fullName && (
              <p className="text-red-500 text-[12px] font-[500]">
                {formik.errors.fullName}
              </p>
            )}
          </div>
          <div className="">
            <Input
              label="WhatsApp"
              placeholder="Enter the WhatsApp link"
              name="whatsapp"
              type="text"
              value={formik.values.whatsapp}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.whatsapp && formik.errors.whatsapp && (
              <p className="text-red-500 text-[12px] font-[500]">
                {formik.errors.whatsapp}
              </p>
            )}
          </div>
          <div className="flex justify-end gap-[20px] mt-[20px]">
            <Button type="submit" text="Update Profile" />
            <Button type="button" text="Reset" variant="secondary" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default OfficeAccount;
