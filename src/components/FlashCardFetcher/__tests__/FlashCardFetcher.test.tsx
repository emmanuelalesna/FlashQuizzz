/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import * as React from "react";
import { render, screen } from "@testing-library/react";
import { test, expect, describe } from "@jest/globals";
import FlashCardFetcher from "../FlashCardFetcher";
import FlashcardService from "../../../services/FlashCardService";
import IFlashCard from "../../../interfaces/IFlashCard";
import Category from "../../../interfaces/Category";
import { AxiosResponse } from "axios";

const testCards: IFlashCard["FlashCard"][] = [
  {
    FlashCardID: 1,
    FlashCardQuestion: "What is React?",
    FlashCardAnswer: "A library for managing user interfaces",
    FlashCardCategory: Category.HTML_CSS,
    CreatedDate: new Date(),
  },
  {
    FlashCardID: 2,
    FlashCardQuestion: "What is API?",
    FlashCardAnswer: "Application Programming Interface",
    FlashCardCategory: Category.JavaScript,
    CreatedDate: new Date(),
  },
  {
    FlashCardID: 3,
    FlashCardQuestion: "What is JSX?",
    FlashCardAnswer: "JavaScript XML",
    FlashCardCategory: Category.React,
    CreatedDate: new Date(),
  },
];

describe("Flash Card Fetcher", () => {
  test("renders fetched flash card details", () => {
    // arrange
    const flashCardService = new FlashcardService();
    const serviceSpy = jest.spyOn(flashCardService, "getFlashCards");
    serviceSpy.mockResolvedValue({data: testCards} as AxiosResponse);
    render(<FlashCardFetcher flashCardService={flashCardService} />);

    testCards.forEach((flashCard) => {
      expect(screen.getByText(flashCard.FlashCardQuestion)).toBeInTheDocument();
      expect(screen.getByText(flashCard.FlashCardAnswer)).toBeInTheDocument();
    });
  });
});
