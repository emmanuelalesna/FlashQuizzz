import { useEffect, useState } from "react";
import FlashcardService from "../../services/FlashCardService";
import IFlashCard from "../../interfaces/IFlashCard";
import FlashCardComponent from "../FlashCardComponent/FlashCardComponent";
import React from "react";

function FlashCardFetcher({
  flashCardService,
}: {
  flashCardService: FlashcardService;
}) {
  const [flashCards, setFlashCards] = useState<IFlashCard["FlashCard"][]>([]);

  useEffect(() => {
    async function fetchFlashCards() {
      try {
        const response = await flashCardService.getFlashCards();
        setFlashCards(response.data);
      } catch (error) {
        console.error("Error fetching flash cards: ", error);
      }
    }
    fetchFlashCards();
  }, [flashCardService]);
  const flashCardsTest: IFlashCard["FlashCard"][] = [
    {
      FlashCardID: 2,
      FlashCardQuestion: "Hello",
      FlashCardAnswer: "world",
      CreatedDate: new Date(),
    },
    {
      FlashCardID: 3,
      FlashCardQuestion: "and all",
      FlashCardAnswer: "who",
      CreatedDate: new Date(),
    },
    {
      FlashCardID: 4,
      FlashCardQuestion: "inhabit",
      FlashCardAnswer: "it",
      CreatedDate: new Date(),}
  ];
  return (
    <div>
      <h3>Flash cards here:</h3>
      <ul>
        {flashCardsTest ? (
          flashCardsTest.map((item, index) => (
            <FlashCardComponent key={index} FlashCard={item} />
          ))
        ) : (
          <p>Flash cards loading...</p>
        )}
      </ul>
      {/* <ul>
        {flashCards ? (
          flashCards.map((item, index) => (
            <FlashCardComponent key={index} FlashCard={item.FlashCard} />
          ))
        ) : (
          <p>Flash cards loading...</p>
        )}
      </ul> */}
      <p></p>
    </div>
  );
}

export default FlashCardFetcher;
