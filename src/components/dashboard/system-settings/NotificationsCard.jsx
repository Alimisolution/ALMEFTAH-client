import { useFormik } from "formik";
import * as Yup from "yup";
import CameraIcon from "../../../assets/icons/CameraIcon";
import Input from "../../../components/common/Input";
import Button from "../../../components/common/Button";
import Select from "../../../components/common/Select.jsx";

const customerOptions = [
  { label: "Customer 1", value: "customer1" },
  { label: "Customer 2", value: "customer2" },
  { label: "Customer 3", value: "customer3" },
];

const NotificationsCard = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      customer: "",
      image: null,
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      description: Yup.string().required("Description is required"),
      customer: Yup.string().required("Please select a customer"),
      image: Yup.mixed()
        .required("An image file is required")
        .test(
          "fileType",
          "Unsupported File Format. Please upload a PNG or JPG.",
          (value) => {
            if (!value) return true;
            return (
              value &&
              (value.type === "image/png" || value.type === "image/jpeg")
            );
          }
        ),
    }),
    onSubmit: (values) => {
      console.log(values);
      // Handle form
    },
  });

  const handleImageChange = (event) => {
    const file = event.currentTarget.files[0];
    formik.setFieldValue("image", file);
  };

  return (
    <div className="p-5 bg-white rounded-2xl ">
      <h2 className="text-[20px] text-[#000] font-[700] pb-[10px] border-b-[2px] border-[#E0E4EC]">
        Notifications
      </h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex gap-[20px] mt-[30px]">
          <div className="flex items-center border-2 border-[#C4D9F2] py-[13px] px-[15px] rounded-[8px]">
            <label className="mr-[10px]">Agencys</label>
            <input type="checkbox" />
          </div>
          <div className="flex items-center border-2 border-[#C4D9F2] py-[13px] px-[15px] rounded-[8px]">
            <label className="mr-[10px]">Customer</label>
            <input type="checkbox" />
          </div>
          <div className="flex items-center border-2 border-[#C4D9F2] py-[13px] px-[15px] rounded-[8px]">
            <label className="mr-[10px]">Super</label>
            <input type="checkbox" />
          </div>
        </div>
        <div className="flex gap-[20px] items-center mb-[20px] mt-[30px]">
          <label className="text-[9px] text-[#4C535F] font-[500] p-[14px] w-[90px] h-[92px] bg-[#F7F7FD] rounded-[6px] border-dashed border border-[#4C535F] flex flex-col gap-[10px] text-center justify-center items-center">
            <CameraIcon />
            <input
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleImageChange}
              className="hidden"
            />
            Upload your photo
          </label>
          <div>
            <h3 className="text-[20px] text-[#000] font-[500] leading-normal">
              Image{" "}
            </h3>
            <strong className="text-[10px] text-[#0A62CC] font-[500] leading-normal">
              Please attach a photo of the Image in PNG or JPG format{" "}
            </strong>
            {formik.touched.image && formik.errors.image && (
              <div className="text-red-500">{formik.errors.image}</div>
            )}
          </div>
        </div>
        <div className="grid gap-x-[20px] grid-cols-2">
          <div>
          <Input
            label="Title"
            placeholder="Enter your title"
            name="title"
            type="text"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.title && formik.errors.title && (
            <div className="text-red-500">{formik.errors.title}</div>
          )}
          </div>
          <div>
          <Input
            label="Description"
            placeholder="Enter your description"
            name="description"
            type="text"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.description && formik.errors.description && (
            <div className="text-red-500">{formik.errors.description}</div>
          )}
          </div>
          <div className="">
            <label
              htmlFor="customer"
              className="text-[#000] text-[16px] font-[500] w-full mb-[14px] block"
            >
              Customer
            </label>
            <Select
              className="bg-white"
              options={customerOptions}
              placeholder="Select The Customer"
              name="customer"
              value={customerOptions.find(
                (option) => option.value === formik.values.customer
              )}
              onChange={(option) =>
                formik.setFieldValue("customer", option.value)
              }
              error={formik.touched.customer && formik.errors.customer}
            />
            {formik.touched.customer && formik.errors.customer && (
              <div className="text-red-500">{formik.errors.customer}</div>
            )}
          </div>
        </div>
        <div className="flex justify-end items-center gap-[20px] mt-[50px]">
          <Button text="Send" variant="primary" type="submit" />
          <Button
            text="Reset"
            variant="secondary"
            type="button"
            onClick={formik.handleReset}
          />
        </div>
      </form>
    </div>
  );
};

export default NotificationsCard;
