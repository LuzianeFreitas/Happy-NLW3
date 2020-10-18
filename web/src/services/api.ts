import axios from "axios";

// Conexão do front-end e back-end

const api = axios.create({
    baseURL: 'http://localhost:3333',
})

export default api;