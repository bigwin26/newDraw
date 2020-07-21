import axios from "axios";

const api = axios.create({
  baseURL: "https://yourdraw.ga/api/",
});

export const shoesApi = {
  getList: (page?: number, sort?: string) =>
    api.get("shoes", { params: { page, sort } }),
  getShoesDetail: (code: string) => api.get(`shoes/${code}`),
};
