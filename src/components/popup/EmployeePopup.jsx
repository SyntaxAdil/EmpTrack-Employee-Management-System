import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeEmployeePopup } from "../../app/feauture/popup/popup.slice";
import { motion, AnimatePresence } from "motion/react";
import {
  postEmployees,
  updateEmployees,
} from "../../app/feauture/Employee/employee.thunk";

// const dispatch = useDispatch();
const EmployeePopup = () => {
  const popup = useSelector((s) => s.popup.employeePopUp);
  const employee = useSelector((s) => s.employee.employee);
  const dispatch = useDispatch();
  const [formDetailes, setFormDetailes] = useState({
    profile_url: "",
    employee_name: "",
    employee_email: "",
    employee_bio: "",
    is_favorite: false,
  });

  useEffect(() => {
    if (popup.employee_id) {
      setFormDetailes({
        profile_url: popup.profile_url,
        employee_name: popup.employee_name,
        employee_email: popup.employee_email,
        employee_bio: popup.employee_bio,
        is_favorite: popup.is_favorite,
      });
    } else {
      setFormDetailes({
        profile_url: "",
        employee_name: "",
        employee_email: "",
        employee_bio: "",
        is_favorite: false,
      });
    }
  }, [popup]);
  const handelInputchange = (e) => {
    const { name, value } = e.target;

    setFormDetailes({
      ...formDetailes,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    if (
      !formDetailes.employee_bio ||
      !formDetailes.employee_name ||
      !formDetailes.employee_email ||
      !formDetailes.profile_url
    ) {
      alert("Fill all the inputs");
      return;
    }

    if (popup.employee_id) {
      console.log("edit hocche");
      await dispatch(
        updateEmployees({
          id: popup.employee_id,
          detailes: formDetailes,
        }),
      );
    } else {
      if (
        employee.find(
          (i) =>
            i.employee_email === formDetailes.employee_email ||
            i.profile_url === formDetailes.profile_url,
        )
      ) {
        alert("Data already exists");
        dispatch(closeEmployeePopup());
        setFormDetailes({
          profile_url: "",
          employee_name: "",
          employee_email: "",
          employee_bio: "",
          is_favorite: "false",
        });
        return;
      }
      await dispatch(postEmployees(formDetailes));
    }

    dispatch(closeEmployeePopup());

    setFormDetailes({
      profile_url: "",
      employee_name: "",
      employee_email: "",
      employee_bio: "",
      is_favorite: "false",
    });
  };
  return (
    <>
      <AnimatePresence>
        {popup && (
          <section
            onClick={() => dispatch(closeEmployeePopup())}
            className=" fixed flex items-center justify-center w-full min-h-screen backdrop-blur-xs inset-0 z-10"
          >
            <motion.fieldset
              key="modal"
              initial={{ y: 50, x: 0, opacity: 0 }}
              animate={{ y: 0, x: 0, opacity: 1 }}
              exit={{ y: 50, x: 0, opacity: 0 }}
              transition={{ ease: "easeOut", duration: 0.4 }}
              className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
              onClick={(e) => e.stopPropagation()}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            >
              <legend className="fieldset-legend text-success font-bold text-base ">
                Employee Detailes
              </legend>

              <label className="label">Profile URl</label>
              <input
                onChange={handelInputchange}
                name="profile_url"
                value={formDetailes.profile_url}
                type="url"
                className="input outline-0"
                placeholder="https://"
                pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9-].*[a-zA-Z0-9])?.)+[a-zA-Z].*$"
              />
              <label className="label">Name</label>
              <input
                name="employee_name"
                value={formDetailes.employee_name}
                onChange={handelInputchange}
                type="text"
                className="input outline-0"
                placeholder="Name"
              />
              <label className="label">Email</label>
              <input
                name="employee_email"
                value={formDetailes.employee_email}
                onChange={handelInputchange}
                type="email"
                className="input outline-0"
                placeholder="Email"
              />
              <label className="label">Bio</label>
              <textarea
                name="employee_bio"
                value={formDetailes.employee_bio}
                onChange={handelInputchange}
                className="textarea outline-0"
                placeholder="Bio"
              ></textarea>
              <button
                onClick={handleSubmit}
                className="btn btn-success my-2 font-bold text-base"
              >
                Submit
              </button>
            </motion.fieldset>
          </section>
        )}
      </AnimatePresence>
    </>
  );
};

export default EmployeePopup;
