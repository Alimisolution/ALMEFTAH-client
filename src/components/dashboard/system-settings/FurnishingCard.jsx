import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Input from "../../../components/common/Input";
import Button from "../../../components/common/Button";
import UnlockIcon from "../../../assets/icons/UnlockIcon";
import TrashIcon from "../../../assets/icons/TrashIcon";
import EditIcon from "../../../assets/icons/EditIcon";

const validationSchema = Yup.object({
  furnishingName: Yup.string()
    .required("Furnishing Name is required")
    .min(3, "Furnishing Name should be at least 3 characters long"),
});

const FurnishingCard = () => {
  return (
    <div className="bg-white rounded-[20px] p-5">
      <Formik
        initialValues={{
          furnishingName: "", 
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("Form values:", values);
        }}
      >
        {({ values, handleChange, handleBlur, touched, errors }) => (
          <Form>
            <div className="pb-[30px] grid grid-cols-2 gap-x-[20px] border-b-2 border-[#E0E4EC]">
              <div className="col-span-1">
                <Input
                  label="Furnishing Name"
                  placeholder="Enter your Furnishing Name"
                  name="furnishingName"
                  type="text"
                  value={values.furnishingName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.furnishingName && errors.furnishingName && (
                  <div className="text-red-500 text-sm">
                    <ErrorMessage name="furnishingName" />
                  </div>
                )}
              </div>
              <div className="col-span-2 flex justify-end gap-x-[20px]">
                <Button
                  text="Add Furnishing"
                  variant="primary"
                  type="submit"
                />
                <Button
                  text="Cancel"
                  variant="secondary"
                  type="button"
                  onClick={() => values.furnishingName = ''} 
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>

      <div className="flex gap-x-[15px] mt-[30px] gap-y-[20px] flex-wrap items-center">
        {["All furnishings", "Furnished", "Unfurnished", "Partly furnished"].map((furnishing) => (
          <div
            key={furnishing}
            className="flex gap-[10px] items-center rounded-[15px] px-[20px] py-[16px] border border-[#C4D9F2]"
          >
            <span className="text-[16px] text-[#000929] font-[700]">{furnishing}</span>
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

export default FurnishingCard;
