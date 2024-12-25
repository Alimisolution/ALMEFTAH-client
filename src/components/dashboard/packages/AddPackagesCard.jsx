import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../../components/common/Input";
import CheckMarkIcon from "../../../assets/icons/CheckMarkIcon";
import Button from "../../../components/common/Button";

const AddPackagesCard = () => {
  const colors = ["#bc9d84", "#4BDCD5", "#FC895C", "#D40F7B"];
  const featuresList = ["Feature1", "Feature2", "Feature3"];

  const formik = useFormik({
    initialValues: {
      packageName: "",
      numberOfMonths: "",
      packagePrice: "",
      monthlyPrice: "",
      savingsRatio: "",
      selectedColor: null,
      features: [],
    },
    validationSchema: Yup.object({
      packageName: Yup.string().required("Package name is required"),
      numberOfMonths: Yup.number()
        .required("Number of months is required")
        .min(1, "Must be at least 1 month"),
      packagePrice: Yup.number()
        .required("Package price is required")
        .min(0, "Price must be positive"),
      monthlyPrice: Yup.number()
        .required("Monthly price is required")
        .min(0, "Price must be positive"),
      savingsRatio: Yup.number()
        .required("Savings ratio is required")
        .min(0, "Savings must be positive"),
      selectedColor: Yup.string().required("Please select a color"),
      features: Yup.array()
        .min(1, "At least one feature must be selected")
        .required("Please select at least one feature"),
    }),
    onSubmit: (values) => {
      console.log("Form Data:", values);
      // API call
    },
  });

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    const { features } = formik.values;

    if (checked) {
      formik.setFieldValue("features", [...features, value]);
    } else {
      formik.setFieldValue(
        "features",
        features.filter((feature) => feature !== value)
      );
    }
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="col-span-1 bg-white py-[20px] px-[15px] rounded-[20px]"
    >
      <h2 className="text-[24px] text-[#000929] font-[600] leading-[26.4px] tracking-[-0.24px] mb-[20px]">
        Add Packages
      </h2>
      <div className="mb-[10px]">
        <Input
          label="Package Name"
          placeholder="Enter package name"
          name="packageName"
          type="text"
          value={formik.values.packageName}
          onChange={formik.handleChange}
        />
        {formik.touched.packageName && formik.errors.packageName && (
          <p className="text-red-500 text-[12px] font-[500]">
            {formik.errors.packageName}
          </p>
        )}
      </div>
      <div className="mb-[10px]">
        <Input
          label="Number of Months"
          placeholder="Enter No. months"
          name="numberOfMonths"
          type="number"
          value={formik.values.numberOfMonths}
          onChange={formik.handleChange}
        />
        {formik.touched.numberOfMonths && formik.errors.numberOfMonths && (
          <p className="text-red-500 text-[12px] font-[500]">
            {formik.errors.numberOfMonths}
          </p>
        )}
      </div>
      <div className="grid grid-cols-2 gap-x-[44px] mb-[10px] border-b border-[#E2E8F0]">
        <div className="mb-[10px]">
          <Input
            label="Package Price"
            placeholder="Enter package price"
            name="packagePrice"
            type="number"
            value={formik.values.packagePrice}
            onChange={formik.handleChange}
          />
          {formik.touched.packagePrice && formik.errors.packagePrice && (
            <p className="text-red-500 text-[12px] font-[500]">
              {formik.errors.packagePrice}
            </p>
          )}
        </div>
        <div className="mb-[10px]">
          <Input
            label="Monthly Price"
            placeholder="Enter monthly price"
            name="monthlyPrice"
            type="number"
            value={formik.values.monthlyPrice}
            onChange={formik.handleChange}
          />
          {formik.touched.monthlyPrice && formik.errors.monthlyPrice && (
            <p className="text-red-500 text-[12px] font-[500]">
              {formik.errors.monthlyPrice}
            </p>
          )}
        </div>
        <div className="mb-[10px]">
          <Input
            label="Savings Ratio"
            placeholder="Enter savings ratio"
            name="savingsRatio"
            type="number"
            value={formik.values.savingsRatio}
            onChange={formik.handleChange}
          />
          {formik.touched.savingsRatio && formik.errors.savingsRatio && (
            <p className="text-red-500 text-[12px] font-[500]">
              {formik.errors.savingsRatio}
            </p>
          )}
        </div>

        <div className="mb-[10px]">
          <div className="flex items-center gap-[16px] flex-wrap">
            {colors.map((color) => (
              <div
                key={color}
                className={`flex items-center justify-center min-w-[39px] min-h-[64px] rounded-[16px] border-2 ${
                  formik.values.selectedColor === color
                    ? "border-[#2D459D]"
                    : "border-transparent"
                }`}
                style={{ backgroundColor: color }}
                onClick={() => formik.setFieldValue("selectedColor", color)}
              >
                {formik.values.selectedColor === color && <CheckMarkIcon />}
              </div>
            ))}
          </div>
          {formik.touched.selectedColor && formik.errors.selectedColor && (
            <p className="text-red-500 text-sm mb-[10px]">
              {formik.errors.selectedColor}
            </p>
          )}
        </div>
      </div>
      <h2 className="text-[18px] text-[#000929] font-[600] leading-[19.8px] tracking-[-0.18px] mb-[10px]">
        Features
      </h2>
      <div className="flex flex-col gap-[10px] mb-[20px]">
        {featuresList.map((feature, index) => (
          <div
            key={index}
            className={`${
              index % 2 === 0 ? "bg-[#F5F5F5]" : "bg-white"
            } rounded-[10px] py-[8px] px-[10px] flex items-center gap-[10px]`}
          >
            <input
              type="checkbox"
              id={`feature-${index}`}
              name="features"
              value={feature}
              checked={formik.values.features.includes(feature)}
              onChange={handleCheckboxChange}
            />
            <span className="text-[12px] text-[#212121] font-[400] leading-[12px]">
              {feature}
            </span>
          </div>
        ))}
        {formik.touched.features && formik.errors.features && (
          <p className="text-red-500 text-sm">{formik.errors.features}</p>
        )}
      </div>
      <div className="flex items-center gap-[10px] flex-1">
        <Button text="Add" variant="primary" type="submit" className="flex-1" />
        <Button
          text="Cancel"
          variant="secondary"
          type="button"
          className="flex-1"
        />
      </div>
    </form>
  );
};

export default AddPackagesCard;
