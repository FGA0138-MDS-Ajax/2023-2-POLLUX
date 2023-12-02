import axios from "axios";

const instance = axios.create({
    baseURL: "https://gamatrack.onrender.com/"
});
export default instance