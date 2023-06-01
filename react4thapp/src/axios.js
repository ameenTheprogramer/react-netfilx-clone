import { Axios } from "axios";
import { baseUrl } from "./constants/constants";
const instance = Axios.create({
    baseURL: baseUrl ,

  });


export default instance