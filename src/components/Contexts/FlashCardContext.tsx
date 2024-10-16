import React, { ReactNode, useContext } from "react";
import IFlashCard from "../../interfaces/IFlashCard";

interface FlashCardContextType {
  flashCards: IFlashCard["FlashCard"][];
  storeFlashCards: (FlashCards: IFlashCard["FlashCard"][]) => void;
  addFlashCard: (flashCard: IFlashCard["FlashCard"]) => void;
  deleteFlashCard: (id: number) => void;
  editFlashCard: (newCard: IFlashCard["FlashCard"]) => void;
  getFlashCard: (id: number) => IFlashCard["FlashCard"] | undefined;
}

const FlashCardContext = React.createContext<FlashCardContextType | null>(null);

function FlashCardProvider({ children }: { children: ReactNode }) {
  const [flashCards, setFlashCards] = React.useState<IFlashCard["FlashCard"][]>(
    []
  );

  function storeFlashCards(FlashCards: IFlashCard["FlashCard"][]) {
    setFlashCards(FlashCards);
  }

  function addFlashCard(flashCard: IFlashCard["FlashCard"]) {
    setFlashCards([...flashCards, flashCard]);
  }

  function deleteFlashCard(id: number) {
    setFlashCards(
      flashCards.filter((flashCard) => flashCard.flashCardID !== id)
    );
  }

  function editFlashCard(newCard: IFlashCard["FlashCard"]) {
    flashCards.filter((flashCard) =>
      flashCard.flashCardID != newCard.flashCardID ? flashCard : newCard
    );
  }

  function getFlashCard(id: number) {
    return flashCards.find(card => card.flashCardID == id);
  }
  return (
    <FlashCardContext.Provider
      value={{
        flashCards,
        storeFlashCards,
        deleteFlashCard,
        addFlashCard,
        editFlashCard,
        getFlashCard
      }}
    >
      {children}
    </FlashCardContext.Provider>
  );
}

function useFlashCards() {
  const context = useContext(FlashCardContext);
  if (!context) {
    throw new Error("useFlashCards must be used within a FlashCardProvider");
  }
  return context;
}

export { FlashCardProvider, useFlashCards };
