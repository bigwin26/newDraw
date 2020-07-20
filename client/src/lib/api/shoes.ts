import axios from "axios";

const api = axios.create({
  baseURL: "http://15.165.109.82:8080/api/",
});

export const shoesApi = {
  getList: (page?: number, sort?: string) =>
    api.get("shoes", { params: { page, sort } }),
  getShoesDetail: (code: string) => api.get(`shoes/${code}`),
};
