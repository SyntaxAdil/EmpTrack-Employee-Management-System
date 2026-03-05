import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { useDispatch, useSelector } from "react-redux";
import { closeDltPopup } from "../../app/feauture/popup/popup.slice";
import { Trash, X } from "lucide-react";
import { delteEmployees } from "../../app/feauture/Employee/employee.thunk";

const DltPopup = () => {
  const popup = useSelector((s) => s.popup.deletePopup);
  const dispatch = useDispatch();

  const handleConfirmation = async () => {
    await dispatch(delteEmployees(popup));
    dispatch(closeDltPopup());
  };
  return (
    <AnimatePresence>
      {popup && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => dispatch(closeDltPopup())}
          className="fixed inset-0 flex items-center justify-center w-full min-h-screen bg-black/30 backdrop-blur-sm z-50"
        >
          <motion.div
            key="dlt-modal"
            initial={{ y: 50, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.95 }}
            transition={{ ease: "easeOut", duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-base-100 rounded-xl shadow-lg w-11/12 max-w-md p-6"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-error">
                Delete Confirmation
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this item? This action cannot be
              undone.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={handleConfirmation}
                className="btn btn-ghost btn-success flex items-center gap-2"
              >
                <Trash size={16} /> Yes, Delete
              </button>
              <button
                onClick={() => dispatch(closeDltPopup())}
                className="btn btn-error flex items-center gap-2"
              >
                <X size={16} /> Cancel
              </button>
            </div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default DltPopup;
