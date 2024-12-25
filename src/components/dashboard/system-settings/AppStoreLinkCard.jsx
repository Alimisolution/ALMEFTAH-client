import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Input from "../../../components/common/Input";
import Button from "../../../components/common/Button";

const AppStoreLinkCard = () => {
  const validationSchema = Yup.object().shape({
    googlePlayLink: Yup.string()
      .url("Please enter a valid URL")
      .required("Google Play link is required"),
    appStoreLink: Yup.string()
      .url("Please enter a valid URL")
      .required("App Store link is required"),
  });

  return (
    <Formik
      initialValues={{
        googlePlayLink: "",
        appStoreLink: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log("Submitted values:", values);
        setSubmitting(false);
      }}
    >
      {({ resetForm }) => (
        <Form className="bg-white rounded-[20px] p-5">
          <div className="grid grid-cols-2 gap-x-[33px] gap-y-[20px]">
            <div>
              <Field
                name="googlePlayLink"
                render={({ field }) => (
                  <Input
                    label="Google Play Link"
                    placeholder="Enter your Google Play Link"
                    {...field}
                  />
                )}
              />
              <ErrorMessage
                name="googlePlayLink"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div>
              <Field
                name="appStoreLink"
                render={({ field }) => (
                  <Input
                    label="App Store Link"
                    placeholder="Enter your App Store Link"
                    {...field}
                  />
                )}
              />
              <ErrorMessage
                name="appStoreLink"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
          </div>
          <div className="flex justify-end items-center gap-[20px] mt-[10px]">
            <Button text="Update Links" variant="primary" type="submit" />
            <Button
              text="Reset"
              variant="secondary"
              type="button"
              onClick={() => {
                resetForm();
              }}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AppStoreLinkCard;
