import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../../components/common/Button";
import Input from "../../../components/common/Input";
import creditCardImg1 from "../../../assets/images/credit-cards/img1.png";
import creditCardImg2 from "../../../assets/images/credit-cards/img2.png";

const AdminCreditCard = () => {
  const [isEdahabToggled, setIsEdahabToggled] = useState(true);
  const [isWaafipayToggled, setIsWaafipayToggled] = useState(false);

  const handleEdahabToggle = () => {
    setIsEdahabToggled(!isEdahabToggled);
  };

  const handleWaafipayToggle = () => {
    setIsWaafipayToggled(!isWaafipayToggled);
  };

  const formikEdahab = useFormik({
    initialValues: {
      apiKey: "",
      edahabNumber: "",
      agentCode: "",
    },
    validationSchema: Yup.object({
      apiKey: Yup.string().required("API KEY is required"),
      edahabNumber: Yup.string()
        .required("Edahab Number is required")
        .matches(/^[0-9\s]+$/, "Edahab Number must be numeric"),
      agentCode: Yup.string().required("Agent code is required"),
    }),
    onSubmit: (values) => {
      console.log("Edahab Payment Info:", values);
    },
  });

  const formikWaafipay = useFormik({
    initialValues: {
      apiKey: "",
      userId: "",
      merchantId: "",
    },
    validationSchema: Yup.object({
      apiKey: Yup.string().required("API KEY is required"),
      userId: Yup.string()
        .required("User  ID is required")
        .matches(/^[0-9\s]+$/, "User  ID must be numeric"),
      merchantId: Yup.string().required("Merchant ID is required"),
    }),
    onSubmit: (values) => {
      console.log("Waafipay Payment Info:", values);
    },
  });

  return (
    <>
      <div className="p-5 bg-white rounded-2xl mb-[30px]">
        <div className="flex items-center justify-between mb-[10px] pb-[20px] border-b-2 border-[#E0E4EC] flex-1">
          <div className="flex items-center gap-[20px]">
            <img src={creditCardImg1} alt="" />
            <span className="text-[20px] text-[#000000] font-[700]">
              Edahab
            </span>
          </div>
          <div
            onClick={handleEdahabToggle}
            className={`w-[40px] h-[20px] flex items-center rounded-full cursor-pointer ${
              isEdahabToggled ? "bg-[#0A62CC66]" : "bg-[#00000012]"
            }`}
          >
            <div
              className={`w-[16px] h-[16px] rounded-full transform transition-transform ${
                isEdahabToggled
                  ? "translate-x-[20px] bg-[#0A62CC]"
                  : "translate-x-[2px] bg-[#D9D9D9]"
              }`}
            ></div>
          </div>
        </div>
        {isEdahabToggled && (
          <form onSubmit={formikEdahab.handleSubmit}>
            <div className="grid grid-cols-2 gap-x-[30px]">
              <div>
                <Input
                  label="API KEY"
                  placeholder="Enter your API KEY"
                  name="apiKey"
                  type="text"
                  value={formikEdahab.values.apiKey}
                  onChange={formikEdahab.handleChange}
                  onBlur={formikEdahab.handleBlur}
                />
                {formikEdahab.touched.apiKey && formikEdahab.errors.apiKey && (
                  <p className="text-red-500 text-[12px] font-[500]">
                    {formikEdahab.errors.apiKey}
                  </p>
                )}
              </div>
              <div>
                <Input
                  label="Edahab Number"
                  placeholder="1234 1234 1234 1234"
                  name="edahabNumber"
                  type="text"
                  value={formikEdahab.values.edahabNumber}
                  onChange={formikEdahab.handleChange}
                  onBlur={formikEdahab.handleBlur}
                />
                {formikEdahab.touched.edahabNumber &&
                  formikEdahab.errors.edahabNumber && (
                    <p className="text-red-500 text-[12px] font-[500]">
                      {formikEdahab.errors.edahabNumber}
                    </p>
                  )}
              </div>
              <div>
                <Input
                  label="Agent Code"
                  placeholder="Enter your Agent code"
                  name="agentCode"
                  type="text"
                  value={formikEdahab.values.agentCode}
                  onChange={formikEdahab.handleChange}
                  onBlur={formikEdahab.handleBlur}
                />
                {formikEdahab.touched.agentCode &&
                  formikEdahab.errors.agentCode && (
                    <p className="text-red-500 text-[12px] font-[500]">
                      {formikEdahab.errors.agentCode}
                    </p>
                  )}
              </div>
            </div>
            <div className="flex justify-end items-center gap-[20px] mt-[20px]">
              <Button
                text="Save Payment"
                variant="primary"
                type="submit"
                className="flex-1"
              />
              <Button
                text="Reset"
                variant="secondary"
                type="button"
                onClick={formikEdahab.handleReset}
                className="flex-1"
              />
            </div>
          </form>
        )}
      </div>

      <div className="p-5 bg-white rounded-2xl mb-[30px]">
        <div className="flex items-center justify-between mb-[10px] border-b-2 border-[#E0E4EC] flex-1">
          <div className="flex items-center gap-[20px] pb-[20px]">
            <img src={creditCardImg2} alt="" />
            <span className="text-[20px] text-[#000000] font-[700]">
              Waafipay
            </span>
          </div>
          <div
            onClick={handleWaafipayToggle}
            className={`w-[40px] h-[20px] flex items-center rounded-full py-[2px] cursor-pointer ${
              isWaafipayToggled ? "bg-[#0A62CC66]" : "bg-[#00000012]"
            }`}
          >
            <div
              className={`w-[16px] h-[16px] rounded-full transform transition-transform ${
                isWaafipayToggled
                  ? "translate-x-[22px] bg-[#0A62CC]"
                  : "translate-x-[2px] bg-[#D9D9D9]"
              }`}
            ></div>
          </div>
        </div>
        {isWaafipayToggled && (
          <form onSubmit={formikWaafipay.handleSubmit}>
            <div className="grid grid-cols-2 gap-x-[30px]">
              <div>
                <Input
                  label="API KEY"
                  placeholder="Enter your API KEY"
                  name="apiKey"
                  type="text"
                  value={formikWaafipay.values.apiKey}
                  onChange={formikWaafipay.handleChange}
                  onBlur={formikWaafipay.handleBlur}
                />
                {formikWaafipay.touched.apiKey &&
                  formikWaafipay.errors.apiKey && (
                    <p className="text-red-500 text-[12px] font-[500]">
                      {formikWaafipay.errors.apiKey}
                    </p>
                  )}
              </div>
              <div>
                <Input
                  label="User  ID"
                  placeholder="1234 1234 1234 1234"
                  name="userId"
                  type="text"
                  value={formikWaafipay.values.userId}
                  onChange={formikWaafipay.handleChange}
                  onBlur={formikWaafipay.handleBlur}
                />
                {formikWaafipay.touched.userId &&
                  formikWaafipay.errors.userId && (
                    <p className="text-red-500 text-[12px] font-[500]">
                      {formikWaafipay.errors.userId}
                    </p>
                  )}
              </div>
              <div>
                <Input
                  label="Merchant ID"
                  placeholder="Enter your MERCHANT ID"
                  name="merchantId"
                  type="text"
                  value={formikWaafipay.values.merchantId}
                  onChange={formikWaafipay.handleChange}
                  onBlur={formikWaafipay.handleBlur}
                />
                {formikWaafipay.touched.merchantId &&
                  formikWaafipay.errors.merchantId && (
                    <p className="text-red-500 text-[12px] font-[500]">
                      {formikWaafipay.errors.merchantId}
                    </p>
                  )}
              </div>
            </div>
            <div className="flex justify-end items-center gap-[20px] mt-[20px]">
              <Button
                text="Save Payment"
                variant="primary"
                type="submit"
                className="flex-1"
              />
              <Button
                text="Reset"
                variant="secondary"
                type="button"
                onClick={formikWaafipay.handleReset}
                className="flex-1"
              />
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default AdminCreditCard;
