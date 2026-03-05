import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { useDispatch, useSelector } from "react-redux";
import { closeImgPopup } from "../../app/feauture/popup/popup.slice";

const ImagePopup = () => {
  const popup = useSelector((s) => s.popup.imagePopup);
  const dispatch = useDispatch();

  return (
    <AnimatePresence>
      {popup && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => dispatch(closeImgPopup())}
          className="fixed inset-0 flex items-center justify-center w-full min-h-screen bg-black/30 backdrop-blur-sm z-50"
        >
          <motion.div
            key="dlt-modal"
            initial={{ y: 50, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.95 }}
            transition={{ ease: "easeOut", duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="rounded-xl shadow-lg "
          >
            {popup && <img src={popup} alt="image" className="rounded-xl min-w-md aspect-square" />}
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default ImagePopup;
