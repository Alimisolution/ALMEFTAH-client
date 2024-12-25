import { useFormik } from "formik";
import * as Yup from "yup";
import favIconImg from "../../../assets/images/logo/favicon.png";
import logoImg from "../../../assets/images/logo/logo.png";
import Button from "../../../components/common/Button";

const ThemeCard = () => {
  const formik = useFormik({
    initialValues: {
      favicon: null,
      logo: null,
      theme: [],
    },
    validationSchema: Yup.object({
      favicon: Yup.mixed().required("Favicon image is required").test(
        "fileType",
        "Unsupported File Format. Please upload a PNG or JPG.",
        (value) => {
          if (!value) return true; 
          return value && (value.type === "image/png" || value.type === "image/jpeg");
        }
      ),
      logo: Yup.mixed().required("Company logo is required").test(
        "fileType",
        "Unsupported File Format. Please upload a PNG or JPG.",
        (value) => {
          if (!value) return true; 
          return value && (value.type === "image/png" || value.type === "image/jpeg");
        }
      ),
    }),
    onSubmit: (values) => {
      console.log(values);
      // Handle form submission logic here
    },
  });

  const handleFaviconChange = (event) => {
    const file = event.currentTarget.files[0];
    formik.setFieldValue("favicon", file);
  };

  const handleLogoChange = (event) => {
    const file = event.currentTarget.files[0];
    formik.setFieldValue("logo", file);
  };

  const handleThemeChange = (theme) => {
    if (formik.values.theme.includes(theme)) {
      formik.setFieldValue("theme", formik.values.theme.filter(t => t !== theme));
    } else {
      formik.setFieldValue("theme", [...formik.values.theme, theme]);
    }
  };

  return (
    <form onSubmit={formik.handleSubmit} className="p-5 bg-white rounded-2xl">
      <h2 className="text-[20px] text-[#000] font-[700] pb-[10px] border-b-[2px] border-[#E0E4EC]">
        Logo
      </h2>
      <div className="flex flex-col gap-[20px] mt-[30px]">
        <div className="flex gap-[20px] items-center">
          <label className="text-[9px] text-[#4C535F] font-[500] p-[14px] w-[90px] h-[92px] bg-[#F7F7FD] rounded-[6px] border-dashed border border-[#4C535F] flex flex-col gap-[10px] text-center justify-center items-center">
            <input
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleFaviconChange}
              className="hidden"
            />
            <img src={favIconImg} className="w-full" alt="" />
            Favicon
          </label>
          <div>
            <h3 className="text-[20px] text-[#000] font-[500] leading-normal">
              Favicon Icon
            </h3>
            <strong className="text-[10px] text-[#0A62CC] font-[500] leading-normal">
              Please attach a photo of the Logo in PNG or JPG format{" "}
            </strong>
            {formik.touched.favicon && formik.errors.favicon && (
              <div className="text-red-500">{formik.errors.favicon}</div>
            )}
          </div>
        </div>
        <div className="flex gap-[20px] items-center">
          <label className="text-[9px] text-[#4C535F] font-[500] px-[5px] w-[121px] h-[92px] bg-[#F7F7FD] rounded-[6px] border-dashed border border-[#4C535F] flex flex-col gap-[10px] text-center justify-center items-center">
            <input
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleLogoChange}
              className="hidden"
            />
            <img src={logoImg} className="w-full cover" alt="" />
            Company Logo
            </label>
          <div>
            <h3 className="text-[20px] text-[#000] font-[500] leading-normal">
              Company Logo
            </h3>
            <strong className="text-[10px] text-[#0A62CC] font-[500] leading-normal">
              Please attach a photo of the Logo in PNG or JPG format{" "}
            </strong>
            {formik.touched.logo && formik.errors.logo && (
              <div className="text-red-500">{formik.errors.logo}</div>
            )}
          </div>
        </div>
      </div>
      <h2 className="text-[20px] text-[#000] font-[700] pb-[10px] border-b-[2px] border-[#E0E4EC] mt-[20px]">
        Theme
      </h2>
      <div className="flex gap-[20px] mt-[30px]">
        <div className="border border-[#C4D9F2] rounded-[10px] bg-white w-[175px] h-[119px] p-[7px] flex flex-col items-center">
          <div
            className="rounded-[10px] h-[60px] w-full mb-[14px]"
            style={{
              background:
                "linear-gradient(180deg, #4BDCD5 0%, #1EAFCA 50%, #0A62CC 100%)",
            }}
          ></div>
          <input
            type="checkbox"
            onChange={() => handleThemeChange("theme1")}
            checked={formik.values.theme.includes("theme1")}
          />
        </div>

        <div className="border border-[#C4D9F2] rounded-[10px] bg-white w-[175px] h-[119px] p-[7px] flex flex-col items-center">
          <div
            className="rounded-[10px] h-[60px] w-full mb-[14px]"
            style={{
              background:
                "linear-gradient(180deg, #F9C379 0%, #FC895C 50%, #D40F7B 100%)",
            }}
          ></div>
          <input
            type="checkbox"
            onChange={() => handleThemeChange("theme2")}
            checked={formik.values.theme.includes("theme2")}
          />
        </div>
      </div>
      <div className="flex justify-end items-center gap-[20px] mt-[50px]">
        <Button text="Save" variant="primary" type="submit" />
        <Button text="Reset" variant="secondary" type="button" onClick={formik.handleReset} />
      </div>
    </form>
  );
};

export default ThemeCard;