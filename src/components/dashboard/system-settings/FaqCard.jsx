// export default FaqCard
import Input from "../../../components/common/Input";
import Button from "../../../components/common/Button";
import TrashIcon from "../../../assets/icons/TrashIcon";
import EditIcon from "../../../assets/icons/EditIcon";
import PlusIcon from "../../../assets/icons/PlusIcon.jsx";
import LockIcon from "../../../assets/icons/LockIcon";

const FaqCard = () => {
  return (
    <div className="p-4 bg-white rounded-[20px]">
      <div className="grid grid-cols-2 gap-x-[33px]">
        <div className="col-span-2">
          <Input
            label="Title"
            placeholder="Enter your title"
            name=""
            type="text"
            value=""
            onChange={""}
          />
        </div>
        <Input
          label="Question"
          placeholder="Enter your question"
          name=""
          type="text"
          value=""
          onChange={""}
        />
        <Input
          label="Answer"
          placeholder="Enter your answer"
          name=""
          type="text"
          value=""
          onChange={""}
        />
      </div>
      <div className="flex items-center justify-end gap-[20px] mb-[20px] border-b-2 border-[#E0E4EC] pb-[20px]">
        <Button text="Update" variant="primary" type="submit" />
        <Button text="Reset" variant="secondary" type="submit" />
      </div>
      <div className=" pb-[20px] border-b-[3px] mb-[20px] border-[#D7DEF0]">
        <div className="flex items-center justify-between">
          <h2 className="text-[22px] text-[#000929] font-[700] leading-[26.4px]">
            Frequently Asked Questions
          </h2>
          <div className="flex items-center gap-[20px]">
            <EditIcon width="20" height="20" />{" "}
            <TrashIcon stroke="#000929" width="20" height="20" />
          </div>
        </div>
      </div>

      <div className="pb-[20px] border-b-[3px] mb-[20px] border-[#D7DEF0]">
        <div className="flex items-center justify-between">
          <h3 className="text-[18px] text-[#000929] font-[700] leading-[21.6px]">
            Where can I watch?{" "}
          </h3>
          <div className="flex items-center gap-[20px]">
            <EditIcon width="20" height="20" />{" "}
            <TrashIcon stroke="#000929" width="20" height="20" />
            <LockIcon />
          </div>
        </div>
        <p className="text-[16px] text-[#3c3c43d9] font-[400] leading-[22.4px] mt-[18px]">
          Nibh quisque suscipit fermentum netus nulla cras porttitor euismod
          nulla. Orci, dictumst nec aliquet id ullamcorper venenatis.{" "}
        </p>
      </div>
      <div className="pb-[20px] border-b-[3px] mb-[20px] border-[#D7DEF0]">
        <div className="flex items-center justify-between">
          <h3 className="text-[18px] text-[#000929] font-[700] leading-[21.6px]">
            Mauris id nibh eu fermentum mattis purus?{" "}
          </h3>
          <div className="flex items-center gap-[20px]">
            <EditIcon width="20" height="20" />{" "}
            <TrashIcon stroke="#000929" width="20" height="20" />
            <PlusIcon />
          </div>
        </div>
      </div>
      <div className="pb-[20px] border-b-[3px] mb-[20px] border-[#D7DEF0]">
        <div className="flex items-center justify-between">
          <h3 className="text-[18px] text-[#000929] font-[700] leading-[21.6px]">
            Eros imperdiet rhoncus?{" "}
          </h3>
          <div className="flex items-center gap-[20px]">
            <EditIcon width="20" height="20" />{" "}
            <TrashIcon stroke="#000929" width="20" height="20" />
            <PlusIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqCard;
