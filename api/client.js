import { client, create } from "apisauce";
import { response } from "express";

const apiClient = create({
  baseURL: "http://192.168.43.81:9000/api",
});

apiClient.get("/listings").then((response) => {
  if (!response.ok) {
    response.problem;
  }
});
