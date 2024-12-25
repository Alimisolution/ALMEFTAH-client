import { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import CameraIcon from "../../../assets/icons/CameraIcon";
import Input from "../../../components/common/Input";
import Button from "../../../components/common/Button";
import HouseIcon from "../../../assets/icons/HouseIcon";
import TrashIcon from "../../../assets/icons/TrashIcon";
import EditIcon from "../../../assets/icons/EditIcon";
import UnlockIcon from "../../../assets/icons/UnlockIcon";
import VillaIcon from "../../../assets/icons/VillaIcon";
import BanglowIcon from "../../../assets/icons/BanglowIcon";
import PlotIcon from "../../../assets/icons/PlotIcon";
import LandIcon from "../../../assets/icons/LandIcon";
import CommericalIcon from "../../../assets/icons/CommericalIcon";
import PentHouseIcon from "../../../assets/icons/PentHouseIcon";
import CondoIcon from "../../../assets/icons/CondoIcon";
import TownHouseIcon from "../../../assets/icons/TownHouseIcon";

const PropertyTypeCard = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedPropertyType, setSelectedPropertyType] = useState(null);

  const propertyTypes = [
    { name: "Apartment", icon: <HouseIcon /> },
    { name: "Villa", icon: <VillaIcon /> },
    { name: "Compound", icon: <BanglowIcon /> },
    { name: "Farm", icon: <PlotIcon /> },
    { name: "Duplex", icon: <LandIcon /> },
    { name: "Commercial", icon: <CommericalIcon /> },
    { name: "Whole Building", icon: <PentHouseIcon /> },
    { name: "Full Floor", icon: <CondoIcon /> },
    { name: "Hotel Apartment", icon: <TownHouseIcon /> },
  ];

  const validationSchema = Yup.object().shape({
    propertyName: Yup.string()
      .required("Property name is required")
      .min(3, "Property name must be at least 3 characters"),
    propertyIcon: Yup.mixed().required("Property image is required"),
  });

  return (
    <Formik
      initialValues={{
        propertyName: "",
        propertyIcon: null,
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
                    setFieldValue("propertyIcon", file);
                    setImagePreview(URL.createObjectURL(file));
                  }}
                  style={{ display: "none" }}
                  id="propertyIconUpload"
                />
                <label htmlFor="propertyIconUpload" className="cursor-pointer">
                  Upload your photo
                </label>
              </div>
              <div>
                <h3 className="text-[20px] text-[#000] font-[500] leading-normal">
                  Property Icon
                </h3>
                <strong className="text-[10px] text-[#0A62CC] font-[500] leading-normal">
                Please attach a photo of the Icon in SVG format                </strong>
                <ErrorMessage
                  name="propertyIcon"
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
              <Field name="propertyName">
                {({ field }) => (
                  <Input
                    label="Property Name"
                    placeholder="Enter your Property Name"
                    {...field}
                  />
                )}
              </Field>
              <ErrorMessage
                name="propertyName"
                component="div"
                className="text-red-500"
              />
            </div>
          </div>

          <div className="flex justify-end items-center gap-[20px] pb-[30px] border-b-2 border-[#E0E4EC]">
            <Button text="Add Property" variant="primary" type="submit" />
            <Button
              text="Cancel"
              variant="secondary"
              type="button"
              onClick={() => {
                setFieldValue("propertyName", "");
                setFieldValue("propertyIcon", null);
                setImagePreview(null);
              }}
            />
          </div>

          <div className="flex gap-x-[15px] mt-[30px] gap-y-[20px] flex-wrap items-center">
            {propertyTypes.map((type, index) => (
              <div
                key={index}
                className={`flex gap-[10px] items-center rounded-[15px] px-[20px] py-[16px] border border-[#C4D9F2] cursor-pointer ${
                  selectedPropertyType === type.name ? "bg-[#E0F7FA]" : ""
                }`}
                onClick={() => setSelectedPropertyType(type.name)}
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

export default PropertyTypeCard;
