import { Formik, Form, Field, ErrorMessage } from "formik"; // Import Formik and components
import * as Yup from "yup"; // Import Yup for validation
import SearchIcon from "../../../assets/icons/SearchIcon";
import Button from "../../common/Button";
import Select from "../../common/Select";
import CalendarIcon from "../../../assets/icons/CalendarIcon";
import LocationIcon from "../../../assets/icons/LocationIcon";
import RentIcon from "../../../assets/icons/RentIcon";
import NewProjectIcon from "../../../assets/icons/NewProjectIcon";
import BuyIcon from "../../../assets/icons/BuyIcon";
import ReactSlider from "react-slider";

const FilterModal = ({ openFilterModal, setOpenFilterModal }) => {
  const validationSchema = Yup.object({
    adType: Yup.string().required("Ad type is required"),
    search: Yup.string().required("Search is required"),
    startDate: Yup.date().required("Start date is required"),
    endDate: Yup.date()
      .required("End date is required")
      .min(Yup.ref("startDate"), "End date must be after start date"),
    city: Yup.string().required("City is required"),
    propertyType: Yup.string().required("Property type is required"),
    propertyPurpose: Yup.string().required("Property purpose is required"),
    commercialProperties: Yup.boolean().oneOf(
      [true],
      "You must check the commercial properties box"
    ),
    bedroom: Yup.string().required("Bedroom is required"),
    bathroom: Yup.string().required("Bathroom is required"),
    price: Yup.array()
      .min(2, "Price range is required")
      .required("Price range is required"),
  });

  const initialValues = {
    adType: "",
    search: "",
    startDate: "",
    endDate: "",
    city: "",
    propertyType: "",
    propertyPurpose: "",
    commercialProperties: false,
    bedroom: "",
    bathroom: "",
    price: [0, 1000000],
  };
  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
  ];

  const handleModalClose = () => {
    setOpenFilterModal(false);
  };

  return (
    <>
      {openFilterModal && (
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
                {({ setFieldValue, values }) => (
                  <Form>
                    <div className="mb-[18px] flex flex-col gap-[14px]">
                      <label className="text-[#000] text-[16px] font-[400] w-full">
                        Ad type
                      </label>
                      <div className="flex gap-[13px]">
                        {["ALMEFTAH", "Agencys"].map((type) => (
                          <button
                            key={type}
                            type="button"
                            className={`text-[16px] text-[#000] font-[500] h-[57px] border-2 rounded-[16px] flex-1 bg-white ${
                              values.adType === type
                                ? "border-[#0A62CC]"
                                : "border-[#C4D9F2]"
                            }`}
                            onClick={() => setFieldValue("adType", type)}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                      <ErrorMessage
                        name="adType"
                        component="div"
                        className="text-red-500"
                      />
                    </div>

                    <div className="mb-[18px] flex flex-col gap-[14px]">
                      <label className="text-[#000] text-[16px] font-[400] w-full">
                        Search
                      </label>
                      <div className="relative">
                        <Field
                          type="text"
                          name="search"
                          placeholder="Search of Agencys"
                          className="bg-[#fff] w-full placeholder:text-[#808080B] text-[#808080] text-[14px] placeholder:font-[300] font-[400] focus:outline-none rounded-2xl border-2 border-[#C4D9F2] h-[57px] px-[20px] py-[18px] pr-[40px]"
                        />
                        <ErrorMessage
                          name="search"
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
                        Start date
                      </label>
                      <div className="relative">
                        <Field
                          type="date"
                          name="startDate"
                          className="bg-[#fff] w-full placeholder:text-[#808080B] text-[#808080] text-[14px] placeholder:font-[300] font-[400] focus:outline-none rounded-2xl border-2 border-[#C4D9F2] h-[57px] px-[20px] py-[18px]"
                        />
                        <ErrorMessage
                          name="startDate"
                          component="div"
                          className="text-red-500"
                        />
                        <span className="absolute right-[10px] top-[10px] bottom-[10px] border-2 border-[#C4D9F2] flex items-center justify-center rounded-[6px] cursor-pointer w-[36px] h-[36px]">
                          <CalendarIcon width="18" height="20" />
                        </span>
                      </div>
                    </div>

                    <div className="mb-[18px] flex flex-col gap-[14px]">
                      <label className="text-[#000] text-[16px] font-[400] w-full">
                        End date
                      </label>
                      <div className="relative">
                        <Field
                          type="date"
                          name="endDate"
                          className="bg-[#fff] w-full placeholder:text-[#808080B] text-[#808080] text-[14px] placeholder:font-[300] font-[400] focus:outline-none rounded-2xl border-2 border-[#C4D9F2] h-[57px] px-[20px] py-[18px]"
                        />
                        <ErrorMessage
                          name="endDate"
                          component="div"
                          className="text-red-500"
                        />
                        <span className="absolute right-[10px] top-[10px] bottom-[10px] border-2 border-[#C4D9F2] flex items-center justify-center rounded-[6px] cursor-pointer w-[36px] h-[36px]">
                          <CalendarIcon width="18" height="20" />
                        </span>
                      </div>
                    </div>

                    <div className="mb-[18px]">
                      <Select
                        className="bg-white"
                        options={options}
                        placeholder="Select Property Type"
                        name="propertyType"
                        onChange={(option) =>
                          setFieldValue("propertyType", option.value)
                        }
                      />
                      <ErrorMessage
                        name="propertyType"
                        component="div"
                        className="text-red-500"
                      />
                    </div>

                    <div className="mb-[18px] flex flex-col gap-[14px]">
                      <label className="text-[#000] text-[16px] font-[400] w-full">
                        City
                      </label>{" "}
                      <div className="relative">
                        <Field
                          type="text"
                          name="city"
                          placeholder="City, community or building"
                          className="bg-[#fff] w-full placeholder:text-[#808080B] text-[#808080] text-[14px] placeholder:font-[300] font-[400] focus:outline-none rounded-2xl border-2 border-[#C4D9F2] h-[57px] px-[20px] py-[18px]"
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

                    <h3 className="text-[#000] text-[18px] font-[600] leading-[19.8px] tracking-[-0.18px] mb-[20px]">
                      Property Purpose
                    </h3>
                    <div className="flex justify-between mt-[20px] mb-[8px] h-[56px] pb-[10px] border-b border-[#E2E8F0]">
                      {["Rent", "Buy", "New projects"].map((purpose) => (
                        <div
                          key={purpose}
                          onClick={() =>
                            setFieldValue("propertyPurpose", purpose)
                          }
                          className={`text-[#100A55] text-[18px] font-[500] leading-[26.1px] tracking-[-0.09px] flex items-center gap-[8px] cursor-pointer ${
                            values.propertyPurpose === purpose
                              ? "border-[#0A62CC] border-2 rounded-[6px] p-[10px]"
                              : ""
                          }`}
                        >
                          {purpose === "Rent" && (
                            <RentIcon
                              color={
                                values.propertyPurpose === "Rent"
                                  ? "#0A62CC"
                                  : "#100A55"
                              }
                            />
                          )}
                          {purpose === "Buy" && <BuyIcon />}
                          {purpose === "New projects" && <NewProjectIcon />}
                          {purpose}
                        </div>
                      ))}
                    </div>
                    <ErrorMessage
                      name="propertyPurpose"
                      component="div"
                      className="text-red-500 text-sm"
                    />

                    <div className="pb-[19px] pt-[11px] mb-[20px] border-b border-[#E2E8F0]">
                      <div className="flex items-center gap-[5px]">
                        <Field
                          type="checkbox"
                          name="commercialProperties"
                          className="w-[20px] h-[20px]"
                        />
                        <label className="text-[#000] text-[16px] font-[500] ml-[8px]">
                          View commercial properties only
                        </label>
                      </div>
                      <ErrorMessage
                        name="commercialProperties"
                        component="div"
                        className="text-red-500 text-sm mt-2"
                      />
                    </div>

                    <div>
                      <h2 className="text-[#000929] text-[20px] font-[500] leading-[22px] tracking-[-0.2px] mb-[20px]">
                        Beds & Baths
                      </h2>
                      <h3 className="text-[#000] text-[18px] font-[600] leading-[19.8px] tracking-[-0.18px] mb-[20px]">
                        Bedrooms
                      </h3>
                      <div className="flex flex-wrap gap-[10px] mb-[20px]">
                        {["studio", "1", "2", "3", "4", "5", "6", "7+"].map(
                          (bedroom) => (
                            <div
                              key={bedroom}
                              onClick={() => setFieldValue("bedroom", bedroom)}
                              className={`text-[#000] text-[16px] font-[500] leading-[17.6px] tracking-[-0.16px] p-[10px] h-[38px] border-2 rounded-[6px] flex items-center justify-center cursor-pointer ${
                                values.bedroom === bedroom
                                  ? "border-[#0A62CC]"
                                  : "border-[#C4D9F2]"
                              }`}
                            >
                              {bedroom}
                            </div>
                          )
                        )}
                      </div>
                      <ErrorMessage
                        name="bedroom"
                        component="div"
                        className="text-red-500 text-sm"
                      />

                      <h3 className="text-[#000] text-[18px] font-[600] leading-[19.8px] tracking-[-0.18px] mb-[15px]">
                        Bathrooms
                      </h3>
                      <div className="flex flex-wrap gap-[10px] mb-[20px pb-[20px] border-b border-[#E2E8F0]">
                        {["1", "2", "3", "4", "5", "6", "7+"].map(
                          (bathroom) => (
                            <div
                              key={bathroom}
                              onClick={() =>
                                setFieldValue("bathroom", bathroom)
                              }
                              className={`text-[#000] text-[16px] font-[500] leading-[17.6px] tracking-[-0.16px] p-[10px] h-[38px] border-2 rounded-[6px] flex items-center justify-center cursor-pointer ${
                                values.bathroom === bathroom
                                  ? "border-[#0A62CC]"
                                  : "border-[#C4D9F2]"
                              }`}
                            >
                              {bathroom}
                            </div>
                          )
                        )}
                      </div>
                      <ErrorMessage
                        name="bathroom"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>

                    <div className="pb-[20px] mb-[20px] border-b border-[#E2E8F0]">
                      <h2 className="text-[#000929] text-[20px] font-[500] leading-[22px] tracking-[-0.2px] mb-[20px]">
                        Price
                      </h2>
                      <div className="w-full flex flex-col items-center space-y-4">
                        <ReactSlider
                          className="w-full h-[6px] bg-[#C4D9F2] rounded-[10px]"
                          thumbClassName="h-5 w-5 bg-[#4BDCD5] top-1/2 -translate-y-1/2 rounded-full shadow-md cursor-pointer focus:outline-none"
                          trackClassName="h-[6px] rounded-[10px] bg-gradient-to-r from-[#4BDCD5] via-[#1EAFCA] to-[#0A62CC]"
                          min={0}
                          max={1000000}
                          value={values.price}
                          onChange={(value) => setFieldValue("price", value)} // Update state with the new value
                        />
                        <div className="w-4/5 flex justify-between text-sm font-semibold text-black">
                          <span>{`${values.price[0].toLocaleString()} $`}</span>
                          <span>{`${values.price[1].toLocaleString()} $`}</span>
                        </div>
                      </div>
                      <ErrorMessage
                        name="price"
                        component="div"
                        className="text-red-500 text-sm"
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
      )}
    </>
  );
};

export default FilterModal;
