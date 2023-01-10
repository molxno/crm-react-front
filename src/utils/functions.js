import axios from "axios";

const BASE_URL_API = import.meta.env.VITE_API_URL;

export const randomId = () => {
  const random = Math.random().toString(36).substring(2);
  const date = Date.now().toString(36);
  return random + date;
};

export const formatDate = (fecha) => {
  const newDate = new Date(fecha);
  const options = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };
  return newDate.toLocaleDateString("es-CO", options);
};

export const formatPresupuesto = (cantidad) => {
  return cantidad.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
  });
};

export const isFilledObject = (obj) => {
  return Object.keys(obj).length !== 0;
};

export const isFilledArray = (arr) => {
  return arr.length !== 0;
};

export const ApiGetAll = async (url) => {
  const response = await axios.get(BASE_URL_API + url);
  return response.data.clientes;
};

export async function ApiPost(url, data) {
  await axios.post(BASE_URL_API+url, data)
    .then(({data}) => {
      console.log(data)
    })
    .catch(({response}) => {
      console.log(response.data.message)
    })
}

export const ApiGetOne = async (url, id) => {
  const response = await axios.get(`${BASE_URL_API}${url}/${id}`);
  const result = await response.data.cliente
  return result;
};

export async function ApiPut(url, data, id) {
  await axios.put(`${BASE_URL_API}${url}/${id}`, data)
    .then(({data}) => {
      console.log(data)
    })
    .catch(({response}) => {
      console.log(response.data.message)
    })
}

export async function ApiDelete(url, id) {
  await axios.delete(`${BASE_URL_API}${url}/${id}`)
    .then(({data}) => {
      console.log(data)
    })
    .catch(({response}) => {
      console.log(response.data.message)
    })
}