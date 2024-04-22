import axios from "axios";
import * as SecureStore from "expo-secure-store";
export const BASE_URL = "https://api-appdunotes.onrender.com/";

const TIME_OUT = 30000;
export const DUNOTES_TOKEN_NAME = "dunotes_user_token";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
});

export const saveToken = async (key: string, value: string) => {
  try {
    await SecureStore.setItemAsync(key, value);
  } catch (err) {
    console.log("error in saveToken", err);
    throw err;
  }
};

axiosInstance.interceptors.request.use(async (req) => {
  try {
    const access_token = await SecureStore.getItemAsync(DUNOTES_TOKEN_NAME);
    req.headers.Authorization = access_token;
    return req;
  } catch (err) {
    return req;
  }
});

export const fetcher = (url: string) =>
  axiosInstance.get(url).then((res) => res.data);

export default axiosInstance;
