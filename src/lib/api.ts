import axios from "axios";
import { FormData } from "../types/types";
export const getPlanets = async (searchParams: string[]) => {
  let url = "";
  for (const param of searchParams) {
    url += param;
  }
  return axios
    .get(`${import.meta.env.VITE_API_URL}planets?${url}`)
    .then((response) => response.data);
};

export const deletePlanet = async (id: string) => {
  return axios.delete(`${import.meta.env.VITE_API_URL}planets/${id}`);
  //   .then((response) => response.data);
};
export const createPlanet = async (planet: FormData) => {
  return axios.post(`${import.meta.env.VITE_API_URL}planets`, planet);
};
export const updatePlanet = async ({
  planet,
  id,
}: {
  planet: FormData;
  id: string;
}) => {
  return axios.put(`${import.meta.env.VITE_API_URL}planets/${id}`, planet);
};
