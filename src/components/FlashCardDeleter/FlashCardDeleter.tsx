import React, { useEffect } from "react";
import IFlashCard from "../../interfaces/IFlashCard";
import FlashCardService from "../../services/FlashCardService";

function FlashCardDeleter(props: {
  flashCardService: FlashCardService;
  flashCard: IFlashCard["FlashCard"];
}) {
  useEffect(() => {
    document.getElementById(
      "message"
    )!.innerText = `Are you sure you want to delete flashcard ${props.flashCard.FlashCardID}?`;
    document.getElementById("question")!.innerText =
      "Question: " + props.flashCard.FlashCardQuestion;
    document.getElementById("answer")!.innerText =
      "Answer: " + props.flashCard.FlashCardAnswer;
  }, [props.flashCard]);

  async function deleteFlashCard() {
    const response = await props.flashCardService.deleteFlashCard(
      props.flashCard.FlashCardID!
    );
    if (response.status) {
      console.log("flash card deleted");
    } else {
      console.log("Error deleting flash card");
    }
  }

  return (
    <div>
      <h3 id="message">
        Are you sure you want to delete flashcard {props.flashCard.FlashCardID}?
      </h3>
      <p id="question"></p>
      <p id="answer"></p>
      <button onClick={deleteFlashCard}>Confirm</button>
    </div>
  );
}

export default FlashCardDeleter;
