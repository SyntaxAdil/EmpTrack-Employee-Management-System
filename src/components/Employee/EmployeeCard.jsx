import { Edit, Heart, Trash } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  openDltPopup,
  openEmployeePopup,
  openImgPopup,
} from "../../app/feauture/popup/popup.slice";
import { updateEmployees } from "../../app/feauture/Employee/employee.thunk";

const EmployeeCard = ({ item }) => {
  const dispatch = useDispatch();

  const handleFavEmp = (item) => {
    if(item.employee_id){

      dispatch(
        updateEmployees({
          id: item.employee_id,
          detailes: {
            ...item,
            is_favorite: !item.is_favorite,
          },
        }),
      );
    }
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-start px-6 py-4 gap-4 hover:bg-base-200 transition-colors duration-200 my-4 border-success border-l rounded-md ">
      <div className="shrink-0">
        <img
          onClick={() => dispatch(openImgPopup(item.profile_url))}
          className="w-16 h-16 rounded-full object-cover cursor-pointer"
          src={item.profile_url}
          alt={item.employee_name}
        />
      </div>
      <div className="flex-1">
        <div className="text-lg text-success font-semibold">
          {item.employee_name}
        </div>
        <div className="text-xs  font-medium text-gray-500 mt-0.5">
          {item.employee_email}
        </div>
        <p className="mt-2 text-sm text-gray-600">{item.employee_bio}</p>
      </div>
      <div className="flex sm:flex-col gap-2 mt-4 sm:mt-0">
        <div
          className="tooltip tooltip-top md:tooltip-left tooltip-success "
          data-tip="Edit"
        >
          <button
            className="btn btn-square btn-success btn-ghost"
            onClick={() => dispatch(openEmployeePopup(item))}
          >
            <Edit size={18} />
          </button>
        </div>
        <div
          className="tooltip tooltip-top md:tooltip-left tooltip-error"
          data-tip="Delete"
        >
          <button
            className="btn btn-square btn-error btn-ghost"
            onClick={() => dispatch(openDltPopup(item.employee_id))}
          >
            <Trash size={18} />
          </button>
        </div>
        <div
          className="tooltip tooltip-top md:tooltip-left tooltip-secondary"
          data-tip="Favorite"
        >
          <button
            className="btn btn-square btn-secondary btn-ghost"
            onClick={() => handleFavEmp(item)}
          >
            <Heart size={18} fill={item.is_favorite ? "red" : ""} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
