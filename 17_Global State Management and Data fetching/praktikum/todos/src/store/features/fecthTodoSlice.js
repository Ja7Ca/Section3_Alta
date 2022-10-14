import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import APITodos from "../../apis/todosApi";

const initialState = {
	data: [],
	buttonStatus: false,
	status: "idle",
	error: null,
};

export const fetchTodos = createAsyncThunk("fetch/todos", async () => {
	try {
		const response = await APITodos.getalltodos();
		console.log(response, "itu");
		return response.data;
	} catch (err) {
		console.log(err);
	}
});

export const createTodo = createAsyncThunk("create/todo", async (data) => {
	try {
		const response = await APITodos.creatatodo(data);
		return response.data;
	} catch (err) {
		console.log(err);
	}
});

export const editTodo = createAsyncThunk("edit/todo", async (data) => {
	try {
		const response = await APITodos.editatodo(data);
		return response.data;
	} catch (err) {
		console.log(err);
	}
});

export const deleteTodo = createAsyncThunk("delete/todo", async (data) => {
	try {
		const response = await APITodos.deleteatodo(data);
		return response.data;
	} catch (err) {
		console.log(err);
	}
});

const fetchTodoSlice = createSlice({
	name: "todos",
	initialState,
	extraReducers(builder) {
		builder
			.addCase(fetchTodos.pending, (state, action) => {
				state.status = "loading";
			})
			.addCase(fetchTodos.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.data = action.payload;
			})
			.addCase(fetchTodos.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			})
			.addCase(editTodo.fulfilled, (state, action) => {
				state.status = "succeeded";
				// state.buttonStatus = !state.buttonStatus;
			})
			.addCase(createTodo.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.buttonStatus = !state.buttonStatus;
			})
			.addCase(deleteTodo.fulfilled, (state, action) => {
				state.status = "succeeded";
				// state.buttonStatus = !state.buttonStatus;
			})
			;
	},
});

export default fetchTodoSlice.reducer;