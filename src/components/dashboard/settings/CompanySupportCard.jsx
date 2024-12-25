import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../../components/common/Button";
import Input from "../../../components/common/Input";

const CompanySupportCard = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      title: "",
      whatsappLink: "",
      description: "",
      supportType: "", // New field for support type
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Full Name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      title: Yup.string().required("Title is required"),
      whatsappLink: Yup.string()
        .url("Invalid URL format")
        .required("WhatsApp link is required"),
      description: Yup.string().required("Description is required"),
      supportType: Yup.string().required("Please select a support type"), // Validation for support type
    }),
    onSubmit: (values) => {
      console.log(values);
      // Handle form submission logic here
    },
  });

  return (
    <div className="bg-white p-[20px] rounded-[20px]">
      <h2 className="text-[18px] text-black font-[600] pb-[10px] mb-[18px] border-b-[1.5px] border-b-[#E0E4EC]">
        Select a type
      </h2>
      <div className="flex items-center gap-[10px] mb-[28px]">
        <span
          className={`flex items-center justify-center w-[129px] h-[44px] text-[15px] text-[#000929] font-[400] leading-[17px] border-[1.5px] ${
            formik.values.supportType === "Suggestion"
              ? "border-[#0A62CC] bg-[#C4D9F2]"
              : "border-[#C4D9F2]"
          } bg-white rounded-[10px] cursor-pointer`}
          onClick={() => formik.setFieldValue("supportType", "Suggestion")}
        >
          Suggestion
        </span>
        <span
          className={`flex items-center justify-center w-[129px] h-[44px] text-[15px] text-[#000929] font-[400] leading-[17px] border-[1.5px] ${
            formik.values.supportType === "Problem"
              ? "border-[#0A62CC] bg-[#C4D9F2]"
              : "border-[#C4D9F2]"
          } bg-white rounded-[10px] cursor-pointer`}
          onClick={() => formik.setFieldValue("supportType", "Problem")}
        >
          Problem
        </span>
        <span
          className={`flex items-center justify-center w-[129px] h-[44px] text-[15px] text-[#000929] font-[400] leading-[17px] border-[1.5px] ${
            formik.values.supportType === "Report"
              ? "border-[#0A62CC] bg-[#C4D9F2]"
              : "border-[#C4D9F2]"
          } bg-white rounded-[10px] cursor-pointer`}
          onClick={() => formik.setFieldValue("supportType", "Report")}
        >
          Report
        </span>
      </div>
      {formik.touched.supportType && formik.errors.supportType && (
        <p className="text-red-500 text-[12px] font-[500]">
          {formik.errors.supportType}
        </p>
      )}
      <form onSubmit={formik.handleSubmit}>
   
        <div className="grid grid-cols-2 gap-x-[30px]">
        <div>
          <Input
            label="Full Name"
            placeholder="Enter your Full Name"
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
            <p className="text-red-500 text-[12px] font-[500            ">
              {formik.errors.email}
            </p>
          )}
          </div>
          <div>
          <Input
            label="Title"
            placeholder="Enter the title"
            name="title"
            type="text"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.title && formik.errors.title && (
            <p className="text-red-500 text-[12px] font-[500]">
              {formik.errors.title}
            </p>
          )}
          </div>
          <div>
          <Input
            label="WhatsApp link"
            placeholder="Enter the WhatsApp link"
            name="whatsappLink"
            type="text"
            value={formik.values.whatsappLink}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.whatsappLink && formik.errors.whatsappLink && (
            <p className="text-red-500 text-[12px] font-[500]">
              {formik.errors.whatsappLink}
            </p>
          )}
          </div>
          <div>
          <Input
            label="Description"
            placeholder="Enter the Description"
            name="description"
            type="text"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.description && formik.errors.description && (
            <p className="text-red-500 text-[12px] font-[500]">
              {formik.errors.description}
            </p>
          )}
          </div>
        </div>
        <div className="flex justify-end items-center gap-[10px] mt-[20px]">
          <Button
            text="Publish"
            variant="primary"
            type="submit"
            className="flex-1"
          />
          <Button
            text="Cancel"
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

export default CompanySupportCard;
