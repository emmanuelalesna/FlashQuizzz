import React, { useEffect } from "react";
import IFlashCard from "../../interfaces/IFlashCard";
import FlashCardService from "../../services/FlashCardService";
import { useFlashCards } from "../Contexts/FlashCardContext";

function FlashCardDeleter(props: {
  flashCardService: FlashCardService;
  flashCard: IFlashCard["FlashCard"];
}) {
  const {deleteFlashCard} = useFlashCards();
  useEffect(() => {
  }, [props.flashCard]);

  async function callDelete() {
    const response = await props.flashCardService.deleteFlashCard(
      props.flashCard.flashCardID!
    );
    if (response.status) {
      console.log("flash card deleted");
      deleteFlashCard(props.flashCard.flashCardID!);
    } else {
      console.log("Error deleting flash card");
    }
  }

  return (
    <div>
      <h3 id="message">
        Are you sure you want to delete flashcard {props.flashCard.flashCardID}?
      </h3>
      <button className="btn btn-danger" onClick={callDelete}>Confirm</button>
    </div>
  );
}

export default FlashCardDeleter;
