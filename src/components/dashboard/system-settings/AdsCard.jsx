import { useFormik } from "formik";
import * as Yup from "yup";
import CameraIcon from "../../../assets/icons/CameraIcon";
import Input from "../../../components/common/Input";
import Button from "../../../components/common/Button";
import adsImg from "../../../assets/images/system-settings/img.png";

const AdsCard = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      image: null,
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      description: Yup.string().required("Description is required"),
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
      // Handle form submission 
    },
  });

  const handleImageChange = (event) => {
    const file = event.currentTarget.files[0];
    formik.setFieldValue("image", file);
  };

  return (
    <div className="p-4 bg-white rounded-[20px]">
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
      <form onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-2 gap-x-[30px]">
          <div>
          <Input
            label="Title"
            placeholder="Search for Real estate"
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
            placeholder="Get the best results based on your location"
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
        </div>
        <div className="flex justify-end items-center gap-[20px] mt-[12px] mb-[30px] pb-[30px] border-b-[2px] border-[#E0E4EC]">
          <div className="">
            <Button text="Update" variant="primary" type="submit" />
          </div>
          <div className="">
            <Button
              text="Reset"
              variant="secondary"
              type="button"
              onClick={formik.handleReset}
            />
          </div>
        </div>
      </form>
      <div className="relative rounded-2xl border-[2px] border-[#0A62CC] h-[177.223px] w-full overflow-hidden">
        <img
          src={adsImg}
          alt=""
          className="h-full w-full object-cover absolute z-10"
        />
        <div className="absolute z-20 top-0 left-0 w-full h-full bg-gradient-to-r from-[#4BDCD5]/60 via-[#1EAFCA]/60 to-[#0A62CC]/60"></div>
        <div className="relative z-30 flex flex-col px-[25px] justify-center h-full w-full text-[20px] text-white font-[700] leading-[22px] tracking-[-0.2px]">
          <h3 className="text-[20px] text-[#fff] font-[700] leading-[22px] tracking-[-0.2px] mb-[20px]">
            {formik.values.title || "Search for Real estate"}
          </h3>
          <p className="text-[15px] text-[#fff] font-[400] leading-[16.5px] tracking-[-0.15px]">
            {formik.values.description ||
              "Get the best results based on your location"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdsCard;
