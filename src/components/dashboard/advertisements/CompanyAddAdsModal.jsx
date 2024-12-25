import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../../components/common/Input";
import Button from "../../../components/common/Button";
import Select from "../../../components/common/Select"; // Assuming you're using react-select

const CompanyAddAdsModal = ({ companyAddAdsModal, setCompanyAddAdsModal }) => {
  console.log(companyAddAdsModal);
  const realEstateOptions = [
    { value: "apartment", label: "Apartment" },
    { value: "villa", label: "Villa" },
    { value: "office", label: "Office" },
  ];

  const formik = useFormik({
    initialValues: {
      startDate: "",
      endDate: "",
      realEstate: "",
      whatsappLink: "",
      email: "",
    },
    validationSchema: Yup.object({
      startDate: Yup.string()
        .required("Start date is required")
        .matches(
          // Example for validating date format
          /^\d{4}-\d{2}-\d{2}$/,
          "Start date must be in YYYY-MM-DD format"
        ),
      endDate: Yup.string()
        .required("End date is required")
        .matches(
          /^\d{4}-\d{2}-\d{2}$/,
          "End date must be in YYYY-MM-DD format"
        ),
      realEstate: Yup.string().required("Please select a real estate option"),
      whatsappLink: Yup.string()
        .required("WhatsApp link is required")
        .url("Please enter a valid URL"),
      email: Yup.string()
        .required("E-mail is required")
        .email("Please enter a valid email address"),
    }),
    onSubmit: (values) => {
      console.log("Form values:", values);
      // Add your submit logic here
      setCompanyAddAdsModal(false);
    },
  });

  return (
    <>
      {companyAddAdsModal && (
        <div className="fixed w-full inset-0 h-full z-[999] bg-black bg-opacity-50 flex justify-center items-center ">
          <div className="p-5 bg-[#F6F6F6] rounded-[16px]">
            <h2 className="bg-white text-[#000929] text-[22px] font-[600] py-[27px] px-[30px] mb-[28px] rounded-[16px]">
              Add Ads
            </h2>
            <form
              onSubmit={formik.handleSubmit}
              className="grid grid-cols-1 sm:grid-cols-2 gap-[18px]"
            >
              <div className="">
                <Input
                  label="Start Date"
                  placeholder="Enter the Start date"
                  name="startDate"
                  type="text"
                  value={formik.values.startDate}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.startDate && formik.errors.startDate && (
                  <p className="text-red-500 text-[12px] font-[500]">
                    {formik.errors.startDate}
                  </p>
                )}
              </div>

              <div className="">
                <Input
                  label="End Date"
                  placeholder="Enter the End date"
                  name="endDate"
                  type="text"
                  value={formik.values.endDate}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.endDate && formik.errors.endDate && (
                  <p className="text-red-500 text-[12px] font-[500]">
                    {formik.errors.endDate}
                  </p>
                )}
              </div>

              <div className="col-span-1 sm:col-span-2 mb-[20px]">
                <label className="text-[#000] text-[16px] font-[500] mb-[10px] block">
                  Real Estate
                </label>
                <Select
                  className="bg-white"
                  options={realEstateOptions}
                  placeholder="Select the property"
                  name="realEstate"
                  onChange={(option) =>
                    formik.setFieldValue("realEstate", option.value)
                  }
                />
                {formik.touched.realEstate && formik.errors.realEstate && (
                  <p className="text-red-500 text-[12px] font-[500]">
                    {formik.errors.realEstate}
                  </p>
                )}
              </div>

              <h2 className="col-span-1 sm:col-span-2 mb-[18px] text-[#000929] text-[16px] font-[600]">
                Contact Details
              </h2>

              <div className="">
                <Input
                  label="WhatsApp Link"
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

              <div className="">
                <Input
                  label="E-mail"
                  placeholder="Enter the E-mail"
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

              <div className="flex justify-end items-center gap-[20px] col-span-1 sm:col-span-2">
                <Button text="Publish" variant="primary" type="submit" />
                <Button
                  text="Cancel"
                  variant="secondary"
                  type="button"
                  onClick={() => {
                    setCompanyAddAdsModal(false);
                  }}
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CompanyAddAdsModal;
