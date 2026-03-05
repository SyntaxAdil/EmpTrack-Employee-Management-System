import { configureStore } from "@reduxjs/toolkit";
import popUpReducer from "./feauture/popup/popup.slice"
import employeeReducer from './feauture/Employee/employee.slice';

export const store = configureStore({
    reducer:{
        popup:popUpReducer,
        employee:employeeReducer
    }
});
