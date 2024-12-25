import { useState } from "react";
import CheckCircleIcon from "../../../assets/icons/CheckCircleIcon";
import CloseIcon from "../../../assets/icons/CloseIcon";
import Button from "../../common/Button";
import { toast } from "react-toastify";
import EditPackageModal from "./EditPackageModal";

const PackageCard = ({
  color,
  name,
  duration,
  discount,
  price,
  monthlyPrice,
  features,
  onDelete,
  onEdit,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    toast(
      <div className="flex flex-col">
        <p>
          Are you sure you want to delete the <strong>{name}</strong> package?
        </p>
        <div className="mt-4 flex gap-4">
          <Button
            text="Cancel"
            variant="secondary"
            onClick={() => toast.dismiss()}
          />
          <Button
            text="Confirm"
            variant="primary"
            onClick={() => {
              toast.dismiss();
              onDelete(); // Trigger the delete action passed via props
            }}
          />
        </div>
      </div>,
      { autoClose: false }
    );
  };

  return (
    <div className="border border-[#C6CED4] bg-[#d9d9d91a] rounded-2xl relative overflow-hidden p-[5px]">
      <div
        className={`${color} flex flex-col gap-[10px] text-center h-[150px] mb-[60px] relative rounded-[10px]`}
      >
        <h3 className="text-[25px] text-[#fff] font-[500] capitalize p-[8px]">
          {name}
        </h3>
        <h4 className="text-[14px] text-[#fff] font-[500] uppercase leading-[16.8px]">
          {duration}
        </h4>

        <div
          className={`${color} -bottom-[55px] flex flex-col gap-[5px] rounded-full w-[110px] h-[110px] border-white py-[11px] border-[4px] absolute left-1/2 -translate-x-1/2`}
        >
          <strong className="text-[12px] text-[#fff] font-[500] leading-[12px]">
            Save {discount}
          </strong>
          <span className="text-[40px] text-[#fff] font-[400] leading-[48px]">
            ${price}
          </span>
          <strong className="text-[9px] text-[#fff] font-[500] leading-[9px]">
            ${monthlyPrice} /Month
          </strong>
        </div>
      </div>

      <div>
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-[10px] px-[10px] py-[8px] h-[36px] rounded-[10px] bg-[#F5F5F5] mb-[10px]"
          >
            {feature.enabled ? <CheckCircleIcon /> : <CloseIcon />}
            <span className="flex-1 text-[12px] text-[#212121] font-[400] leading-[12px]">
              {feature.text}
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-[10px]">
        <Button
          text="Delete"
          variant="primary"
          type="button"
          className="flex-1"
          onClick={handleDelete}
        />
        <Button
          text="Edit"
          variant="secondary"
          type="button"
          className="flex-1"
          onClick={() => setShowModal(true)}
        />
      </div>

      {showModal && (
        <EditPackageModal
          packageName={name}
          packagePrice={price}
          packageDiscount={discount}
          packageMonthlyPrice={monthlyPrice}
          packageFeatures={features}
          onClose={() => setShowModal(false)}
          onEdit={onEdit}
        />
      )}
    </div>
  );
};

export default PackageCard;
