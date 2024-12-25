import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../../components/common/Input";
import Button from "../../../components/common/Button";
import Select from "../../../components/common/Select.jsx";

const ExploreCard = () => {
  const formik = useFormik({
    initialValues: {
      type: "",
      company: "",
      realEstate: "",
      startDate: "",
      endDate: "",
    },
    validationSchema: Yup.object({
      type: Yup.string().required("Please select a type"),
      company: Yup.string().required("Company is required"),
      realEstate: Yup.string().required("Real estate is required"),
      startDate: Yup.date().required("Start date is required"),
      endDate: Yup.date()
        .required("End date is required")
        .min(Yup.ref("startDate"), "End date cannot be before start date"),
    }),
    onSubmit: (values) => {
      console.log("Form Submitted:", values);
    },
  });
  const companyOptions = [
    { value: "companyA", label: "Company A" },
    { value: "companyB", label: "Company B" },
    { value: "companyC", label: "Company C" },
  ];

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="p-4 bg-white rounded-[20px]"
    >
      <h2 className="text-[18px] text-[#000] font-[600] pb-[10px] border-b-[2px] border-[#E0E4EC] mb-[20px]">
        Select a type
      </h2>

      <div className="flex gap-x-[10px] w-[50%]">
        {["Top choice", "Unique", "Top searched"].map((item) => (
          <div
            key={item}
            className={`text-[#000929] text-[15px] font-[400] leading-[17px] rounded-[10px] border-[1.5px] py-[14px] flex justify-center items-center flex-1 cursor-pointer ${
              formik.values.type === item
                ? "border-dark-blue bg-[#C4D9F2]"
                : "border-[#C4D9F2] bg-white"
            }`}
            onClick={() => formik.setFieldValue("type", item)}
          >
            {item}
          </div>
        ))}
      </div>
      {formik.touched.type && formik.errors.type && (
        <div className="text-red-500 text-sm mt-2">{formik.errors.type}</div>
      )}

      <div className="grid gap-x-[20px] grid-cols-2 mt-[28px]">
        <div className="flex flex-col flex-1">
          <label className="text-[#000] text-[16px] mb-[14px] block">
            Company
          </label>
          <Select
            className="bg-white"
            options={companyOptions}
            placeholder="Select an option"
            name="explore"
            value={companyOptions.find(
              (option) => option.value === formik.values.explore
            )}
            onChange={(option) => formik.setFieldValue("explore", option.value)}
            error={formik.touched.explore && formik.errors.explore}
          />
          {formik.touched.explore && formik.errors.explore && (
            <div className="text-red-500 text-[13px] mb-[30px]">
              {formik.errors.explore}
            </div>
          )}
        </div>
        <div>
          <Input
            label="Real estate"
            placeholder="Select the property"
            name="realEstate"
            type="text"
            value={formik.values.realEstate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.realEstate && formik.errors.realEstate && (
            <div className="text-red-500 text-sm mt-2">
              {formik.errors.realEstate}
            </div>
          )}
        </div>
        <div>
          <Input
            label="Start date"
            placeholder="Enter your Start date"
            name="startDate"
            type="date"
            value={formik.values.startDate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.startDate && formik.errors.startDate && (
            <div className="text-red-500 text-sm mt-2">
              {formik.errors.startDate}
            </div>
          )}
        </div>
        <div>
          <Input
            label="End date"
            placeholder="Enter your End date"
            name="endDate"
            type="date"
            value={formik.values.endDate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.endDate && formik.errors.endDate && (
            <div className="text-red-500 text-sm mt-2">
              {formik.errors.endDate}
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-end items-center gap-[20px] mt-[50px]">
        <Button text="Update" variant="primary" type="submit" />
        <Button text="Cancel" variant="secondary" type="button" />
      </div>
    </form>
  );
};

export default ExploreCard;
