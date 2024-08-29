import React, { useEffect } from "react";
import IFlashCard from "../../interfaces/IFlashCard";
import EditFlashCardForm from "../forms/EditFlashCardForm/EditFlashCardForm";
import FlashCardService from "../../services/FlashCardService";
import FlashCardDeleter from "../FlashCardDeleter/FlashCardDeleter";
import Popup from "reactjs-popup";
// import "reactjs-popup/dist/index.css"; //TODO: #14 REMOVE  / Rework - breaks running of component
import Category from "../../interfaces/Category";

/**
 * A React component that displays a flashcard with a question, answer, and creation date.
 *
 * @param {IFlashCard} FlashCard - The flashcard data to be displayed
 * @return {JSX.Element} The JSX element representing the flashcard component
 */

function FlashCardComponent({ FlashCard }: IFlashCard): JSX.Element {
  const [flashCard, setFlashCard] =
    React.useState<IFlashCard["FlashCard"]>(FlashCard);

  useEffect(() => {
    setFlashCard(FlashCard);
  }, [FlashCard]);

  function getCategoryByValue(input: number): string | undefined {
    return Object.keys(Category).find(
      (item: string) => Category[item] === input
    );
  }

  return (
    <div>
      <li>
        <p>{flashCard.flashCardID}</p>
        <p>{flashCard.flashCardQuestion}</p>
        <p>{flashCard.flashCardAnswer}</p>
        <p>{getCategoryByValue(flashCard.flashCardCategory)}</p>
        <p>{flashCard.createdDate.toString()}</p>

        <Popup trigger={<button> Edit</button>} modal>
          <EditFlashCardForm
            flashCardService={new FlashCardService()}
            flashCard={flashCard}
          />
        </Popup>
        <Popup trigger={<button> Delete</button>} modal>
          <FlashCardDeleter
            flashCardService={new FlashCardService()}
            flashCard={flashCard}
          />
        </Popup>
      </li>
    </div>
  );
}

export default FlashCardComponent;
