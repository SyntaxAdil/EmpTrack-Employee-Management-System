import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../config/axois.instance";

const getEmployees = createAsyncThunk("employee/getEmployees", async () => {
  const res = await api.get("employees");

  return res.data;
});

export const postEmployees = createAsyncThunk(
  "employee/postEmployees",
  async (detailes, { rejectWithValue, dispatch }) => {
    try {
      const res = await api.post("employees", detailes);
      dispatch(getEmployees());
      return res.data;
    } catch (error) {
      return rejectWithValue("Something went wrong", error);
    }
  },
);
export const delteEmployees = createAsyncThunk(
  "employee/delteEmployees",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const res = await api.delete(`employees/${id}`);
      dispatch(getEmployees());
      return res.data;
    } catch (error) {
      return rejectWithValue("Something went wrong", error);
    }
  },
);
export const updateEmployees = createAsyncThunk(
  "employee/updateEmployees",
  async ({ id, detailes }, { rejectWithValue, dispatch }) => {
    try {
      const res = await api.put(`employees/${id}`, detailes);
      dispatch(getEmployees());
      return res.data;
    } catch (error) {
      return rejectWithValue("Something went wrong", error);
    }
  },
);

export default getEmployees;
