import React from "react";
import { useEffect } from "react";
import FlashcardService from "../../services/FlashCardService";
import { useFlashCards } from "../Contexts/FlashCardContext";
import FlashCardComponent from "../FlashCardComponent/FlashCardComponent";

function FlashCardFetcher({
  flashCardService,
}: {
  flashCardService: FlashcardService;
}) {
  const { flashCards, storeFlashCards } = useFlashCards();
  useEffect(() => {
    async function fetchFlashCards() {
      try {
        const response = await flashCardService.getFlashCards();
        storeFlashCards(response.data);
      } catch (error) {
        console.error("Error fetching flash cards: ", error);
      }
    }
    fetchFlashCards();
  }, []);
  return (
    <div>
      <h3>Flash cards here:</h3>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {flashCards.length > 0 ? (
          flashCards.map((item, index) => (
            <FlashCardComponent key={index} FlashCard={item} />
          ))
        ) : (
          <p>No flash cards yet</p>
        )}
      </div>
      <p></p>
    </div>
  );
}

export default FlashCardFetcher;
