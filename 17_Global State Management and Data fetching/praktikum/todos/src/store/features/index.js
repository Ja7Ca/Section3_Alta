import { combineReducers } from "@reduxjs/toolkit";
import todoSlice from "./fecthTodoSlice";

export const rootReducer = combineReducers({
	todos: todoSlice
});