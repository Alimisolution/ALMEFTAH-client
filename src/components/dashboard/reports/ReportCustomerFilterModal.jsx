import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import SearchIcon from "../../../assets/icons/SearchIcon";
import LocationIcon from "../../../assets/icons/LocationIcon";
import MouseIcon from "../../../assets/icons/MouseIcon";
import Button from "../../common/Button";
import Select from "../../common/Select"; 

const ReportCustomerFilterModal = ({
  reportCustomerFilterModal,
  setReportCustomerFilterModal,
}) => {
  const validationSchema = Yup.object({
    noFavorites: Yup.string().required("No.Favorites is required"),
    city: Yup.string().required("City is required"),
    subscriptionStatus: Yup.string().required(
      "Subscription status is required"
    ),
    noClicks: Yup.number()
      .required("No.Clicks is required")
      .positive("No.Clicks must be a positive number")
      .integer("No.Clicks must be an integer"),
  });

  const initialValues = {
    noFavorites: "",
    city: "",
    subscriptionStatus: "",
    noClicks: "",
  };

  const subscriptionOptions = [
    { label: "Active", value: "active" },
    { label: "Inactive", value: "inactive" },
    { label: "Expired", value: "expired" },
  ];

  const handleModalClose = () => {
    setReportCustomerFilterModal(false);
  };

  return (
    <>
      {reportCustomerFilterModal && (
        <div
          className="fixed w-full inset-0 h-full z-[999] bg-black bg-opacity-50 flex justify-center items-center"
        >
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
                {({ setFieldValue }) => (
                  <Form>
                    <div className="mb-[18px] flex flex-col gap-[14px]">
                      <label className="text-[#000] text-[16px] font-[400] w-full">
                        No.Favorites
                      </label>
                      <div className="relative">
                        <Field
                          type="text"
                          name="noFavorites"
                          placeholder="Search of No.Favorites"
                          className="bg-[#fff] w-full placeholder:text-[#808080B] text-[#808080] text-[14px] placeholder:font-[300] font-[400] focus:outline-none rounded-2xl border-2 border-[#C4D9F2] h-[57px] px-[20px] py-[18px] pr-[40px]"
                        />
                        <ErrorMessage
                          name="noFavorites"
                          component="div"
                          className="text-red-500"
                        />
                        <span className="absolute right-[10px] top-[10px] bottom-[10px] border-2 border-[#C4D9F2] flex items-center justify-center rounded-[6px] cursor-pointer w-[36px] h-[36px]">
                          <SearchIcon width="16" height="16" />
                        </span>
                      </div>
                    </div>

                    <div className="mb-[18px] flex flex-col gap-[14px]">
                      <label className="text-[#000] text-[16px] font-[400] w-full">
                        City
                      </label>
                      <div className="relative">
                        <Field
                          type="text"
                          name="city"
                          placeholder="Enter the City"
                          className="bg-[#fff] w-full placeholder:text-[#808080B] text-[#808080] text-[14px] placeholder:font-[300] font-[400] focus:outline-none rounded-2xl border-2 border-[#C4D9F2] h-[57px] px-[20px] py-[18px] pr-[40px]"
                        />
                        <ErrorMessage
                          name="city"
                          component="div"
                          className="text-red-500"
                        />
                        <span className="absolute right-[10px] top-[10px] bottom-[10px] border-2 border-[#C4D9F2] flex items-center justify-center rounded-[6px] cursor-pointer w-[36px] h-[36px]">
                          <LocationIcon width="24" height="24" />
                        </span>
                      </div>
                    </div>

                    <div className="mb-[18px]">
                      <label className="text-[#000] text-[16px]">
                        Subscription status
                      </label>
                      <Select
                        className="bg-white"
                        options={subscriptionOptions}
                        placeholder="Select Subscription Status"
                        name="subscriptionStatus"
                        onChange={(option) =>
                          setFieldValue("subscriptionStatus", option.value)
                        }
                      />
                      <ErrorMessage
                        name="subscriptionStatus"
                        component="div"
                        className="text-red-500"
                      />
                    </div>

                    <div className="mb-[18px] flex flex-col gap-[14px]">
                      <label className="text-[#000] text-[16px] font-[400] w-full">
                        No.Clicks
                      </label>
                      <div className="relative">
                        <Field
                          type="text"
                          name="noClicks"
                          placeholder="Enter the No.Clicks"
                          className="bg-[#fff] w-full placeholder:text-[#808080B] text-[#808080] text-[14px] placeholder:font-[300] font-[400] focus:outline-none rounded-2xl border-2 border-[#C4D9F2] h-[57px] px-[20px] py-[18px] pr-[40px]"
                        />
                        <ErrorMessage
                          name="noClicks"
                          component="div"
                          className="text-red-500"
                        />
                        <span className="absolute right-[10px] top-[10px] bottom-[10px] border-2 border-[#C4D9F2] flex items-center justify-center rounded-[6px] cursor-pointer w-[36px] h-[36px]">
                          <MouseIcon />
                        </span>
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
                        onClick={() => setReportCustomerFilterModal(false)}
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

export default ReportCustomerFilterModal;
