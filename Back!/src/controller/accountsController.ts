import axios from "axios";

const fetchAccounts = async () => {
  try {
    const response = await axios.get(process.env.API_URL as string);
    return response.data;
  } catch (error) {
    throw new Error("Error al obtener cuentas");
  }
};

export { fetchAccounts };
