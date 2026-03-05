import { createSlice } from "@reduxjs/toolkit";
import getEmployees, { delteEmployees, postEmployees, updateEmployees } from "./employee.thunk";

const initialState = {
  employee: [],
  isLoading: false,
  error: null,
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    (builder.addCase(getEmployees.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    }),
      builder.addCase(getEmployees.fulfilled, (state, action) => {
        state.employee = action.payload;
        state.isLoading = false;
      }),
      builder.addCase(getEmployees.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
      builder.addCase(postEmployees.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      }),
      builder.addCase(postEmployees.fulfilled, (state) => {
        state.isLoading = false;
      }),
      builder.addCase(postEmployees.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
      

      builder.addCase(delteEmployees.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      }),
      builder.addCase(delteEmployees.fulfilled, (state) => {
        state.isLoading = false;
      }),
      builder.addCase(delteEmployees.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),

      builder.addCase(updateEmployees.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      }),
      builder.addCase(updateEmployees.fulfilled, (state) => {
        state.isLoading = false;
      }),
      builder.addCase(updateEmployees.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
    );
      
  },
});

export default employeeSlice.reducer;
