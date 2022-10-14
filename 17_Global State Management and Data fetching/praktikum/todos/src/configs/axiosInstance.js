import axios from "axios";
import CONST from "../utils/constants";

const config = {
	baseURL: CONST.BASE_URL_API,
    headers: {
        "x-hasura-admin-secret": "tnGiST9Zs6HTZbHJe0qEgR0QFoF30bCsSGfqxRkH2iKB5NkuNh6sfOhPC0Ve9s3n"
        // "x-hasura-admin-secret": CONST.REACT_APP_KEY_ID
    }
    
};

const axiosInstance = axios.create(config);

export default axiosInstance;