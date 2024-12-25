import { Formik, Form, Field, ErrorMessage } from "formik"; 
import * as Yup from "yup"; 
import SearchIcon from "../../../assets/icons/SearchIcon";
import CalendarIcon from "../../../assets/icons/CalendarIcon";
import PriceIcon from "../../../assets/icons/PriceIcon";
import Button from "../../common/Button";
import Select from "../../common/Select"; // Ensure react-select is installed

const ReportFinancialFilterModal = ({ reportFinancialFilterModal, setReportFinancialFilterModal }) => {
  const validationSchema = Yup.object({
    noSubscriptions: Yup.string().required("No.Subscriptions is required"),
    price: Yup.number().required("Price is required").positive("Price must be a positive number"),
    endDate: Yup.date().required("End date is required"),
    packageType: Yup.string().required("Package type is required"),
    packageStatus: Yup.string().required("Package status is required"),
  });

  const initialValues = {
    noSubscriptions: "",
    price: "",
    endDate: "",
    packageType: "",
    packageStatus: "",
  };

  const packageTypeOptions = [
    { value: 'basic', label: 'Basic' },
    { value: 'premium', label: 'Premium' },
    { value: 'enterprise', label: 'Enterprise' },
  ];

  const packageStatusOptions = [
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
    { value: 'pending', label: 'Pending' },
  ];

  const handleModalClose = () => {
    setReportFinancialFilterModal(false);
  };

  return (
    <>
      {reportFinancialFilterModal && (
        <div className="fixed w-full inset-0 h-full z-[999] bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white absolute z-[1000] top-[20px] right-[30px] transform w-[440px] rounded-[15px]">
            <div className="overflow-auto max-h-[100vh] p-[15px]">
              <h2 className="text-[24px] font-[600] leading-[26.4px] tracking-[-0.24px] text-[#000929] mb-[17px]">
                Filter..
              </h2>

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                  console.log("Form Submitted: ", values);
                  handleModalClose();
                }}
              >
                {() => (
                  <Form>
                    <div className="mb-[18px] flex flex-col gap-[14px]">
                      <label className="text-[#000] text-[16px] font-[400] w-full">No.Subscriptions</label>
                      <div className="relative">
                        <Field
                          type="text"
                          name="noSubscriptions"
                          placeholder="Search of No.Subscriptions"
                          className="bg-[#fff] w-full placeholder:text-[#808080B] text-[#808080] text-[14px] placeholder:font-[300] font-[400] focus:outline-none rounded-2xl border-2 border-[#C4D9F2] h-[57px] px-[20px] py-[18px] pr-[40px]"
                        />
                        <ErrorMessage name="noSubscriptions" component="div" className="text-red-500" />
                        <span className="absolute right-[10px] top-[10px] bottom-[10px] border-2 border-[#C4D9F2] flex items-center justify-center rounded-[6px] cursor-pointer w-[36px] h-[36px]">
                          <SearchIcon width="16" height="16" />
                        </span>
                      </div>
                    </div>

                    <div className="mb-[18px] flex flex-col gap-[14px]">
                      <label className="text-[#000] text-[16px] font-[400] w-full">Price</label>
                      <div className="relative">
                        <Field
                          type="text"
                          name="price"
                          placeholder="Enter the Price"
                          className="bg-[#fff] w-full placeholder:text-[#808080B] text-[#808080] text-[14px] placeholder:font-[300] font-[400] focus:outline-none rounded-2xl border-2 border-[#C4D9F2] h-[57px] px-[20px] py-[18px] pr-[40px]"
                        />
                        <ErrorMessage name="price" component="div" className="text-red-500" />
                        <span className="absolute right-[10px] top-[10px] bottom-[10px] border-2 border-[#C4D9F2] flex items-center justify-center rounded-[6px] cursor-pointer w-[36px] h-[36px]">
                          <PriceIcon />
                        </span>
                      </div>
                    </div>

                    <div className="mb-[18px] flex flex-col gap-[14px]">
                      <label className="text-[#000] text-[16px] font-[400] w-full">End date</label>
                      <div className="relative">
                        <Field
                          type="date"
                          name="endDate"
                          className="bg-[#fff] w-full placeholder:text-[#808080B] text-[#808080] text-[14px] placeholder:font-[300] font-[400] focus:outline-none rounded-2xl border-2 border-[#C4D9F2] h-[57px] px-[20px] py-[18px]"
                        />
                        <ErrorMessage name="endDate" component="div" className="text-red-500" />
                        <span className="absolute right-[10px] top-[10px] bottom-[10px] border-2 border-[#C4D9F2] flex items-center justify-center rounded-[6px] cursor-pointer w-[36px] h-[36px]">
                          <CalendarIcon width="18" height="20" />
                        </span>
                      </div>
                    </div>

                    <div className="mb-[18px] flex flex-col gap-[14px]">
                      <label className="text-[#000] text-[16px] font-[400] w-full">Package type</label>
                      <div className="relative">
                        <Select
                          name="packageType"
                          options={packageTypeOptions}
                          placeholder="Select Package Type"
                          // onChange={(option) => setFieldValue("packageType", option.value)}
                          className="bg-white border-2 border-[#C4D9F2] rounded-2xl"
                        />
                        <ErrorMessage name="packageType" component="div" className="text-red-500" />
                      </div>
                    </div>

                    {/* Package Status */}
                    <div className="mb-[18px] flex flex-col gap-[14px]">
                      <label className="text-[#000] text-[16px] font-[400] w-full">Package status</label>
                      <div className="relative">
                        <Select
                          name="packageStatus"
                          options={packageStatusOptions}
                          placeholder="Select Package Status"
                          // onChange={(option) => setFieldValue("packageStatus", option.value)}
                          className="bg-white border-2 border-[#C4D9F2] rounded-2xl"
                        />
                        <ErrorMessage name="packageStatus" component="div" className="text-red-500" />
                      </div>
                    </div>

                    <div className="flex items-center gap-[20px] mb-[15px]">
                      <Button
                        text="Show results"
                        variant="primary"
                        type="submit"
                      />
                      <Button
                        text="Cancel"
                        variant="secondary"
                        type="button"
                        onClick={() => setReportFinancialFilterModal(false)}
                      />
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReportFinancialFilterModal;
