import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../../components/common/Input";
import Select from "../../../components/common/Select";

const HomeCard = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      titleNoRealEstate: "",
      description: "",
      descriptionRealEstate: "",
      titleNoVisitor: "",
      descriptionVisitor: "",
      descriptionVisitor2: "",
      explore: "",
      proposalTitle: "",
      proposalDescription: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      titleNoRealEstate: Yup.string().required(
        "Title No. Real estate is required"
      ),
      description: Yup.string().required("Description is required"),
      descriptionRealEstate: Yup.string().required(
        "Description Real estate is required"
      ),
      titleNoVisitor: Yup.string().required("Title No. Visitor is required"),
      descriptionVisitor: Yup.string().required(
        "Description Visitor is required"
      ),
      descriptionVisitor2: Yup.string().required(
        "Description Visitor is required"
      ),
      explore: Yup.string().required("Please select an option"),
      proposalTitle: Yup.string().required("Proposal title is required"),
      proposalDescription: Yup.string().required(
        "Proposal description is required"
      ),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const exploreOptions = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  return (
    <div className="p-4 bg-white rounded-[20px]">
      <h2 className="text-[20px] text-[#000] font-[700] pb-[10px] border-b-[2px] border-[#E0E4EC] mb-[18px]">
        Section 1
      </h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-2 gap-x-[30px]">
          <div>
            <Input
              label="Title"
              placeholder="Enter the title"
              name="title"
              type="text"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.title && formik.errors.title && (
              <div className="text-red-500 text-[13px]">
                {formik.errors.title}
              </div>
            )}
            <div className="flex flex-col">
              <Input
                label="Title No. Real estate"
                placeholder="50k+ Real estate"
                name="titleNoRealEstate"
                type="text"
                value={formik.values.titleNoRealEstate}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.titleNoRealEstate && (
                <div className="text-red-500 text-[13px]">
                  {formik.errors.titleNoRealEstate}
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-[14px] mb-[18px] flex-1 relative">
            <label className="text-[#000] text-[16px] font-[500] w-full">
              Description
            </label>
            <textarea
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter the description"
              className="bg-[#fff] w-full placeholder:text-[#808080B] text-[#000] text-[14px] placeholder:font-[300] font-[400] focus:outline-none rounded-2xl border-2 border-[#C4D9F2] h-[169px] px-[20px] py-[18px] pr-[40px]"
            ></textarea>
            {formik.touched.description && formik.errors.description && (
              <div className="text-red-500 text-[13px]">
                {formik.errors.description}{" "}
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <Input
              label="Description Real estate"
              placeholder="Enter the title"
              name="descriptionRealEstate"
              type="text"
              value={formik.values.descriptionRealEstate}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.descriptionRealEstate &&
              formik.errors.descriptionRealEstate && (
                <div className="text-red-500 text-[13px]">
                  {formik.errors.descriptionRealEstate}
                </div>
              )}
          </div>
          <div className="flex flex-col">
            <Input
              label="Title No. Visitor"
              placeholder="Enter the title"
              name="titleNoVisitor"
              type="text"
              value={formik.values.titleNoVisitor}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.titleNoVisitor && formik.errors.titleNoVisitor && (
              <div className="text-red-500 text-[13px]">
                {formik.errors.titleNoVisitor}
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <Input
              label="Description Visitor"
              placeholder="Enter the title"
              name="descriptionVisitor"
              type="text"
              value={formik.values.descriptionVisitor}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.descriptionVisitor &&
              formik.errors.descriptionVisitor && (
                <div className="text-red-500 text-[13px]">
                  {formik.errors.descriptionVisitor}
                </div>
              )}
          </div>

          <div className="flex flex-col flex-1">
            <label className="text-[#000] text-[16px] mb-[14px] block">
              Explore
            </label>
            <Select
              className="bg-white"
              options={exploreOptions}
              placeholder="Select an option"
              name="explore"
              value={formik.values.explore}
              onChange={(option) =>
                formik.setFieldValue("explore", option.value)
              }
              error={formik.touched.explore && formik.errors.explore}
            />
            {formik.touched.explore && formik.errors.explore && (
              <div className="text-red-500 text-[13px] mb-[30px]">
                {formik.errors.explore}
              </div>
            )}
          </div>
        </div>
        <h2 className="text-[20px] text-[#000] font-[700] pb-[10px] border-b-[2px] border-[#E0E4EC] mb-[18px]">
          Section 2
        </h2>
        <div className="grid grid-cols-2 gap-x-[30px]">
          <div>
            <Input
              label="Description Visitor"
              placeholder="Enter the title"
              name="descriptionVisitor2"
              type="text"
              value={formik.values.descriptionVisitor2}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.descriptionVisitor2 &&
              formik.errors.descriptionVisitor2 && (
                <div className="text-red-500 text-[13px]">
                  {formik.errors.descriptionVisitor2}
                </div>
              )}
          </div>
        </div>
        <h2 className="text-[20px] text-[#000] font-[700] pb-[10px] border-b-[2px] border-[#E0E4EC] mb-[18px]">
          Section 3
        </h2>
        <div className="grid grid-cols-2 gap-x-[30px]">
          <div className="flex flex-col flex-1">
            <Input
              label="Proposal title"
              placeholder="Enter the title"
              name="proposalTitle"
              type="text"
              value={formik.values.proposalTitle}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.proposalTitle && formik.errors.proposalTitle && (
              <div className="text-red-500 text-[13px]">
                {formik.errors.proposalTitle}
              </div>
            )}
          </div>
          <div className="flex flex-col flex-1">
            <Input
              label="Proposal description"
              placeholder="Enter the title"
              name="proposalDescription"
              type="text"
              value={formik.values.proposalDescription}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.proposalDescription &&
              formik.errors.proposalDescription && (
                <div className="text-red-500 text-[14px]">
                  {formik.errors.proposalDescription}
                </div>
              )}
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white rounded px-4 py-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default HomeCard;
