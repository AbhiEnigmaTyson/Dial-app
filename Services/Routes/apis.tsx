import axios from "axios";

const prodApis = {
  USER_API: " https://jowzxoke22.execute-api.ap-south-1.amazonaws.com/dev/user-management-service",
 
};

const getApiUrls = () => {
    return prodApis;
};

export const APIS = getApiUrls();

export const userApi = axios.create({
  baseURL: APIS.USER_API,
});
