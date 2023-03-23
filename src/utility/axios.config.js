import axios from "axios";

const instans = axios.create({
    baseURL: "https://moon-tech-server-pied.vercel.app"
});

export default instans;