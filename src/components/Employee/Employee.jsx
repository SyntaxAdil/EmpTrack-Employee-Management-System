import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmployeeCard from "./EmployeeCard";
import getEmployees from "../../app/feauture/Employee/employee.thunk";
import SkeletonLoader from "../skeletonLoader/SkeletonLoader";

const Employee = () => {
  const { employee, isLoading } = useSelector((s) => s.employee);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  return (
    <section className="rounded-xl  w-full md:w-5xl mx-auto m-2">
      <div className="px-4 sm:px-6 py-4 text-md md:text-xl  flex items-center justify-between">
        <h1 className="font-semibold text-success">Employees</h1>
        <p className="text-sm ">
          Total employess:{" "}
          <span className="text-success font-semibold ">
            {employee.length < 10 ? "0" + employee.length : employee.length}
          </span>
        </p>
      </div>

      <div>
        {isLoading ? (
         <SkeletonLoader />
        ) : employee?.length > 0 ? (
          employee.map((emp) => (
            <EmployeeCard
              key={emp.employee_id}
              image={emp.profile_url}
              item={emp}
              name={emp.employee_name}
              bio={emp.employee_bio}
              email={emp.employee_email}
            />
          ))
        ) : (
          <p className="p-6 text-center text-gray-500">No employees found</p>
        )}
      </div>
    </section>
  );
};

export default Employee;
