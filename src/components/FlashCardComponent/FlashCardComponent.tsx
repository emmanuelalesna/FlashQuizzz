import IFlashCard from "../../interfaces/IFlashCard";

function FlashCardComponent({ FlashCard }: IFlashCard) {
  return (
    <div>
      <li>
        <h3>Question:</h3>
        <p>{FlashCard.FlashCardID}</p>
        <p>{FlashCard.FlashCardQuestion}</p>
        <p>{FlashCard.FlashCardAnswer}</p>
        <p>{FlashCard.CreatedDate.toISOString()}</p>
      </li>
    </div>
  );
}

export default FlashCardComponent;
