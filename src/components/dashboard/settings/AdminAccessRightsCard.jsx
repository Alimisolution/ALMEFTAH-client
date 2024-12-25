import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../../components/common/Button";
import Input from "../../../components/common/Input";
import avarImg from "../../../assets/images/admin-sidebar/avatar.png";
import PhoneIcon from "../../../assets/icons/PhoneIcon.jsx";
import UnlockIcon from "../../../assets/icons/UnlockIcon";
import EditIcon from "../../../assets/icons/EditIcon";
import TrashIcon from "../../../assets/icons/TrashIcon";
import EnvelopeIcon from "../../../assets/icons/EnvelopeIcon";

const AdminAccessRightsCard = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      accessRights: {
        advertisements: false,
        offices: false,
        users: false,
        packages: false,
        systemSettings: false,
        reports: false,
        financialReport: false,
        accessRights: false,
        creditCard: false,
      },
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      phoneNumber: Yup.string()
        .required("Phone Number is required")
        .matches(/^[0-9]+$/, "Phone Number must be only digits")
        .min(10, "Phone Number must be at least 10 digits")
        .max(15, "Phone Number must be at most 15 digits"),
      password: Yup.string().required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
      accessRights: Yup.object().test(
        "at-least-one",
        "At least one access right must be selected",
        (value) => {
          return Object.values(value).some((v) => v === true);
        }
      ),
    }),
    onSubmit: (values) => {
      console.log(values);
      // Handle form submission
    },
  });

  return (
    <div className="p-5 bg-white rounded-2xl mb-[30px]">
      <form onSubmit={formik.handleSubmit} className="w-full">
        <div className="grid grid-cols-2 gap-x-[30px]">
          <div>
          <Input
            label="First Name"
            placeholder="Enter your First Name"
            name="firstName"
            type="text"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <p className="text-red-500 text-[12px] font-[500]">
              {formik.errors.firstName}
            </p>
          )}
          </div>
          <div>
          <Input
            label="Last Name"
            placeholder="Enter your Last Name"
            name="lastName"
            type="text"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <p className="text-red-500 text-[12px] font-[500]">
              {formik.errors.lastName}
            </p>
          )}
          </div>
          <div>
          <Input
            label="Email"
            placeholder="Enter your Email"
            name="email"
            type="text"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-[12px] font-[500]">
              {formik.errors.email}
            </p>
          )}
          </div>
          <div>
          <Input
            label="Phone Number"
            placeholder="Enter your Phone Number"
            name="phoneNumber"
            type="text"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber && (
            <p className="text-red-500 text-[12px] font-[500]">
              {formik.errors.phoneNumber}
            </p>
          )}
          </div>
          <div>
          <Input
            label="Password"
            placeholder="Enter your Password"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-[12px] font-[500]">
                {formik.errors.password}
              </p>
            )}
            </div>
            <div>
            <Input
              label="Confirm Password"
              placeholder="Enter your Confirm Password"
              name="confirmPassword"
              type="password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
              <p className="text-red-500 text-[12px] font-[500]">
                {formik.errors.confirmPassword}
              </p>
            )}
            </div>
          </div>
  
          <h2 className="text-[20px] text-[#000929] font-[500] leading-[22px] tracking-[-0.2px] mb-[20px]">
            Access Rights
          </h2>
  
          <div className="flex items-center gap-[20px] flex-wrap flex-wrap">
            {Object.keys(formik.values.accessRights).map((right) => (
              <div
                key={right}
                className="flex items-center gap-[10px] border border-[#C4D9F2] rounded-[16px] py-[10px] px-[20px] text-[16px] text-[#000929] font-[700]"
              >
                <input
                  type="checkbox"
                  name={right}
                  checked={formik.values.accessRights[right]}
                  onChange={() => {
                    formik.setFieldValue(
                      `accessRights.${right}`,
                      !formik.values.accessRights[right]
                    );
                  }}
                />
                <label>
                  {right.charAt(0).toUpperCase() +
                    right.slice(1).replace(/([A-Z])/g, " $1")}
                </label>
              </div>
            ))}
          </div>
          {formik.touched.accessRights && !Object.values(formik.values.accessRights).some(v => v) && (
            <p className="text-red-500 text-[12px] font-[500]">
              At least one access right must be selected.
            </p>
          )}
  
          <div className="flex items-center mt-[30px] mb-[20px] pb-[20px] gap-[20px] border-b-[2px] border-[#E0E4EC]">
            <Button
              text="Add Access"
              variant="primary"
              type="submit"
              className="flex-1"
            />
            <Button
              text="Reset"
              variant="secondary"
              type="button"
              onClick={formik.handleReset}
              className="flex-1"
            />
          </div>
        </form>
  
        <div className="grid grid-cols-2 gap-[30px]">
          <div className="border border-[#C4D9F2] rounded-[16px] p-[10px] relative">
            <div className="flex items-center gap-[10px] mb-[10px]">
              <img src={avarImg} alt="" />
              <div className="">
                <h3 className="text-[18px] text-[#000929] font-[600] leading-[19.8px] tracking-[-0.18px] mb-[12px]">
                  Ron Champlin
                </h3>
                <div className="flex items-center gap-[20px] flex-wrap">
                  <div className="text-[12px] text-[#000929] font-[600] leading-[13.2px] tracking-[-0.12px] flex items-center gap-[10px]">
                    <PhoneIcon width="20" height="20" /> 624-714-7112
                  </div>
                  <div className="text-[12px] text-[#000929] font-[600] leading-[13.2px] tracking-[-0.12px] flex items-center gap-[10px]">
                    <EnvelopeIcon width="20" height="20" />{" "}
                    Eloisa.Carroll74@gmail.com
                  </div>
                </div>
                <div className="absolute right-[10px] top-[10px] flex items-center gap-[20px] flex-wrap">
                  <TrashIcon />
                  <UnlockIcon />
                  <EditIcon />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[10px] flex-wrap">
            <div className="flex items-center gap-[10px] border border-[#C4D9F2] rounded-[6px] py-[10px] px-[14px] text-[14px] text-[#000929] font-[700]">
              <input type="checkbox" />
              <label>Advertisements</label>
            </div>
            <div className="flex items-center gap-[10px] border border-[#C4D9F2] rounded-[6px] py-[10px] px-[14px] text-[14px] text-[#000929] font-[700]">
              <input type="checkbox" />
              <label>Offices</label>
            </div>
            <div className="flex items-center gap-[10px] border border-[#C4D9F2] rounded-[6px] py-[10px] px-[14px] text-[14px] text-[#000929] font-[700]">
              <input type="checkbox" />
              <label>Packages</label>
            </div>
            <div className="flex items-center gap-[10px] border border-[#C4D9F2] rounded-[6px] py-[10px] px-[14px] text-[14px] text-[#000929] font-[700]">
              <input type="checkbox" />
              <label>Credit Card</label>
            </div>
          </div>
        </div>
        <div className="border border-[#C4D9F2] rounded-[16px] p-[10px] relative">
          <div className="flex items-center gap-[10px] mb-[10px]">
            <img src={avarImg} alt="" />
            <div className="">
              <h3 className="text-[18px] text-[#000929] font-[600] leading-[19.8px] tracking-[-0.18px] mb-[12px]">
                Ron Champlin
              </h3>
              <div className="flex items-center gap-[20px] flex-wrap">
                <div className="text-[12px] text-[#000929] font-[600] leading-[13.2px] tracking-[-0.12px] flex items-center gap-[10px]">
                  <PhoneIcon width="20" height="20" /> 624-714-7112
                </div>
                <div className="text-[12px] text-[#000929] font-[600] leading-[13.2px] tracking-[-0.12px] flex items-center gap-[10px]">
                  <EnvelopeIcon width="20" height="20" />{" "}
                  Eloisa.Carroll74@gmail.com
                </div>
              </div>
              <div className="absolute right-[10px] top-[10px] flex items-center gap-[20px] flex-wrap">
                <TrashIcon />
                <UnlockIcon />
                <EditIcon />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-[10px] flex-wrap">
            <div className="flex items-center gap-[10px] border border-[#C4D9F2] rounded-[6px] py-[10px] px-[14px] text-[14px] text-[#000929] font-[700]">
              <input type="checkbox" />
              <label>Advertisements</label>
            </div>
            <div className="flex items-center gap-[10px] border border-[#C4D9F2] rounded-[6px] py-[10px] px-[14px] text-[14px] text-[#000929] font-[700]">
              <input type="checkbox" />
              <label>Offices</label>
            </div>
            <div className="flex items-center gap-[10px] border border-[#C4D9F2] rounded-[6px] py-[10px] px-[14px] text-[14px] text-[#000929] font-[700]">
              <input type="checkbox" />
              <label>Packages</label>
            </div>
            <div className="flex items-center gap-[10px] border border-[#C4D9F2] rounded-[6px] py-[10px] px-[14px] text-[14px] text-[#000929] font-[700]">
              <input type="checkbox" />
              <label>Credit Card</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAccessRightsCard;