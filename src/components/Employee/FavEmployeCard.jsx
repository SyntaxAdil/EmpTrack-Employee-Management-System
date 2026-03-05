import React from "react";

const FavEmployeCard = ({ item }) => {
  return (
    <div className="flex items-center gap-4 p-4 sm:p-5 my-3 rounded-xl bg-base-200 hover:bg-base-300 transition-all duration-200">
      <img
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
        src={item.profile_url}
        alt={item.employee_name}
      />

      <div className="flex-1 min-w-0">
        <h3 className="text-sm sm:text-base font-semibold text-success truncate">
          {item.employee_name}
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 truncate">
          {item.employee_email}
        </p>
        <p className="text-xs sm:text-sm text-gray-600 mt-1 line-clamp-2">
          {item.employee_bio}
        </p>
      </div>
    </div>
  );
};

export default FavEmployeCard;