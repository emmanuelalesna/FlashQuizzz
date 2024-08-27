import "@testing-library/jest-dom";
import React from "react";
import EditFlashCardForm from "../EditFlashCardForm";
import FlashCardService from "../../../../services/FlashCardService";
import IFlashCard from "../../../../interfaces/IFlashCard";
import { render, screen } from "@testing-library/react";
import { test, expect, describe } from "@jest/globals";
import userEvent from "@testing-library/user-event";
describe("Edit Flash Card Form", () => {
  test("edit flash card form renders the flash card details", () => {
    // arrange
    const flashCard: IFlashCard = {
      FlashCard: {
        FlashCardID: 1,
        FlashCardQuestion: "Question",
        FlashCardAnswer: "Answer",
        CreatedDate: new Date(Date.now()),
      },
    };
    const flashCardService = new FlashCardService();
    render(
      <EditFlashCardForm
        flashCardService={flashCardService}
        flashCard={flashCard.FlashCard}
      />
    );

    jest.spyOn(flashCardService, "putFlashCard");

    expect(screen.getByText("Question")).toBeInTheDocument();
    expect(screen.getByText("Answer")).toBeInTheDocument();
  });

  test("submit button calls event handler", async () => {
    // arrange: render component
    const flashCard: IFlashCard = {
      FlashCard: {
        FlashCardID: 1,
        FlashCardQuestion: "Question",
        FlashCardAnswer: "Answer",
        CreatedDate: new Date(Date.now()),
      },
    };
    render(
      <EditFlashCardForm
        flashCardService={new FlashCardService()}
        flashCard={flashCard.FlashCard}
      />
    );
    const submitButton = screen.getByText("Submit");

    // arrange: get mock function for flashcardservice.putFlashCard
    const serviceSpy = jest.spyOn(FlashCardService.prototype, "putFlashCard");

    //act: click submit button
    try {
      await userEvent.click(submitButton);
    } catch {
      // do nothing here but it should throw error
    } finally {
      // assert: the spy should have been called
      expect(serviceSpy).toHaveBeenCalled();
    }
  });
});
