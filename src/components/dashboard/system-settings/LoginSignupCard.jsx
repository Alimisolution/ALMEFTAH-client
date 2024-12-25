import { useState } from "react";
import { Formik, Form, ErrorMessage } from "formik"; 
import * as Yup from "yup";
import CameraIcon from "../../../assets/icons/CameraIcon";
import Input from "../../../components/common/Input";
import Button from "../../../components/common/Button";

const LoginSignupCard = () => {
  const [loginImagePreview, setLoginImagePreview] = useState(null);
  const [signupImagePreview, setSignupImagePreview] = useState(null);
  const [signupCompanieImagePreview, setSignupCompanieImagePreview] =
    useState(null);

  return (
    <div className="bg-white rounded-[20px] p-5">
      <Formik
        initialValues={{
          loginImage: null,
          signupImage: null,
          signupCompanieImage: null,
          loginContent: "",
          signupContent: "",
          signupCompanieContent: "",
        }}
        validationSchema={Yup.object({
          loginImage: Yup.mixed()
            .required("Please upload an image")
            .test(
              "fileFormat",
              "Only JPG and PNG formats are allowed",
              (value) =>
                value ? ["image/jpeg", "image/png"].includes(value.type) : false
            ),
          signupImage: Yup.mixed()
            .required("Please upload an image")
            .test(
              "fileFormat",
              "Only JPG and PNG formats are allowed",
              (value) =>
                value ? ["image/jpeg", "image/png"].includes(value.type) : false
            ),
          signupCompanieImage: Yup.mixed()
            .required("Please upload an image")
            .test(
              "fileFormat",
              "Only JPG and PNG formats are allowed",
              (value) =>
                value ? ["image/jpeg", "image/png"].includes(value.type) : false
            ),
          loginContent: Yup.string().required("Login content is required"),
          signupContent: Yup.string().required("Sign up content is required"),
          signupCompanieContent: Yup.string().required(
            "Sign up company content is required"
          ),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          touched,
          errors,
          setFieldValue,
        }) => (
          <Form>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-x-[32px] mt-[20px] border-b-2 border-[#E0E4EC]">
              <div className="flex flex-wrap ">
                <div className="flex gap-[20px] items-center mb-[20px]">
                  <div className="text-[9px] text-[#4C535F] font-[500] p-[14px] w-[90px] h-[92px] bg-[#F7F7FD] rounded-[6px] border-dashed border border-[#4C535F] flex flex-col gap-[10px] text-center justify-center items-center">
                    <CameraIcon />
                    <input
                      type="file"
                      accept="image/png, image/jpeg"
                      onChange={(event) => {
                        const file = event.currentTarget.files[0];
                        setFieldValue("loginImage", file);
                        setLoginImagePreview(URL.createObjectURL(file));
                      }}
                      style={{ display: "none" }}
                      id="loginImageUpload"
                    />
                    <label
                      htmlFor="loginImageUpload"
                      className="cursor-pointer"
                    >
                      Upload your photo
                    </label>
                  </div>
                  <div>
                    <h3 className="text-[20px] text-[#000] font-[500] leading-normal">
                      Image Login
                    </h3>
                    <strong className="text-[10px] text-[#0A62CC] font-[500] leading-normal">
                      Please attach a photo of the Image in PNG or JPG format
                    </strong>
                    <ErrorMessage
                      name="loginImage"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                </div>
                {loginImagePreview && (
                  <img
                    src={loginImagePreview}
                    alt="Preview"
                    className="w-[90px] h-[90px] rounded inline-block mb-[10px]"
                  />
                )}
              </div>
              <div className="">
                <Input
                  label="Login"
                  placeholder="Your one-stop shop for real estate"
                  name="loginContent"
                  type="text"
                  value={values.loginContent}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.loginContent && touched.loginContent && (
                  <div className="text-red-600 text-sm">
                    {errors.loginContent}
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-x-[32px] mt-[20px] border-b-2 border-[#E0E4EC]">
              <div className="flex flex-wrap">
                <div className="flex gap-[20px] items-center mb-[20px]">
                  <div className="text-[9px] text-[#4C535F] font-[500] p-[14px] w-[90px] h-[92px] bg-[#F7F7FD] rounded-[6px] border-dashed border border-[#4C535F] flex flex-col gap-[10px] text-center justify-center items-center">
                    <CameraIcon />
                    <input
                      type="file"
                      accept="image/png, image/jpeg"
                      onChange={(event) => {
                        const file = event.currentTarget.files[0];
                        setFieldValue("signupImage", file);
                        setSignupImagePreview(URL.createObjectURL(file));
                      }}
                      style={{ display: "none" }}
                      id="signupImageUpload"
                    />
                    <label
                      htmlFor="signupImageUpload"
                      className="cursor-pointer"
                    >
                      Upload your photo
                    </label>
                  </div>
                  <div>
                    <h3 className="text-[20px] text-[#000] font-[500] leading-normal">
                      Image Sign Up
                    </h3>
                    <strong className="text-[10px] text-[#0A62CC] font-[500] leading-normal">
                      Please attach a photo of the Image in PNG or JPG format
                    </strong>
                    <ErrorMessage
                      name="signupImage"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                </div>
                {signupImagePreview && (
                  <img
                    src={signupImagePreview}
                    alt="Preview"
                    className="w-[90px] h-[90px] rounded inline-block mb-[10px]"
                  />
                )}
              </div>
              <div>
                <Input
                  label="Sign up Company"
                  placeholder="Enter your Content"
                  name="signupCompanieContent"
                  type="text"
                  value={values.signupCompanieContent}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.signupCompanieContent &&
                  touched.signupCompanieContent && (
                    <div className="text-red-600 text-sm">
                      {errors.signupCompanieContent}
                    </div>
                  )}
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-x-[32px] mt-[20px] border-b-2 border-[#E0E4EC]">
              <div className="flex flex-wrap">
                <div className="flex gap-[20px] items-center mb-[20px]">
                  <div className="text-[9px] text-[#4C535F] font-[500] p-[14px] w-[90px] h-[92px] bg-[#F7F7FD] rounded-[6px] border-dashed border border-[#4C535F] flex flex-col gap-[10px] text-center justify-center items-center">
                    <CameraIcon />
                    <input
                      type="file"
                      accept="image/png, image/jpeg"
                      onChange={(event) => {
                        const file = event.currentTarget.files[0];
                        setFieldValue("signupCompanieImage", file);
                        setSignupCompanieImagePreview(
                          URL.createObjectURL(file)
                        );
                      }}
                      style={{ display: "none" }}
                      id="signupCompanieImageUpload"
                    />
                    <label
                      htmlFor="signupCompanieImageUpload"
                      className="cursor-pointer"
                    >
                      Upload your photo
                    </label>
                  </div>
                  <div>
                    <h3 className="text-[20px] text-[#000] font-[500] leading-normal">
                      Image Sign Up Company
                    </h3>
                    <strong className="text-[10px] text-[#0A62CC] font-[500] leading-normal">
                      Please attach a photo of the Image in PNG or JPG format
                    </strong>
                    <ErrorMessage
                      name="signupCompanieImage"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                </div>
                {signupCompanieImagePreview && (
                  <img
                    src={signupCompanieImagePreview}
                    alt="Preview"
                    className="w-[90px] h-[90px] rounded inline-block mb-[10px]"
                  />
                )}
              </div>
              <div>
                <Input
                  label="Sign up"
                  placeholder="Enter your Content"
                  name="signupContent"
                  type="text"
                  value={values.signupContent}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.signupContent && touched.signupContent && (
                  <div className="text-red-600 text-sm">
                    {errors.signupContent}
                  </div>
                )}
              </div>
            </div>
            <Button
              type="submit"
              text="Submit"
              className="w-full mt-[20px] bg-blue-500 text-white rounded-lg py-2"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginSignupCard;
