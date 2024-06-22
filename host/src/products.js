const API_SERVER = "http://localhost:8083";

export const getProducts = () =>
  fetch(`${API_SERVER}/product`).then((res) => res.json());

export const getProductById = (id) =>
  fetch(`${API_SERVER}/product/${id}`).then((res) => res.json());

export const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
