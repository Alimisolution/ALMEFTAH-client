import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Input from "../../../components/common/Input";
import Button from "../../../components/common/Button";

const SocialMediaLinksCard = () => {
  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    facebookLink: Yup.string()
      .url("Please enter a valid URL")
      .required("Facebook link is required"),
    youtubeLink: Yup.string()
      .url("Please enter a valid URL")
      .required("Youtube link is required"),
    instagramLink: Yup.string()
      .url("Please enter a valid URL")
      .required("Instagram link is required"),
  });

  return (
    <Formik
      initialValues={{
        facebookLink: "",
        youtubeLink: "",
        instagramLink: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log("Submitted values:", values);
        setSubmitting(false);
      }}
    >
      {({ setFieldValue, resetForm }) => (
        <Form className="bg-white rounded-[20px] p-5">
          {/* Input Fields */}
          <div className="grid grid-cols-2 gap-x-[33px] gap-y-[20px]">
            <div>
              <Field
                name="facebookLink"
                render={({ field }) => (
                  <Input
                    label="Facebook Link"
                    placeholder="Enter your Facebook Link"
                    {...field}
                  />
                )}
              />
              <ErrorMessage
                name="facebookLink"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div>
              <Field
                name="youtubeLink"
                render={({ field }) => (
                  <Input
                    label="Youtube Link"
                    placeholder="Enter your Youtube Link"
                    {...field}
                  />
                )}
              />
              <ErrorMessage
                name="youtubeLink"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <Field
                name="instagramLink"
                render={({ field }) => (
                  <Input
                    label="Instagram Link"
                    placeholder="Enter your Instagram Link"
                    {...field}
                  />
                )}
              />
              <ErrorMessage
                name="instagramLink"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
          </div>

          {/* Buttons */}
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

export default SocialMediaLinksCard;
