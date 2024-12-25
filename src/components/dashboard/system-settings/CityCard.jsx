import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../../components/common/Input";
import Button from "../../../components/common/Button";
import UnlockIcon from "../../../assets/icons/UnlockIcon";
import TrashIcon from "../../../assets/icons/TrashIcon";
import EditIcon from "../../../assets/icons/EditIcon";

const CityCard = () => {
  const formik = useFormik({
    initialValues: {
      city: "",
    },
    validationSchema: Yup.object({
      city: Yup.string().required("City is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log("City added:", values.city);
      resetForm();
    },
  });

  return (
    <div className="p-4 bg-white rounded-[20px]">
      <form onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-2 mb-[12px]">
       <div>
          <Input
            label="City"
            placeholder="Enter your City"
            name="city"
            type="text"
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.city && formik.errors.city && (
            <div className="text-red-500">{formik.errors.city}</div>
          )}
          </div>
        </div>
        <div className="flex items-center justify-end gap-[20px] mb-[30px] border-b-2 border-[#E0E4EC] pb-[30px]">
          <Button text="Add City" variant="primary" type="submit" />
          <Button text="Cancel" variant="secondary" type="button" onClick={formik.handleReset} />
        </div>
      </form>
      <div className="flex gap-x-[15px] mt-[30px] gap-y-[20px] flex-wrap items-center">
        {["Muqdisho", "Hargeisa", "Bosaso", "Gaalkacyo", "Berbera"].map((city) => (
          <div key={city} className="flex gap-[10px] items-center rounded-[15px] px-[20px] py-[16px] border border-[#C4D9F2]">
            <span className="text-[16px] text-[#000929] font-[700]">{city}</span>
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

export default CityCard;