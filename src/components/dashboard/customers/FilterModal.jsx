import { Formik, Form, Field, ErrorMessage } from "formik"; // Import Formik and components
import * as Yup from "yup"; // Import Yup for validation
import SearchIcon from "../../../assets/icons/SearchIcon";
import LocationIcon from "../../../assets/icons/LocationIcon";
import Button from "../../common/Button";
import Select from "../../common/Select";

const validationSchema = Yup.object({
  favorites: Yup.string().required("No. Favorites is required"),
  city: Yup.string().required("City is required"),
  subscriptionStatus: Yup.string().required("Subscription Status is required"),
});

const FilterModal = ({ openFilterModal, setOpenFilterModal, navigate }) => {
  const subscriptionOptions = [
    { label: "Active", value: "active" },
    { label: "Inactive", value: "inactive" },
    { label: "Pending", value: "pending" },
  ];

  return (
    openFilterModal && (
      <div className="fixed w-full inset-0 h-full z-[999] bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white absolute z-[1000] top-[20px] right-[30px] transform w-[440px] rounded-[15px]">
          <div className="overflow-auto max-h-[100vh] p-[15px]">
            <h2 className="text-[24px] font-[600] leading-[26.4px] tracking-[-0.24px] text-[#000929] mb-[17px]">
              Filter..
            </h2>

            <Formik
              initialValues={{
                favorites: "",
                city: "",
                subscriptionStatus: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                console.log(values)
                navigate("/super-dashboard/agencys-details");
                setOpenFilterModal(false);
              }}
            >
              {({ setFieldValue}) => (
                <Form>
                  {/* No.Favorites */}
                  <div className="mb-[18px] flex flex-col gap-[14px]">
                    <label className="text-[#000] text-[16px] font-[400] w-full">
                      No.Favorites
                    </label>
                    <div className="relative">
                      <Field
                        type="text"
                        name="favorites"
                        placeholder="Search for No.Ads"
                        className="bg-[#fff] w-full text-[#808080] text-[14px] rounded-2xl border-2 border-[#C4D9F2] h-[57px] px-[20px] py-[18px]"
                      />
                      <ErrorMessage
                        name="favorites"
                        component="div"
                        className="text-red-500 text-[12px] mt-2"
                      />
                      <span className="absolute right-[10px] top-[10px] flex items-center justify-center rounded-[6px] cursor-pointer w-[36px] h-[36px]">
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
                        className="bg-[#fff] w-full text-[#808080] text-[14px] rounded-2xl border-2 border-[#C4D9F2] h-[57px] px-[20px] py-[18px]"
                      />
                      <ErrorMessage
                        name="city"
                        component="div"
                        className="text-red-500 text-[12px] mt-2"
                      />
                      <span className="absolute right-[10px] top-[10px] flex items-center justify-center rounded-[6px] cursor-pointer w-[36px] h-[36px]">
                        <LocationIcon width="24" height="24" />
                      </span>
                    </div>
                  </div>

                  <div className="mb-[18px] flex flex-col">
                    <label className="text-[#000] text-[16px] font-[400] w-full">
                      Subscription Status
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
                      className="text-red-500 text-[12px] mt-2"
                    />
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
                      onClick={() => setOpenFilterModal(false)}
                    />
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    )
  );
};

export default FilterModal;
