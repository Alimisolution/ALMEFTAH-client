import { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import CameraIcon from "../../../assets/icons/CameraIcon";
import Input from "../../../components/common/Input";
import Button from "../../../components/common/Button";
import TrashIcon from "../../../assets/icons/TrashIcon";
import EditIcon from "../../../assets/icons/EditIcon";
import UnlockIcon from "../../../assets/icons/UnlockIcon";
import BedRoomIcon from "../../../assets/icons/BedRoomIcon.jsx";
import BathRoomIcon from "../../../assets/icons/BathRoomIcon.jsx";
import NearPlaceIcon from "../../../assets/icons/NearPlaceIcon.jsx";
import RecipitionIcon from "../../../assets/icons/RecipitionIcon.jsx";
import ParkingIcon from "../../../assets/icons/ParkingIcon.jsx";
import KitchenIcon from "../../../assets/icons/KitchenIcon.jsx";

const FeaturesCard = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedFeature, setSelectedFeature] = useState(null);

  const featureTypes = [
    { name: "Bedroom", icon: <BedRoomIcon /> },
    { name: "Bathrooms", icon: <BathRoomIcon /> },
    { name: "Total area", icon: <NearPlaceIcon /> },
    { name: "Car garage", icon: <RecipitionIcon /> },
    { name: "Lounge", icon: <ParkingIcon /> },
    { name: "Kitchen", icon: <KitchenIcon /> },
  ];

  const validationSchema = Yup.object().shape({
    featureName: Yup.string()
      .required("Feature name is required")
      .min(3, "Feature name must be at least 3 characters"),
    featureIcon: Yup.mixed().required("Feature image is required"),
  });

  return (
    <Formik
      initialValues={{
        featureName: "",
        featureIcon: null,
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log(values);
        setSubmitting(false);
        resetForm();
      }}
    >
      {({ setFieldValue }) => (
        <Form className="bg-white rounded-[20px] p-5">
          <div className="flex items-center flex-wrap gap-[32px]">
            <div className="flex gap-[20px] items-center mb-[20px]">
              <div className="text-[9px] text-[#4C535F] font-[500] p-[14px] w-[90px] h-[92px] bg-[#F7F7FD] rounded-[6px] border-dashed border border-[#4C535F] flex flex-col gap-[10px] text-center justify-center items-center">
                <CameraIcon />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(event) => {
                    const file = event.currentTarget.files[0];
                    setFieldValue("featureIcon", file);
                    setImagePreview(URL.createObjectURL(file));
                  }}
                  style={{ display: "none" }}
                  id="featureIconUpload"
                />
                <label htmlFor="featureIconUpload" className="cursor-pointer">
                  Upload your photo
                </label>
              </div>
              <div>
                <h3 className="text-[20px] text-[#000] font-[500] leading-normal">
                  Feature Icon
                </h3>
                <strong className="text-[10px] text-[#0A62CC] font-[500] leading-normal">
                  Please attach a photo of the Icon in SVG format
                </strong>
                <ErrorMessage
                  name="featureIcon"
                  component="div"
                  className="text-red-500"
                />
              </div>
            </div>
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="w-[90px] h-[90px] rounded"
              />
            )}
            <div className="flex flex-col flex-1 max-w-full">
              <Field name="featureName">
                {({ field }) => (
                  <Input
                    label="Feature Name"
                    placeholder="Enter your Feature Name"
                    {...field}
                  />
                )}
              </Field>
              <ErrorMessage
                name="featureName"
                component="div"
                className="text-red-500"
              />
            </div>
          </div>

          <div className="flex justify-end items-center gap-[20px] pb-[30px] border-b-2 border-[#E0E4EC]">
            <Button text="Add Feature" variant="primary" type="submit" />
            <Button
              text="Cancel"
              variant="secondary"
              type="button"
              onClick={() => {
                setFieldValue("featureName", "");
                setFieldValue("featureIcon", null);
                setImagePreview(null);
              }}
            />
          </div>

          <div className="flex gap-x-[15px] mt-[30px] gap-y-[20px] flex-wrap items-center">
            {featureTypes.map((type, index) => (
              <div
                key={index}
                className={`flex gap-[10px] items-center rounded-[15px] px-[20px] py-[16px] border border-[#C4D9F2] cursor-pointer ${
                  selectedFeature === type.name ? "bg-[#E0F7FA]" : ""
                }`}
                onClick={() => setSelectedFeature(type.name)}
              >
                {type.icon}
                <span className="text-[16px] text-[#000929] font-[700]">
                  {type.name}
                </span>
                <div className="flex gap-[10px] items-center">
                  <TrashIcon />
                  <UnlockIcon />
                  <EditIcon />
                </div>
              </div>
            ))}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FeaturesCard;
