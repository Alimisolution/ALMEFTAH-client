import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Input from "../../../components/common/Input";
import Button from "../../../components/common/Button";
import UnlockIcon from "../../../assets/icons/UnlockIcon";
import TrashIcon from "../../../assets/icons/TrashIcon";
import EditIcon from "../../../assets/icons/EditIcon";

const validationSchema = Yup.object({
  amenitiesName: Yup.string()
    .required("Amenities Name is required")
    .min(3, "Amenities Name should be at least 3 characters long"),
});

const AmenitiesCard = () => {
  return (
    <div className="bg-white rounded-[20px] p-5">
      <Formik
        initialValues={{
          amenitiesName: "", 
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Form values:", values);
          resetForm();
        }}
      >
        {({ values, handleChange, handleBlur, touched, errors }) => (
          <Form>
            <div className="pb-[30px] grid grid-cols-2 gap-x-[20px] border-b-2 border-[#E0E4EC]">
              <div className="col-span-1">
                <Input
                  label="Amenities Name"
                  placeholder="Enter your Amenities Name"
                  name="amenitiesName"
                  type="text"
                  value={values.amenitiesName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.amenitiesName && errors.amenitiesName && (
                  <div className="text-red-500 text-sm">
                    <ErrorMessage name="amenitiesName" />
                  </div>
                )}
              </div>
              <div className="col-span-2 flex justify-end gap-x-[20px]">
                <Button
                  text="Add Amenities"
                  variant="primary"
                  type="submit"
                />
                <Button
                  text="Cancel"
                  variant="secondary"
                  type="button"
                  onClick={() => values.amenitiesName = ''} 
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>

      <div className="flex gap-x-[15px] mt-[30px] gap-y-[20px] flex-wrap items-center">
        {["Central A/C", "Maids Room", "Shared Spa", "Share Gym", "Concierge Service"].map((amenity) => (
          <div
            key={amenity}
            className="flex gap-[10px] items-center rounded-[15px] px-[20px] py-[16px] border border-[#C4D9F2]"
          >
            <span className="text-[16px] text-[#000929] font-[700]">{amenity}</span>
            <div className="flex gap-[10px] items-center">
              <TrashIcon />
              <UnlockIcon />
              <EditIcon />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AmenitiesCard;
