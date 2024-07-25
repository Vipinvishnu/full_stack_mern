import { BASE_URL } from "./baseUrl";
import { commonApi } from "./commonApi";

//register
export const registerApi=async(body)=>{
  return await commonApi('POST',`${BASE_URL}/user/register`,body,"")
}


//login

export const loginApi=async(body)=>{
   return await commonApi ('POST',`${BASE_URL}/user/login`,body,"")
}