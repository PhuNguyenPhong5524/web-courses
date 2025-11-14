// config.js
const BASE_URL = (window.location.hostname === "127.0.0.1" || window.location.hostname === "localhost")
    ? "" // Local: không cần repo name
    : "/" + window.location.pathname.split("/")[1] + "/"; // GitHub Pages: lấy tên repo tự động