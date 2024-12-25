import { useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../../../components/common/Button";
import ChevronRightIcon from "../../../assets/icons/ChevronRightIcon";
import Input from "../../../components/common/Input";
import EnvelopeIcon from "../../../assets/icons/EnvelopeIcon";
import CloseCircleIcon from "../../../assets/icons/CloseCircleIcon";

const SendEmailModal = ({ sendEmailModal, setSendEmailModal }) => {
  const [emailList, setEmailList] = useState([
    "Hans93@gmail.com",
    "example1@gmail.com",
    "example2@gmail.com",
  ]);

  const validationSchema = Yup.object({
    messageTitle: Yup.string().required("Message title is required"),
    messageDescription: Yup.string().required("Message description is required"),
  });

  const handleSubmit = (values) => {
    console.log("Form data:", values);
  };

  return (
    sendEmailModal && (
      <div className="fixed w-full inset-0 h-full z-[999] bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white absolute z-[1000] top-[88px] right-[30px] transform w-[886px] p-[15px] rounded-[15px]">
          <div className="flex items-center gap-[10px] mb-[38px]">
            <span
              onClick={() => setSendEmailModal(false)}
              className="w-[32px] h-[32px] bg-white rounded-[8px] flex items-center justify-center border border-[#E8ECF4] cursor-pointer"
            >
              <ChevronRightIcon
                width="13px"
                height="13px"
                color="#1E232C"
                strokeWidth="2"
              />
            </span>
            <h2 className="text-[#000929] text-[22px] font-[600] leading-[24.2px] tracking-[-0.22px]">
              Send an email
            </h2>
          </div>

          <div className="border-[2px] border-[#C4D9F2] rounded-[16px] bg-white grid grid-cols-4 p-5 gap-x-[26px] gap-y-[20px] mb-[20px]">
            {emailList.map((email, index) => (
              <div key={index} className="rounded-[6px] w-full shadow-[0px_4px_4px_0px_#00000008] p-[6px] relative">
                <span className="flex items-center gap-[10px]">
                  <EnvelopeIcon />
                  {email}
                </span>
                <span className="absolute -right-[2px] -top-[2px]">
                  <CloseCircleIcon />
                </span>
              </div>
            ))}
          </div>

          <Formik
            initialValues={{ messageTitle: "", messageDescription: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, handleChange, handleBlur }) => (
              <Form>
                <Input
                  label="Message title"
                  name="messageTitle"
                  type="text"
                  value={values.messageTitle}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage name="messageTitle" component="div" className="text-red-500" />

                <Input
                  label="Message description"
                  name="messageDescription"
                  type="text"
                  value={values.messageDescription}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage name="messageDescription" component="div" className="text-red-500" />

                <div className="flex justify-end items-center gap-[20px] mt-[20px]">
                  <Button
                    text="Send"
                    variant="primary"
                    type="submit"
                    onClick={() => console.log("send")}
                  />
                  <Button
                    text="Cancel"
                    variant="secondary"
                    type="button"
                    onClick={() => setSendEmailModal(false)}
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    )
  );
};

export default SendEmailModal;
