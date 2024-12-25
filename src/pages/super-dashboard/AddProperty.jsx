import HomeIcon from "../../assets/icons/HomeIcon";
import ChevronLeftIcon from "../../assets/icons/ChevronLeftIcon";
import { Link } from "react-router-dom";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Select from "../../components/common/Select"; 

const AddProperty = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    city: Yup.string().required("City is required"),
    description: Yup.string().required("Description is required"),
    state: Yup.string().required("State is required"),
    linkMap: Yup.string().url("Invalid URL").required("Link map is required"),
    price: Yup.number()
      .required("Price is required")
      .positive("Price must be a positive number"),
    contractDuration: Yup.string().required("Contract duration is required"),
    propertyType: Yup.string().required("Property type is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    whatsapp: Yup.string().required("WhatsApp link is required"),
    category: Yup.string().required("Category is required"),
  });

  const cityOptions = [
    { value: "new-york", label: "New York" },
    { value: "los-angeles", label: "Los Angeles" },
    { value: "chicago", label: "Chicago" },
    { value: "houston", label: "Houston" },
    { value: "miami", label: "Miami" },
  ];

  const contractDurationOptions = [
    { value: "short-term", label: "Short Term" },
    { value: "long-term", label: "Long Term" },
  ];

  const propertyTypeOptions = [
    { value: "house", label: "House" },
    { value: "apartment", label: "Apartment" },
    { value: "commercial", label: "Commercial" },
  ];

  const categoryOptions = [
    { value: "residential", label: "Residential" },
    { value: "commercial", label: "Commercial" },
    { value: "industrial", label: "Industrial" },
    { value: "land", label: "Land" },
  ];

  return (
    <div className="flex flex-col">
      <div className="bg-white rounded-[20px] p-5 mb-[40px]">
        <div className="flex items-center gap-[10px]">
          <HomeIcon stroke="white" />
          <Link
            to="/"
            className="text-[20px] text-[#0A62CC] font-[600] leading-[22px] tracking-[-0.2px]"
          >
            Ads
          </Link>
          <ChevronLeftIcon color="#0A62CC" width="16px" height="16px" />
          <Link
            to="/"
            className="text-[20px] text-[#0A62CC] font-[600] leading-[22px] tracking-[-0.2px]"
          >
            Add Ads
          </Link>
          <ChevronLeftIcon color="#0A62CC" width="16px" height="16px" />
          <Link
            to="/"
            className="text-[20px] text-[#0A62CC] font-[600] leading-[22px] tracking-[-0.2px]"
          >
            Details
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-[20px] p-5">
        <Formik
          initialValues={{
            title: "",
            city: "",
            description: "",
            state: "",
            linkMap: "",
            price: "",
            contractDuration: "",
            propertyType: "",
            category: "",
            email: "",
            whatsapp: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values); 
            navigate("/super-dashboard/add-property/property-features");
          }}
        >
          {({ setFieldValue }) => (
            <Form>
              <div className="grid grid-cols-2 gap-x-[30px]">
                <div className="flex flex-col">
                  <div className="flex flex-col">
                    <Field
                      label="Title"
                      name="title"
                      type="text"
                      placeholder="Enter the title"
                      component={Input}
                    />
                    <ErrorMessage
                      name="title"
                      component="div"
                      className="text-red-500 text-[12px] mb-[18px]"
                    />
                  </div>

                  <div className="flex flex-col mb-[18px]">
                    <label className="text-[#000] text-[16px] font-[500] w-full mb-[14px]">
                      City
                    </label>
                    <Select
                      className="bg-white"
                      options={cityOptions}
                      placeholder="Select a city"
                      name="city"
                      onChange={(option) => setFieldValue("city", option.value)}
                    />
                    <ErrorMessage
                      name="city"
                      component="div"
                      className="text-red-500 text-[12px] mt-[18px]"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-[14px] mb-[18px] flex-1 relative">
                  <label className="text-[#000] text-[16px] font-[500] w-full">
                    Description
                  </label>
                  <Field
                    name="description"
                    placeholder="Enter the description"
                    as="textarea"
                    className="bg-[#fff] w-full placeholder:text-[#808080B] text-[#000] text-[14px] placeholder:font-[300] font-[400] focus:outline-none rounded-2xl border-2 border-[#C4D9F2] h-[169px] px-[20px] py-[18px] pr-[40px]"
                  />
                  <ErrorMessage
                    name="description"
                    component="div"
                    className="text-red-500 text-[12px] mb-[18px]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-x-[30px]">
                <div className="flex flex-col">
                  <Field
                    label="State"
                    name="state"
                    type="text"
                    placeholder="Enter the State"
                    component={Input}
                  />
                  <ErrorMessage
                    name="state"
                    component="div"
                    className="text-red-500 text-[12px] mb-[18px]"
                  />
                </div>
                <div className="flex flex-col">
                  <Field
                    label="Link map Site"
                    name="linkMap"
                    type="text"
                    placeholder="Enter the Site link map"
                    component={Input}
                  />
                  <ErrorMessage
                    name="linkMap"
                    component="div"
                    className="text-red-500 text-[12px] mb-[18px]"
                  />
                </div>
                <div className="flex flex-col mb-[18px]">
                  <label className="text-[#000] text-[16px] font-[400] w-full mb-[14px]">
                    Category
                  </label>
                  <Select
                    className="bg-white"
                    options={categoryOptions}
                    placeholder="Select Category"
                    name="category"
                    onChange={(option) => setFieldValue("category", option.value)}
                  />
                  <ErrorMessage
                    name="category"
                    component="div"
                    className="text-red-500 text-[12px] mt-[18px]"
                  />
                </div>
                <div className="flex flex-col">
                  <Field
                    label="Price"
                    name="price"
                    type="text"
                    placeholder="Enter the price"
                    component={Input}
                  />
                  <ErrorMessage
                    name="price"
                    component="div"
                    className="text-red-500 text-[12px] mb-[18px]"
                  />
                </div>
                <div className="flex flex-col mb-[18px]">
                  <label className="text-[#000] text-[16px] font-[400] w-full mb-[14px]">
                    Contract Duration
                  </label>
                  <Select
                    className="bg-white"
                    options={contractDurationOptions}
                    placeholder="Select Contract Duration"
                    name="contractDuration"
                    onChange={(option) =>
                      setFieldValue("contractDuration", option.value)
                    }
                  />
                  <ErrorMessage
                    name="contractDuration"
                    component="div"
                    className="text-red-500 text-[12px] mt-[18px]"
                  />
                </div>
                <div className="flex flex-col mb-[18px]">
                  <label className="text-[#000] text-[16px] font-[400] w-full mb-[14px]">
                    Property Type
                  </label>
                  <Select
                    className="bg-white"
                    options={propertyTypeOptions}
                    placeholder="Select Property Type"
                    name="propertyType"
                    onChange={(option) =>
                      setFieldValue("propertyType", option.value)
                    }
                  />
                  <ErrorMessage
                    name="propertyType"
                    component="div"
                    className="text-red-500 text-[12px] mt-[18px]"
                  />
                </div>
                <div className="flex flex-col">
                  <Field
                    label="E-mail"
                    name="email"
                    type="email"
                    placeholder="Enter the E-mail"
                    component={Input}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-[12px] mb-[18px]"
                  />
                </div>
                <div className="flex flex-col">
                  <Field
                    label="WhatsApp"
                    name="whatsapp"
                    type="text"
                    placeholder="Enter the WhatsApp link"
                    component={Input}
                  />
                  <ErrorMessage
                    name="whatsapp"
                    component="div"
                    className="text-red-500 text-[12px] mb-[18px]"
                  />
                </div>
              </div>
              <div className="flex justify-end items-center gap-[20px]">
                <Button text="Publish" variant="primary" type="submit" />
                <Button text="Cancel" variant="secondary" type="button" />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddProperty;
