import axios, { AxiosResponse } from "axios";
import { url } from "../url.json";

//NEEDS TO BE UPDATED
class FlashCardService {
  getFlashCards(): Promise<AxiosResponse> {
    return axios.get(url + "flash-cards/TO-UPDATE", {
      headers: {
        "authorization-token": localStorage.getItem("authorization-token"),
      },
    });
  }
}
export default FlashCardService;
