import { useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation hook from react-router-dom
import TrashIcon from "../../assets/icons/TrashIcon";
import UnlockIcon from "../../assets/icons/UnlockIcon";
import EyeIcon from "../../assets/icons/EyeIcon";
import EnvelopeIcon from "../../assets/icons/EnvelopeIcon";

const Table = ({
  columns,
  rowData,
  columnStyles = {}, 
  onDelete,
  onUnlock,
  onView,
  useEnvelopeIcon = false,
}) => {
  const location = useLocation();
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);


  return (
    <div className="bg-[#fff] rounded-[20px] py-[15px] relative">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="border-b border-[#E2E8F0] h-[38px]">
            <tr>
              {columns.map((column, index) => (
                <th
                  key={index}
                  className="text-[12px] text-[#718EBF] font-[500] text-center text-nowrap px-[5px]"
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rowData.map((data, rowIndex) => (
              <tr key={rowIndex} className="h-[80px] border-b border-[#E2E8F0]">
                {columns.map((column, colIndex) => {
                  const value = data[column.key];
                  const style = column.key === "price"
                    ? { color: "#0A62CC" } 
                    : columnStyles?.[column.key] ? columnStyles[column.key](value) : {}; 

                  return (
                    <td
                      key={colIndex}
                      className="p-3 text-[12px] text-[#000929] font-[500] text-center text-nowrap"
                      style={style} 
                    >
                      {column.key === "action" ? (
                        <div className="flex justify-center items-center gap-2 cursor-pointer">
                          <div onClick={() => onDelete(data.id)}>
                            <TrashIcon />
                          </div>
                          <div onClick={() => onUnlock(data.id)}>
                            <UnlockIcon />
                          </div>
                          {useEnvelopeIcon ? (
                            <div onClick={() => onView(data.id)}>
                              <EnvelopeIcon width="15" height="15" color="#000929" />
                            </div>
                          ) : (
                            <div onClick={() => onView(data.id)}>
                              <EyeIcon />
                            </div>
                          )}
                        </div>
                      ) : (
                        value
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
