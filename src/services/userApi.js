import axios from "axios";
import { axiosInstance } from "../config/axiosInstance";

export const userLogin = async(data)=>{
    try {
        const response = await axiosInstance({
            url:'/user/login',
            method: "POST",
            data,
            withCredentials:true
        })        
        
          return response?.data
    } catch (error) {
        console.log(error);
        
    }
}
