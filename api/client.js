import { client, create } from "apisauce";
import { response } from "express";

const apiClient = create({
  baseURL: "http://192.168.43.81:9000/api",
});

export default apiClient;
