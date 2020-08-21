import axios from "axios";

const api = axios.create({
  baseURL: "https://15.165.109.82/api/",
});

export const shoesApi = {
  getList: (page?: number, sort?: string) =>
    api.get("shoes", { params: { page, sort } }),
  getShoesDetail: (code: string) => api.get(`shoes/${code}`),
};
