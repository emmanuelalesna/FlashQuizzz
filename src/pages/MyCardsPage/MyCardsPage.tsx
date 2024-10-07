import React from "react";
import FlashCardFetcher from "../../components/FlashCardFetcher/FlashCardFetcher";
import FlashcardService from "../../services/FlashCardService";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import CreateFlashCardForm from "../../components/forms/CreateFlashCardForm/CreateFlashCardForm";
import { FlashCardProvider } from "../../components/Contexts/FlashCardContext";

function MyCardsPage() {
  return (
    <div>
      <FlashCardProvider>
        <Popup
          trigger={
            <button className="btn btn-primary mb-3">Add flash card</button>
          }
          contentStyle={{ padding: "20px" }}
          modal
        >
          <CreateFlashCardForm flashCardService={new FlashcardService()} />
        </Popup>
        <h1>My Cards</h1>
        <FlashCardFetcher flashCardService={new FlashcardService()} />
      </FlashCardProvider>
    </div>
  );
}

export default MyCardsPage;
