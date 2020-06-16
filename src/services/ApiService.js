import axios from "axios";

const urlBase = "http://localhost:8080";

const api = axios.create({
  baseURL: urlBase,
});

const ApiService = {
  listCategories: async () => await api.get("categories"),
  listProducts: async (id) => await api.get(`products/?categories=${id}`),
  getProductById: async (id) => await api.get(`products/${id}`),
  login: async (creds) => await api.post("login", creds),
  listEstados: async () => await api.get("states"),
  listCidades: async (id) => await api.get(`states/${id}/cities`),
  insereCliente: async (cliente) => await api.post("clients", cliente),
};
export default ApiService;