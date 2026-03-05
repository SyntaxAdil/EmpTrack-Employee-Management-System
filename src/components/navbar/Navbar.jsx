import { Heart, Plus, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openEmployeePopup } from "../../app/feauture/popup/popup.slice";
import EmployeeCard from "../Employee/EmployeeCard";
import FavEmployeCard from "../Employee/FavEmployeCard";
import { AnimatePresence, motion } from "motion/react";

const Navbar = () => {
  const dispatch = useDispatch();
  const emp = useSelector((s) => s.employee.employee);
  // const [favEmp, setFavEmp] = useState([]);

  const filtered = emp.filter((i) => i.is_favorite === true);

  const [openFavMenu, setOpenFavMenu] = useState(false);
  return (
    <section className=" sticky w-full left-0 top-5 z-9 right-0 mx-auto">
      <nav className="bg-base-200 px-6 md:px-8 py-4  rounded-full flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold tracking-wide">
            Emp<span className="text-emerald-500">Track</span>
          </h1>
        </div>
        <div className="space-x-4 flex flex-wrap">
          <div
            className="tooltip tooltip-bottom tooltip-success"
            data-tip="Add Employee"
          >
            <button
              className="bg-success text-base-200 px-3 py-2 rounded-sm btn h-fit btn-soft"
              onClick={() => dispatch(openEmployeePopup())}
            >
              <Plus size={16} />
            </button>
          </div>

          <div
            className="tooltip tooltip-bottom tooltip-secondary"
            data-tip="Favorite Employees"
          >
            <button
              className="bg-base-200 text-success transition-colors duration-300 hover:bg-secondary hover:text-neutral-100 px-3 py-2 rounded-sm btn h-fit"
              onClick={() => setOpenFavMenu((p) => !p)}
            >
              <Heart size={16} />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {openFavMenu && (
          <motion.div
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            exit={{ x: 500 }}
            transition={{ type: "tween", duration: 0.4 }}
            className="sidebar min-h-screen w-sm backdrop-blur-2xl fixed top-0 right-0 p-5 z-10 border-l border-success"
          >
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-extrabold tracking-wide">
                Favorite <span className="text-emerald-500">Employees</span>
              </h1>
              <button
                className="cursor-pointer"
                onClick={() => setOpenFavMenu((p) => !p)}
              >
                <X />
              </button>
            </div>
            <p className="text-sm my-4">
              Fav employess:{" "}
              <span className="text-success font-semibold ">
                {filtered.length < 10 ? "0" + filtered.length : filtered.length}
              </span>
            </p>

            <ul>
              {filtered.length > 0 ? (
                filtered.map((i) => (
                  <FavEmployeCard item={i} key={i.employee_id} />
                ))
              ) : (
                <p className="text-center text-neutral-400">No Fav employees</p>
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Navbar;
