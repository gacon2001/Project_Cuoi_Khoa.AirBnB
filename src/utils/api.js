import axios from "axios";
const api = axios.create({
    baseURL: "https://airbnb.cybersoft.edu.vn/api/",
})
api.interceptors.request.use((config)=>{
    config.headers = {
        tokenByClass: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyMCIsIkhldEhhblN0cmluZyI6IjE3LzA3LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY1ODAxNjAwMDAwMCIsIm5iZiI6MTYyNjcxNDAwMCwiZXhwIjoxNjU4MTYzNjAwfQ.CyAnnc8e2Rp7YmuJCdtEj-Wp7RvlDenB9Dad6NV0R20",
        token: localStorage.getItem("Admin") ? `${JSON.parse(localStorage.getItem("Admin")).token}` : "",
    };
    return config;
});
const api2 = axios.create({
    baseURL: "https://airbnb.cybersoft.edu.vn/api/",
});
api2.interceptors.request.use((config)=>{
    config.headers = {
        tokenByClass: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyMCIsIkhldEhhblN0cmluZyI6IjE3LzA3LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY1ODAxNjAwMDAwMCIsIm5iZiI6MTYyNjcxNDAwMCwiZXhwIjoxNjU4MTYzNjAwfQ.CyAnnc8e2Rp7YmuJCdtEj-Wp7RvlDenB9Dad6NV0R20",
        token: localStorage.getItem("User") ? `${JSON.parse(localStorage.getItem("User")).token}` : "",
    };
    return config;
});

export {api, api2};


