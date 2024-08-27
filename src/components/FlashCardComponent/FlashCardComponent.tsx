import React from "react";
import IFlashCard from "../../interfaces/IFlashCard";
import EditFlashCardForm from "../forms/EditFlashCardForm/EditFlashCardForm";
import FlashCardService from "../../services/FlashCardService";
import FlashCardDeleter from "../FlashCardDeleter/FlashCardDeleter";
import CreateRootEditSingleton from "./CreateRootEditSingleton";
import CreateRootDeleteSingleton from "./CreateRootDeleteSingleton";

function FlashCardComponent({ FlashCard }: IFlashCard) {
  function showEditCardForm() {
    document.getElementById("editForm")?.toggleAttribute("hidden");
    const root = CreateRootEditSingleton.getInstance();
    root.render(
      <EditFlashCardForm
        flashCardService={new FlashCardService()}
        flashCard={FlashCard}
      />
    );
  }

  function showDeleteConfirm() {
    document.getElementById("deleteConfirm")?.toggleAttribute("hidden");
    const root = CreateRootDeleteSingleton.getInstance();
    root.render(
      <FlashCardDeleter
        flashCardService={new FlashCardService()}
        flashCard={FlashCard}
      />
    );
  }

  return (
    <div>
      <li>
        <h3>Question:</h3>
        <p>{FlashCard.FlashCardID}</p>
        {/* <p>{FlashCard.FlashCardQuestion}</p>
        <p>{FlashCard.FlashCardAnswer}</p>
        <p>{FlashCard.CreatedDate.toString()}</p> */}
        <button onClick={showEditCardForm}>Edit</button>
        <button onClick={showDeleteConfirm}>Delete</button>
        <div hidden={true} id="editForm">
          <EditFlashCardForm
            flashCardService={new FlashCardService()}
            flashCard={FlashCard}
          />
        </div>
        <div hidden={true} id="deleteConfirm">
          <FlashCardDeleter
            flashCardService={new FlashCardService()}
            flashCard={FlashCard}
          />
        </div>
      </li>
    </div>
  );
}

export default FlashCardComponent;
