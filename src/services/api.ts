import { IUser } from "types";
import axiosInstance, { DUNOTES_TOKEN_NAME, saveToken } from "./config";

type RegisterUserTypes = IUser;

export const registerUser = async ({
  email,
  name,
  password,
}: RegisterUserTypes) => {
  try {
    const response = await axiosInstance.post("/user/create", {
      email,
      name,
      password,
    });

    return response.data.user;
  } catch (err) {
    console.error("error in registerUser", err);
    throw err;
  }
};

type LoginUserTypes = Omit<IUser, "name">;

export const loginUser = async ({ email, password }: LoginUserTypes) => {
  try {
    const response = await axiosInstance.post("/user/login", {
      email,
      password,
    });
    const _token = response.data.token;
    axiosInstance.defaults.headers.common["Authorization"] = _token;
    saveToken(DUNOTES_TOKEN_NAME, _token);
    return response.data.user;
  } catch (error) {
    console.error("error in loginUser", error);
    throw error;
  }
};
