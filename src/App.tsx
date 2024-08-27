import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterForm from "./components/forms/RegisterForm/RegisterForm";
import UserService from "./services/UserService";
import React from "react";
import EditFlashCardForm from "./components/forms/EditFlashCardForm/EditFlashCardForm";
import FlashCardService from "./services/FlashCardService";
import IFlashCard from "./interfaces/IFlashCard";
import FlashCardFetcher from "./components/FlashCardFetcher/FlashCardFetcher";

function App() {
  const flashCardTest: IFlashCard["FlashCard"] = {
    FlashCardID: 1,
    FlashCardQuestion: "What is React?",
    FlashCardAnswer: "A library for managing user interfaces",
    CreatedDate: new Date(),
  };
  return (
    
    <BrowserRouter>
      <Routes>
        <Route
          path="/register"
          element={<RegisterForm userService={new UserService()} />}
        />
        <Route
          path="/edit-card"
          element={
            <EditFlashCardForm
              flashCardService={new FlashCardService()}
              flashCard={flashCardTest}
            />
          }
        />
        <Route path="all-cards" element={<FlashCardFetcher flashCardService={new FlashCardService()}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
