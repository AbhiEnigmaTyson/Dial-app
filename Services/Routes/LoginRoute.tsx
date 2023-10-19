
import { userApi } from "./apis";
import { saveTokenItems } from "../DB/dbServices";
import * as SQLite from 'expo-sqlite'
const db = SQLite.openDatabase('db.testDB')
export const getHeaders = ({ params }: any) => {
  const headers = {
    headers: {
      "Content-Type": "application/json",
    },
    params: {
      // params properties here
    }
  };

  if (params) {
    headers.params = {
      ...headers.params,
      ...params,
    };
  }

  return headers;
};
export const userLogin = async ({ email, password }: { email: string, password: string }) => {
  try {
    let headers = getHeaders({
      email: email,
      password: password,
    })
    const response = await userApi.get(`/login?email=${email}&password=${password}`, headers);
    if (response.data.code == 200) {
      await saveTokenItems(email, password, response.data.model.auth_token)
      return true
    } else {
      return false;
    }
  } catch (error) {
    console.log(error.message);
    return false;
  }
};