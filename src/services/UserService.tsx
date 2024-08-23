import axios, { AxiosResponse } from "axios";
import FormState from "../interfaces/IFormState";
import { url } from "../url.json";

class UserService {
  static register(userInfo: FormState): Promise<AxiosResponse> {
    return axios.post(url, {
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      email: userInfo.lastName,
      password: userInfo.password,
      userName: userInfo.userName
    });
  }
}

export default UserService