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
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing page */}
        <Route path="/" />
        {/* Registration page */}
        <Route path="/register" />
        {/* Login page */}
        <Route path="/login" />
        {/* View all cards page */}
        <Route path="/my-cards" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
