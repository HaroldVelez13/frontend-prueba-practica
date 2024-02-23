import axios from "axios";

export default axios.create({
    baseURL: "https://test-nest-ttpp.onrender.com/",
    headers: {
        "Content-type": "application/json"
    }
});