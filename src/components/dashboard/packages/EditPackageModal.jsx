import { useState } from "react";
import Button from "../../common/Button";

const EditPackageModal = ({
  packageName,
  packagePrice,
  packageDiscount,
  packageMonthlyPrice,
  packageFeatures,
  onClose,
  onEdit,
}) => {
  const [name, setName] = useState(packageName);
  const [price, setPrice] = useState(packagePrice);
  const [discount, setDiscount] = useState(packageDiscount);
  const [monthlyPrice, setMonthlyPrice] = useState(packageMonthlyPrice);
  const [features, setFeatures] = useState(packageFeatures);

  const handleSave = () => {
    const updatedPackage = {
      name,
      price,
      discount,
      monthlyPrice,
      features,
    };
    onEdit(updatedPackage);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1000]">
      <div className="bg-white p-6 rounded-lg w-[400px]">
        <h3 className="text-lg font-bold">Edit Package</h3>

        <div className="mt-4">
          <label className="block">Package Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border mt-2"
          />

          <label className="block mt-4">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-2 border mt-2"
          />

          <label className="block mt-4">Discount</label>
          <input
            type="text"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            className="w-full p-2 border mt-2"
          />

          <label className="block mt-4">Monthly Price</label>
          <input
            type="number"
            value={monthlyPrice}
            onChange={(e) => setMonthlyPrice(e.target.value)}
            className="w-full p-2 border mt-2"
          />

          <label className="block mt-4">Features</label>
          {features.map((feature, index) => (
            <div key={index} className="flex gap-2 mt-2">
              <input
                type="checkbox"
                checked={feature.enabled}
                onChange={() => {
                  const updatedFeatures = [...features];
                  updatedFeatures[index].enabled =
                    !updatedFeatures[index].enabled;
                  setFeatures(updatedFeatures);
                }}
              />
              <span>{feature.text}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-between">
          <Button text="Cancel" variant="secondary" onClick={onClose} />
          <Button text="Save" variant="primary" onClick={handleSave} />
        </div>
      </div>
    </div>
  );
};

export default EditPackageModal;
