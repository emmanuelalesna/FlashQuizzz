import axios, { AxiosResponse } from "axios";
import { url, flashCardEndpoint } from "../url.json";
import IFlashCard from "../interfaces/IFlashCard";

class FlashCardService {
  getFlashCards(): Promise<AxiosResponse> {
    const userID = localStorage.getItem("userID");
    if (userID == null) {
      throw new Error("User ID not found.");
    }
    let urlToGet = url + flashCardEndpoint + "/user/" + userID;
    if (userID == "8681bf6e-7063-464e-8223-b40145fc6873") {
      urlToGet = url + flashCardEndpoint;
    }
      return axios.get(urlToGet);
  }

  postFlashCard({ FlashCard }: IFlashCard): Promise<AxiosResponse> {
    if (
      FlashCard.userID == null ||
      FlashCard.flashCardQuestion == "" ||
      FlashCard.flashCardAnswer == "" ||
      FlashCard.flashCardCategoryID == null ||
      FlashCard.createdDate == null
    ) {
      throw new Error("Flash card information is incomplete.");
    }
    return axios.post(
      url + flashCardEndpoint,
      {
        ...FlashCard,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  putFlashCard({ FlashCard }: IFlashCard): Promise<AxiosResponse> {
    if (
      FlashCard.userID == null ||
      FlashCard.flashCardQuestion == "" ||
      FlashCard.flashCardAnswer == "" ||
      FlashCard.flashCardCategoryID == null ||
      FlashCard.createdDate == null
    ) {
      throw new Error("Flash card information is incomplete.");
    }
    return axios.put(url + flashCardEndpoint + "/" + FlashCard.flashCardID, {
      ...FlashCard,
    });
  }

  deleteFlashCard(id: number): Promise<AxiosResponse> {
    return axios.delete(url + flashCardEndpoint + "/" + id);
  }
}
export default FlashCardService;
