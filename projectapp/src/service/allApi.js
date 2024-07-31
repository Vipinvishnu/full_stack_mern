import { BASE_URL } from "./baseUrl";
import { commonApi } from "./commonApi";

//register
export const registerApi = async (body) => {
  return await commonApi("POST", `${BASE_URL}/user/register`, body, "");
};

//login

export const loginApi = async (body) => {
  return await commonApi("POST", `${BASE_URL}/user/login`, body, "");
};

//update profile

export const updateProfile = async (body, headers,id) => {
  return await commonApi("PUT", `${BASE_URL}/user/update-profile/${id}`, body,headers);
};

export const getprofileApi=async(id)=>{
  return await commonApi("GET",`${BASE_URL}/user/getprofile/${id}`,{},"")}
