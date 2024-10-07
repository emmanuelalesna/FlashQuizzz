import React, { ReactNode, useContext } from "react";
import IFlashCard from "../../interfaces/IFlashCard";

interface FlashCardContextType {
  flashCards: IFlashCard["FlashCard"][];
  storeFlashCards: (FlashCards: IFlashCard["FlashCard"][]) => void;
  addFlashCard: (flashCard: IFlashCard["FlashCard"]) => void;
  deleteFlashCard: (id: number) => void;
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
  return (
    <FlashCardContext.Provider
      value={{ flashCards, storeFlashCards, deleteFlashCard, addFlashCard }}
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
