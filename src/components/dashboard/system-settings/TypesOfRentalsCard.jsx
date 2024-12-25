import { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Input from "../../../components/common/Input";
import Button from "../../../components/common/Button";
import UnlockIcon from "../../../assets/icons/UnlockIcon";
import TrashIcon from "../../../assets/icons/TrashIcon";
import EditIcon from "../../../assets/icons/EditIcon";

const TypesOfRentalsCard = () => {
  const [rentalTypes, setRentalTypes] = useState([
    "Annual",
    "Monthly",
    "6 Months",
  ]);

  // Validation schema
  const validationSchema = Yup.object().shape({
    typeName: Yup.string()
      .required("Type Name is required")
      .min(3, "Type Name must be at least 3 characters")
      .max(50, "Type Name cannot exceed 50 characters"),
  });

  const handleDelete = (type) => {
    setRentalTypes(rentalTypes.filter((rentalType) => rentalType !== type));
  };

  return (
    <div className="bg-white rounded-[20px] p-5">
      <Formik
        initialValues={{
          typeName: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          setRentalTypes([...rentalTypes, values.typeName]);
          resetForm();
        }}
      >
        {({ resetForm }) => (
          <Form className="pb-[30px] grid grid-cols-2 gap-x-[20px] border-b-2 border-[#E0E4EC]">
            <div className="col-span-1">
              <Field
                name="typeName"
                render={({ field }) => (
                  <Input
                    label="Types Name"
                    placeholder="Enter your Types Name"
                    {...field}
                  />
                )}
              />
              <ErrorMessage
                name="typeName"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="col-span-2 flex justify-end gap-x-[20px]">
              <Button text="Add Types" variant="primary" type="submit" />
              <Button
                text="Cancel"
                variant="secondary"
                type="button"
                onClick={() => resetForm()}
              />
            </div>
          </Form>
        )}
      </Formik>

      <div className="flex gap-x-[15px] mt-[30px] gap-y-[20px] flex-wrap items-center">
        {rentalTypes.map((type, index) => (
          <div
            key={index}
            className="flex gap-[10px] items-center rounded-[15px] px-[20px] py-[16px] border border-[#C4D9F2]"
          >
            <span className="text-[16px] text-[#000929] font-[700]">
              {type}
            </span>
            <div className="flex gap-[10px] items-center">
              <button onClick={() => handleDelete(type)}>
                <TrashIcon />
              </button>
              <UnlockIcon />
              <EditIcon />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TypesOfRentalsCard;
