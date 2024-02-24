import axios from "axios";

export const axiosJs = axios.create({
    baseURL: "https://asanaclone.pythonanywhere.com/",
    headers: {
        "Content-Type": "application/json",
    },
})