import axiosInstance from "../configs/axiosInstance"

const APITodos = {
	async getalltodos() {
		try {
			const response = await axiosInstance.get("/todo");
			return response;
		} catch (err) {
			const { message } = err.response.data;
			throw new Error(message);
		}
	},
	async getodobyid(id) {
		try {
			const response = await axiosInstance.get(`/todo/${id}`);
			return response;
		} catch (err) {
			const { message } = err.response.data;
			throw new Error(message);
		}
	},
	async creatatodo(data) {
		try {
			console.log(data)
			const response = await axiosInstance.post("/todo", data);
			console.log(response);
			return response;
		} catch (err) {
			const { message } = err.response.data;
			throw new Error(message);
		}
	},
	async editatodo(data) {
		try {
			console.log(data)
			const response = await axiosInstance.put(`/todo/${data.id}`, data);
			console.log(response);
			return response;
		} catch (err) {
			const { message } = err.response.data;
			throw new Error(message);
		}
	},
	async deleteatodo({id}) {
		try {
			const response = await axiosInstance.delete(`/todo/${id}`);
			return response;
		} catch (err) {
			const { message } = err.response.data;
			throw new Error(message);
		}
	},
};

export default APITodos;
