import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employeePopUp: false,
  deletePopup: false,
  imagePopup:false
};

export const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    openEmployeePopup: (state, action) => {
      state.employeePopUp = action.payload ?? true;
   },
    closeEmployeePopup: (state) => {
      state.employeePopUp = false;
    },
    openDltPopup: (state,action) => {
      state.deletePopup = action.payload ??  true;
   },
    closeDltPopup: (state) => {
      state.deletePopup = false;
    },
    openImgPopup: (state,action) => {
      state.imagePopup = action.payload || false;
   },
    closeImgPopup: (state) => {
      state.imagePopup = false;
    },

  },
});

export const {openEmployeePopup,closeEmployeePopup,openDltPopup,closeDltPopup,openImgPopup,closeImgPopup} =popupSlice.actions;
export default popupSlice.reducer